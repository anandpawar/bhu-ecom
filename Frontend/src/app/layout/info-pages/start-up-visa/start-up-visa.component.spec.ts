import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUpVisaComponent } from './start-up-visa.component';

describe('StartUpVisaComponent', () => {
  let component: StartUpVisaComponent;
  let fixture: ComponentFixture<StartUpVisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartUpVisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartUpVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
