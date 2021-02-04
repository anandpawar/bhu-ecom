import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilySponsorshipComponent } from './family-sponsorship.component';

describe('FamilySponsorshipComponent', () => {
  let component: FamilySponsorshipComponent;
  let fixture: ComponentFixture<FamilySponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilySponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilySponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
