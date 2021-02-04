import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyInCanadaComponent } from './study-in-canada.component';

describe('StudyInCanadaComponent', () => {
  let component: StudyInCanadaComponent;
  let fixture: ComponentFixture<StudyInCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyInCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyInCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
