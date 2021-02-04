import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-canadian-relative',
  templateUrl: './canadian-relative.component.html',
  styleUrls: ['./canadian-relative.component.scss']
})
export class CanadianRelativeComponent implements OnInit {

  @Input() generalImmigrationForm: FormGroup;

  allForms: FormArray;

  constructor(private formBuilder: FormBuilder, private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.generalImmigrationForm = <FormGroup>this.controlContainer.control;
    let item = this.generalImmigrationForm.get('canadialRelativesHasRelativesInfo') as FormArray;
    item.clear();
    this.addItem()
  }

  createRelativeDetail(): FormGroup {
    return this.formBuilder.group({
      relationship: [""],
      canadianStatus: [""],
      province: [""],
      residencyDuration: [""]
    });
  }

  addItem(): void {
    let item = this.generalImmigrationForm.get('canadialRelativesHasRelativesInfo') as FormArray;
    item.push(this.createRelativeDetail());
    this.allForms = <FormArray>this.generalImmigrationForm.get('canadialRelativesHasRelativesInfo')
  }

  removeItem(i) {
    let item = this.generalImmigrationForm.get('canadialRelativesHasRelativesInfo') as FormArray;
    item.removeAt(i);
    this.allForms = <FormArray>this.generalImmigrationForm.get('canadialRelativesHasRelativesInfo')
  }

}
