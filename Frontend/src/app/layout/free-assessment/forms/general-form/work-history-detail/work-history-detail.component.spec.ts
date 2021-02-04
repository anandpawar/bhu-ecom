import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryDetailComponent } from './work-history-detail.component';

describe('WorkHistoryDetailComponent', () => {
  let component: WorkHistoryDetailComponent;
  let fixture: ComponentFixture<WorkHistoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkHistoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
