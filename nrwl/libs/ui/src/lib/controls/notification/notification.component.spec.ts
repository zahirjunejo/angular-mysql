import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POCNotificationComponent } from './poc-notification.component';

describe('POCNotificationComponent', () => {
  let component: POCNotificationComponent;
  let fixture: ComponentFixture<POCNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [POCNotificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POCNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
