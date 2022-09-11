import { TestBed } from '@angular/core/testing';

import { HotelcommonService } from './hotelcommon.service';

describe('HotelcommonService', () => {
  let service: HotelcommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelcommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
