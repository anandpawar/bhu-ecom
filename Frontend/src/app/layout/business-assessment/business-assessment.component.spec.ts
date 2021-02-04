import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAssessmentComponent } from './business-assessment.component';

describe('BusinessAssessmentComponent', () => {
  let component: BusinessAssessmentComponent;
  let fixture: ComponentFixture<BusinessAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
