import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialAssessmentComponent } from './provincial-assessment.component';

describe('ProvincialAssessmentComponent', () => {
  let component: ProvincialAssessmentComponent;
  let fixture: ComponentFixture<ProvincialAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincialAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincialAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
