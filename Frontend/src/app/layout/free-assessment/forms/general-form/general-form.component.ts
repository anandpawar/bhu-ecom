import { Component, OnInit } from '@angular/core';
import { proficiencies, countries, currencies } from './../../../../constants/freeAssessmentData'
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { AssessmentService } from 'src/app/services/assessment.service';
import Swal from 'sweetalert2'
import { generalFormFieldTypes } from './../../../../constants/checkFieldType';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
})
export class GeneralFormComponent implements OnInit {

  countries: any;
  proficiencies: any;
  currencies: any;

  generalImmigrationForm: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder, 
    private assessmentService: AssessmentService,
    private spinner: NgxSpinnerService) { }

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
    this.generalImmigrationForm = this.formBuilder.group({
      profileAge: [""],
      profileNationality: ["", Validators.required],
      profileResidenceCountry: [""],
      profileMaritalStatus: [""],
      profileHasChildren: [""],
      childrenLessThanTwelve: [""],
      childrenGreaterThanTwelve: [""],
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
      expressEntryExistingProfile: [""],
      expressEntryInvitationReceived: [""],
      canadianJobOfferHasOffer: [""],
      canadianJobOfferHasOfferInfo: this.formBuilder.array([ ]),
      canadialRelativesHasFriendMb: [""],
      canadialRelativesHasRelatives: [""],
      canadialRelativesHasRelativesInfo: this.formBuilder.array([ ]),
      currency: [""],
      amount: [""],
      applicantFirstName: ["", Validators.required],
      applicantLastName: ["", Validators.required],
      applicantEmail:["", [ Validators.required,  Validators.email]],
      applicantTelephone:[""],
      is_comments: [""],
      additionalComments: [""],
      // newsLetterImmigrationNewsletter: [""],
      // newsLetterOffers: [""],
    });
  }

  get f() { 
    return this.generalImmigrationForm.controls; 
  }

  /**
   * Submit the form value
   */
  onSubmit() {
    console.log(this.generalImmigrationForm.value)

    if (this.generalImmigrationForm.invalid) {
      return;
    }
    this.spinner.show();
    this.removeEmptyArrayObject(this.generalImmigrationForm.value);
    this.convertToTypes(generalFormFieldTypes, this.generalImmigrationForm.value);
    this.generalImmigrationForm.value['type'] = "general";
    this.assessmentService.createGeneralAssessment(this.generalImmigrationForm.value).subscribe(res => {
      if(res['id']){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Assessment form submitted successfully!',
          showConfirmButton: false,
          timer: 2000
        });
        location.reload();
        this.spinner.hide();
      }
    });
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


