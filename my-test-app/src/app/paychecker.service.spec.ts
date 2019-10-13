import { TestBed } from '@angular/core/testing';

import { PaycheckerService } from './paychecker.service';

describe('PaycheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaycheckerService = TestBed.get(PaycheckerService);
    expect(service).toBeTruthy();
  });
});
