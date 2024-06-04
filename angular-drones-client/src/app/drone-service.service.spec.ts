import { TestBed } from '@angular/core/testing';

import { DroneService } from './drone-service.service';

describe('DroneServiceService', () => {
  let service: DroneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DroneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
