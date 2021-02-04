import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincialNomineeComponent } from './provincial-nominee.component';

describe('ProvincialNomineeComponent', () => {
  let component: ProvincialNomineeComponent;
  let fixture: ComponentFixture<ProvincialNomineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincialNomineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincialNomineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
