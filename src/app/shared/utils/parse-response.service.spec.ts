import { TestBed } from '@angular/core/testing';

import { ParseResponseService } from './parse-response.service';

describe('ParseResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseResponseService = TestBed.get(ParseResponseService);
    expect(service).toBeTruthy();
  });
});
