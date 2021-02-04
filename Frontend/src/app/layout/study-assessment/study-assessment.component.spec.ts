import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAssessmentComponent } from './study-assessment.component';

describe('StudyAssessmentComponent', () => {
  let component: StudyAssessmentComponent;
  let fixture: ComponentFixture<StudyAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
