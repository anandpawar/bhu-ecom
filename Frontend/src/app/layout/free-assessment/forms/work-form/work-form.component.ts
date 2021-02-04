import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { proficiencies, countries, currencies } from './../../../../constants/freeAssessmentData'
import Swal from 'sweetalert2';
import { AssessmentService } from 'src/app/services/assessment.service';
import { workFormFieldTypes } from './../../../../constants/checkFieldType';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss']
})
export class WorkFormComponent implements OnInit {

  countries: any;
  proficiencies: any;
  currencies: any;

  workImmigrationForm: FormGroup = new FormGroup({});
  
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
    this.workImmigrationForm = this.formBuilder.group({
      applicantFirstName: ["", Validators.required],
      applicantLastName: ["", Validators.required],
      applicantEmail:["", [ Validators.required,  Validators.email]],
      applicantTelephone:[""],
      personalAge: [""],
      nationality: [""],
      countryResidence: [""],
      personalNetWorthNetWorth:[""],
      amount: [""],
      isManagementExperience: [""],
      isBusinessOwned: [""],
      customerQueries: [""],
      // newsLetterImmigrationNewsletter:[""],
      // newsLetterOffers:[""],
      experienceBusinessInfoQwnershipPercentage:[""],
      experienceBusinessInfoEmployees:[""],
      experienceBusinessInfoCurrency:[""],
      experienceBusinessInfoAnnualSales:[""],
      experienceBusinessInfoAnnualProfitAfterTax:[""],
      experienceBusinessInfoCompanyNetWorth:[""],
      experienceBusinessInfoManageOtherBusiness:[""]
    });
  }

  get f() { 
    return this.workImmigrationForm.controls; 
  }

  /**
   * Submit the form value
   */
  onSubmit() {
    console.log(this.workImmigrationForm.value)

    if (this.workImmigrationForm.invalid) {
      return;
    }
    this.spinner.show();
    this.convertToTypes(workFormFieldTypes, this.workImmigrationForm.value)
    this.workImmigrationForm.value['type'] = "work";
    this.assessmentService.createWorkAssessment(this.workImmigrationForm.value).subscribe(res => {
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
    console.log(this.workImmigrationForm.value)
  }

  convertToTypes(fields, formValues){
    for (const key in formValues) {
        const element = formValues[key];
        if(fields[key] == "boolean"){
            formValues[key] = element == "true" ? true : false;
        }
    }
  }
}
