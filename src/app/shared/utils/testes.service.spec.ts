import { TestBed, fakeAsync } from '@angular/core/testing';

import { TestesService } from './testes.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Request } from '../models/request';
import { Response } from '../models/response';

describe('TestesService', () => {
  let masterService: TestesService;
  let httpClientValue: jasmine.SpyObj<TestesService>;

  beforeEach(() => {
    const spyHttpClient = jasmine.createSpyObj('HttpClient', ['post', 'get']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: spyHttpClient },
      ],
    })
  });

  beforeEach(() => {
    const objectMock = {
      "teste1": "ok",
      "teste2": "ok",
      "teste3": "ok",
      "teste4": {
        "compostName1": "ok",
        "compostName2": "ok",
        "compostName3": {
          "lucas1": "ok",
          "lucas2": "ok"
        }
      },
      "teste5": [
        { "compost1": "result1" },
        { "compost2": "result2" },
        { "compost3": "result3" }
      ]
    }
    masterService = TestBed.get(TestesService);
    httpClientValue = TestBed.get(HttpClient);
    httpClientValue.get.and.returnValue(of(objectMock));
    httpClientValue.post.and.returnValue(of(objectMock));
  })

  it('should be created', () => {
    expect(masterService)
      .toBeTruthy();
  });

  it('should call get and return a typed Object and have annotation values with decriptedValue', fakeAsync(() => {
    masterService.get('mock', new Response())
      .subscribe((_result: Response) => {
        expect(_result instanceof Response).toBeTruthy();
        expect(_result.teste1 === 'decriptedValue')
          .toBeTruthy();
      });
  }));

  it('should call post and return a typed Object and have annotation values with decriptedValue', fakeAsync(() => {
    masterService.post('mock', {}, new Request(), new Response())
      .subscribe((_result: Response) => {
        expect(_result instanceof Response)
          .toBeTruthy();
        expect(_result.teste1 === 'decriptedValue')
          .toBeTruthy();
      });
  }));
});
