import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AssessmentService } from 'src/app/services/assessment.service';
import { studyFormFieldTypes } from './../../../../constants/checkFieldType';
import { NgxSpinnerService } from "ngx-spinner";
import { proficiencies, countries, currencies } from './../../../../constants/freeAssessmentData'

@Component({
  selector: 'app-study-form',
  templateUrl: './study-form.component.html',
  styleUrls: ['./study-form.component.scss']
})
export class StudyFormComponent implements OnInit {

  countries: any;
  proficiencies: any;
  currencies: any;
  studyImmigrationForm: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder, 
    private assessmentService: AssessmentService,
    private spinner: NgxSpinnerService ) { }

  ngOnInit(): void {
    this.countries = countries;
    this.currencies = currencies;
    this.proficiencies = proficiencies;
    this.createFormGroup()
  }

  /**
   * Created a form group for storing field data
   */
  createFormGroup = () => {
    this.studyImmigrationForm = this.formBuilder.group({
      profileAge: [""],
      profileNationality: ["", Validators.required],
      profileResidenceCountry: [""],
      profileMaritalStatus: [""],
      profileHasChildren: [""],
      childrenLessThanTwelve: [""],
      childrenGreaterThanTwelve: [""],
      sponsorship:[""],
      languageEnglish: this.formBuilder.group({
        writing: [""],
        reading: [""],
        speaking: [""],
        listening: [""]
      }),
      languageFrench: this.formBuilder.group({
        writing: [""],
        reading: [""],
        speaking: [""],
        listening: [""]
      }),
      educationHighschoolCompleted: [""],
      educationHasPostSecondaryEducation: [""],
      educationHasPostSecondaryEducationInfo: this.formBuilder.array([ ]),
      workHasWorkExperience10Yr: [""],
      HasWorkExperience10YrInfo: this.formBuilder.array([ ]),
      hasSecuredCanadianUniversity: [false],
      canadialRelativesHasFriendMb: [""],
      canadialRelativesHasRelatives: [""],
      canadialRelativesHasRelativesInfo: this.formBuilder.array([ ]),
      sponsorDetail: [""],
      applicantFirstName: ["", Validators.required],
      applicantLastName: ["", Validators.required],
      applicantEmail:["", [ Validators.required,  Validators.email]],
      applicantTelephone:[""],
      isAdditionalQueries:[""],
      additionalQueries:[""],
      // newsLetterImmigrationNewsletter:[""],
      // newsLetterOffers:[""],
      paAsSponsorCanadianStatus:[""],
      paAsSponsorAge:[""], 
      paAsSponsorRelationship:[""]
    });
  }

  get f() { 
    return this.studyImmigrationForm.controls; 
  }

  /**
   * Submit the form value
   */
  onSubmit() {
    console.log("BEFORE",this.studyImmigrationForm.value)

    if (this.studyImmigrationForm.invalid) {
      return;
    }
    this.spinner.show();
    this.removeEmptyArrayObject(this.studyImmigrationForm.value);
    this.convertToTypes(studyFormFieldTypes, this.studyImmigrationForm.value)
    this.studyImmigrationForm.value['type'] = "study";
    this.assessmentService.createStudyAssessment(this.studyImmigrationForm.value).subscribe(res => {
      if(res['id']){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Assessment form submitted successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        location.reload();
        this.spinner.hide();
      }
    });

    console.log("AFTER",this.studyImmigrationForm.value)
  }

  convertToTypes(fields, formValues){
    for (const key in formValues) {
      if(formValues.hasOwnProperty(key)){
        const element = formValues[key];
        let count = Object.keys(element).length;
        if(count>1 && (typeof element != 'string')){
          if (Array.isArray(element)) {
            element.forEach(element => {
              this.convertToTypes(fields[key], element)
            });
          }else{
            this.convertToTypes(fields[key], element)
          } 
        } 
        if(fields[key] == "boolean"){
          if(element == "true"){
            formValues[key] = true;
          }else{
            formValues[key] = false;
          }
        }
      }
    }
  }

  removeEmptyArrayObject(formValues){
    for (const key in formValues) {
      const element = formValues[key];
      if (Array.isArray(element)) {
        if(element.length){
          for(var i = element.length -1; i >= 0 ; i--){
            let isAllValuesEmpty = this.checkEmptyValues(element[i]);
            if(isAllValuesEmpty){
              element.splice(i, 1);
            }   
          }
        }
      }  
    }
  }

  checkEmptyValues(element){
    let isAllValuesEmpty = true;
    for (const key in element) {
      const value = element[key];
      if(value){
        isAllValuesEmpty = false;
      }
    }
    return isAllValuesEmpty;
  }
}
