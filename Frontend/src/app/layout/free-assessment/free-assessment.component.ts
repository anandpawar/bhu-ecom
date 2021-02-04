import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-assessment',
  templateUrl: './free-assessment.component.html',
  styleUrls: ['./free-assessment.component.scss']
})
export class FreeAssessmentComponent implements OnInit {

  renderFormName: string = 'generalImmigration';

  constructor() { }

  ngOnInit(): void {
  }

  updateRenderFormName = (name) => {
    this.renderFormName = name;
  }
}
