import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInCanadaComponent } from './work-in-canada.component';

describe('WorkInCanadaComponent', () => {
  let component: WorkInCanadaComponent;
  let fixture: ComponentFixture<WorkInCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
