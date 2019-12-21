import { TestBed } from '@angular/core/testing';

import { TestesService } from './testes.service';

describe('TestesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestesService = TestBed.get(TestesService);
    expect(service).toBeTruthy();
  });
});
