import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadianRelativeComponent } from './canadian-relative.component';

describe('CanadianRelativeComponent', () => {
  let component: CanadianRelativeComponent;
  let fixture: ComponentFixture<CanadianRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadianRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanadianRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
