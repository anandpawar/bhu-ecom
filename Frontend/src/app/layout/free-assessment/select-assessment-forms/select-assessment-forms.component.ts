import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {freeAssessmentType} from './enum/freeAssessmentType';

@Component({
  selector: 'app-select-assessment-forms',
  templateUrl: './select-assessment-forms.component.html',
  styleUrls: ['./select-assessment-forms.component.scss']
})
export class SelectAssessmentFormsComponent implements OnInit {

  selectedFormType: any = {};
  otherFormType: Array<any> = [];
  
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.selectedFormType = freeAssessmentType[0];
    this.otherFormType.push(freeAssessmentType[1], freeAssessmentType[2]);
  }

  /**
   * Update the selection of form
   * @param any type of selection
   */
  updateSelection = (type: any) => {
    this.selectedFormType = type;
    this.valueChange.emit(type.key);
    this.otherFormType = [];
    freeAssessmentType.forEach(assessmentType => {
      if(assessmentType.key != type.key) {
        this.otherFormType.push(assessmentType);
      }
    });
  }

}
