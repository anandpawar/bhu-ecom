import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, ControlContainer, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-history-detail',
  templateUrl: './work-history-detail.component.html',
  styleUrls: ['./work-history-detail.component.scss']
})
export class WorkHistoryDetailComponent implements OnInit {

  @Input() generalImmigrationForm: FormGroup;

  allForms: FormArray;

  constructor(private formBuilder: FormBuilder, private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.generalImmigrationForm = <FormGroup>this.controlContainer.control;
    let item = this.generalImmigrationForm.get('HasWorkExperience10YrInfo') as FormArray;
    item.clear();
    this.addItem()
  }

  createWorkDetail(): FormGroup {
    return this.formBuilder.group({
      occupation: [""],
      duration: [""],
      when: [""],
      location: [""],
      province: [""],
      scheduleType: [""],
      workType: [""],
      workPermit: [""]
    });
  }

  addItem(): void {
    let item = this.generalImmigrationForm.get('HasWorkExperience10YrInfo') as FormArray;
    item.push(this.createWorkDetail());
    this.allForms = <FormArray>this.generalImmigrationForm.get('HasWorkExperience10YrInfo')
  }

  removeItem(i) {
    let item = this.generalImmigrationForm.get('HasWorkExperience10YrInfo') as FormArray;
    item.removeAt(i);
    this.allForms = <FormArray>this.generalImmigrationForm.get('HasWorkExperience10YrInfo')
  }

  get f() { 
    return this.generalImmigrationForm.get('HasWorkExperience10YrInfo')['controls']; 
  }

  get getForm() { 
    return this.generalImmigrationForm.get('HasWorkExperience10YrInfo')
  }
}
