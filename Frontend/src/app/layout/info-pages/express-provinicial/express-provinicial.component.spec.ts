import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressProvinicialComponent } from './express-provinicial.component';

describe('ExpressProvinicialComponent', () => {
  let component: ExpressProvinicialComponent;
  let fixture: ComponentFixture<ExpressProvinicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressProvinicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressProvinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
