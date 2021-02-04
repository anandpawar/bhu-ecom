import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-canadian-job',
  templateUrl: './canadian-job.component.html',
  styleUrls: ['./canadian-job.component.scss']
})
export class CanadianJobComponent implements OnInit {

  @Input() generalImmigrationForm: FormGroup;

  allForms: FormArray;

  constructor(private formBuilder: FormBuilder, private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.generalImmigrationForm = <FormGroup>this.controlContainer.control;
    let item = this.generalImmigrationForm.get('canadianJobOfferHasOfferInfo') as FormArray;
    item.clear();
    this.addItem()
  }
  
  createCanadianRelative(): FormGroup {
    return this.formBuilder.group({
      occupation: [""],
      duration: [""],
      province: [""],
      scheduleType: [""],
      hasApproved: [""],
      isApproved: [""]
    });
  }

  addItem(): void {
    let item = this.generalImmigrationForm.get('canadianJobOfferHasOfferInfo') as FormArray;
    item.push(this.createCanadianRelative());
    this.allForms = <FormArray>this.generalImmigrationForm.get('canadianJobOfferHasOfferInfo')
  }

  get f() { 
    return this.generalImmigrationForm.get('canadianJobOfferHasOfferInfo')['controls']
  }
}
