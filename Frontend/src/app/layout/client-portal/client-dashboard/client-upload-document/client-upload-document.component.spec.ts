import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUploadDocumentComponent } from './client-upload-document.component';

describe('ClientUploadDocumentComponent', () => {
  let component: ClientUploadDocumentComponent;
  let fixture: ComponentFixture<ClientUploadDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUploadDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUploadDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
