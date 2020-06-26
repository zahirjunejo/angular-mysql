import { TestBed } from '@angular/core/testing';

import { POCDialogService } from './dialog.service';

describe('POCDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: POCDialogService = TestBed.get(POCDialogService);
    expect(service).toBeTruthy();
  });
});
