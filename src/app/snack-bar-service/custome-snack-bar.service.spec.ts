import { TestBed } from '@angular/core/testing';

import { CustomeSnackBarService } from './custome-snack-bar.service';

describe('CustomeSnackBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomeSnackBarService = TestBed.get(CustomeSnackBarService);
    expect(service).toBeTruthy();
  });
});
