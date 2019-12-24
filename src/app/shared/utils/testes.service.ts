import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CriptoProperties } from '../models/cripto-properties';

@Injectable({
  providedIn: 'root'
})
export class TestesService {

  constructor(private readonly httpClient: HttpClient) { }

  public get<T>(url: string, prop: any): Observable<T> {
    return this.httpClient.get<T>(url)
      .pipe(
        map((response: T) => {
          this.recursiveCript<T>('decriptionType', Object.setPrototypeOf(this.createObjectPrototype(response, prop), prop));
          return response;
        })
      );
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(url, this.recursiveCript<T>('encriptionType', body))
      .pipe(
        map((response: T) => {
          this.recursiveCript<T>('decriptionType', response);
          return response;
        })
      );
  }

  private recursiveCript<T>(criptionType: string, reqResp: T): T {
    const keys = Object.keys(reqResp);
    keys.forEach((element) => {
      if (typeof reqResp[element] === 'string' || typeof reqResp[element] === 'number') {
        console.log('TESTELUCAS ', 'element ', element , Reflect.getMetadata('decription', reqResp, element));
        if(Reflect.getMetadata('decription', reqResp, element)) { 
          reqResp[element] = criptionType === 'encriptionType' ? 'encriptedValue' : 'decriptedValue';
        }
      } else {
        this.recursiveCript(criptionType, reqResp[element], );
      }
    })
    return reqResp;
  }

  private createObjectPrototype<T>(object, instanceObject): T {
    const instanceObjectKeys =  Object.keys(instanceObject);
    Object.keys(object)
      .forEach((element) => {
        if(instanceObjectKeys.includes(element)) {
          if(typeof object[element] !== 'string' && typeof object[element] !== 'number') {
            object[element] = Object.setPrototypeOf(object[element], instanceObject[element]);
            this.createObjectPrototype(object[element], instanceObject[element]);
          }
        }
      });
      return object;
  }
}
