import { TestBed } from '@angular/core/testing';

import { CarcommonService } from './carcommon.service';

describe('CarcommonService', () => {
  let service: CarcommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarcommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
