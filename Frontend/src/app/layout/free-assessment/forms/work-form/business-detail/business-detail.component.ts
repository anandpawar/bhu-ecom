import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.scss']
})
export class BusinessDetailComponent implements OnInit {

  @Input() workImmigrationForm: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.workImmigrationForm = <FormGroup>this.controlContainer.control;
  }

}
