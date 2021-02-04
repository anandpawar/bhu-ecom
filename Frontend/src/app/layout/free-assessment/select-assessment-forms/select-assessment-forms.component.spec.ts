import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAssessmentFormsComponent } from './select-assessment-forms.component';

describe('SelectAssessmentFormsComponent', () => {
  let component: SelectAssessmentFormsComponent;
  let fixture: ComponentFixture<SelectAssessmentFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAssessmentFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAssessmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
