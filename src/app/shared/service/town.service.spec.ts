import { TestBed } from '@angular/core/testing';

import { TownService } from './town.service';

describe('VilleService', () => {
  let service: TownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
