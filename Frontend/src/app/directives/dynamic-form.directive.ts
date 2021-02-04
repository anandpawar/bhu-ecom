import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicForm]',
})
export class DynamicFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}