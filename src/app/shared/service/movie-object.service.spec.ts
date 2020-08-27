import { TestBed } from '@angular/core/testing';

import { MovieObjectService } from './movie-object.service';

describe('MovieObjectService', () => {
  let service: MovieObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
