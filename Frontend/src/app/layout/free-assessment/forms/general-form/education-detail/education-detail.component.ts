import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {

  @Input() generalImmigrationForm: FormGroup;

  allForms: FormArray;

  constructor(private formBuilder: FormBuilder, private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.generalImmigrationForm = <FormGroup>this.controlContainer.control;
    let item = this.generalImmigrationForm.get('educationHasPostSecondaryEducationInfo') as FormArray;
    item.clear();
    this.addItem()
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      typeOfProgram: [""],
      duration: [""],
      isCompleted: [""],
      location: [""],
      province: [""]
    });
  }

  addItem(): void {
    let item = this.generalImmigrationForm.get('educationHasPostSecondaryEducationInfo') as FormArray;
    item.push(this.createItem());
    this.allForms = <FormArray>this.generalImmigrationForm.get('educationHasPostSecondaryEducationInfo')
  }

  removeItem(i) {
    let item = this.generalImmigrationForm.get('educationHasPostSecondaryEducationInfo') as FormArray;
    item.removeAt(i);
    this.allForms = <FormArray>this.generalImmigrationForm.get('educationHasPostSecondaryEducationInfo')
  }

  get f() { 
    return this.generalImmigrationForm.get('educationHasPostSecondaryEducationInfo')['controls']
  }

  get getForm() { 
    return this.generalImmigrationForm.get('educationHasPostSecondaryEducationInfo')
  }
}
