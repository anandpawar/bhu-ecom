import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DynamicFormDirective } from './../../../directives/dynamic-form.directive'
import { GeneralFormComponent } from '../forms/general-form/general-form.component';
import { WorkFormComponent } from '../forms/work-form/work-form.component';
import { StudyFormComponent } from '../forms/study-form/study-form.component';

const allFormsWithKey = [
  { key: 'generalImmigration', component: GeneralFormComponent },
  { key: 'workImmigration', component: WorkFormComponent },
  { key: 'studyImmigration', component: StudyFormComponent }
]

@Component({
  selector: 'app-dynamic-form-loader',
  templateUrl: './dynamic-form-loader.component.html',
  styleUrls: ['./dynamic-form-loader.component.scss']
})



export class DynamicFormLoaderComponent implements OnInit {

  @Input() selectedKey: string;

  @ViewChild(DynamicFormDirective, {static: true}) dynamicForm: DynamicFormDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnChanges(){
    this.loadComponent();
  }

  loadComponent() {
    let index = allFormsWithKey.findIndex( (element) => ( element.key === this.selectedKey ))
    let selectedForm = allFormsWithKey[index];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<any>selectedForm.component);
    const viewContainerRef = this.dynamicForm.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
