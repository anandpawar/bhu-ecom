import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadianJobComponent } from './canadian-job.component';

describe('CanadianJobComponent', () => {
  let component: CanadianJobComponent;
  let fixture: ComponentFixture<CanadianJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadianJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadianJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
