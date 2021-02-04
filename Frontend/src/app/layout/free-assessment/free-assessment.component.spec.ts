import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAssessmentComponent } from './free-assessment.component';

describe('FreeAssessmentComponent', () => {
  let component: FreeAssessmentComponent;
  let fixture: ComponentFixture<FreeAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
