import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormLoaderComponent } from './dynamic-form-loader.component';

describe('DynamicFormLoaderComponent', () => {
  let component: DynamicFormLoaderComponent;
  let fixture: ComponentFixture<DynamicFormLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
