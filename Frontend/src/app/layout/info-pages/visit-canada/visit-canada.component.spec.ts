import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCanadaComponent } from './visit-canada.component';

describe('VisitCanadaComponent', () => {
  let component: VisitCanadaComponent;
  let fixture: ComponentFixture<VisitCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
