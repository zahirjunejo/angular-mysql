import { TestBed } from '@angular/core/testing';

import { POCNotificationService } from './poc-notification.service';

describe('POCNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: POCNotificationService = TestBed.get(
      POCNotificationService
    );
    expect(service).toBeTruthy();
  });
});
