import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStartChatComponent } from './client-start-chat.component';

describe('ClientStartChatComponent', () => {
  let component: ClientStartChatComponent;
  let fixture: ComponentFixture<ClientStartChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStartChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStartChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
