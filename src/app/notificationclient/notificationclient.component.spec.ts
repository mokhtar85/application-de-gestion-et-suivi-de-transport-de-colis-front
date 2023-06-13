import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationclientComponent } from './notificationclient.component';

describe('NotificationclientComponent', () => {
  let component: NotificationclientComponent;
  let fixture: ComponentFixture<NotificationclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
