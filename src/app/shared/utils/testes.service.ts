import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestesService {

  constructor(private readonly httpClient: HttpClient) { }

  public get<T>(url: string, instantiatedResponseObject: any): Observable<T> {
    return this.httpClient.get<T>(url)
      .pipe(
        map((response: T) => {
          this.recursiveCript<T>('decription', Object.setPrototypeOf(this.createObjectPrototype(response, instantiatedResponseObject), instantiatedResponseObject));
          return response;
        })
      );
  }

  public post<T>(
    url: string,
    body: any,
    instantiatedRequestObject: any,
    instantiatedResponseObject: any
    ): Observable<T> {
    const teste = this.recursiveCript<T>('encription', Object.setPrototypeOf(this.createObjectPrototype(body, instantiatedRequestObject), instantiatedRequestObject));
    console.log('Request: ', teste);
    return this.httpClient.post<T>(url, body)
      .pipe(
        map((response: T) => {
          this.recursiveCript<T>('decription', Object.setPrototypeOf(this.createObjectPrototype(response, instantiatedResponseObject), instantiatedResponseObject));
          return response;
        })
      );
  }

  private recursiveCript<T>(criptionType: string, reqResp: T): T {
    const keys = Object.keys(reqResp);
    keys.forEach((element) => {
      if (typeof reqResp[element] === 'string' || typeof reqResp[element] === 'number') {
        if(Reflect.getMetadata(criptionType, reqResp, element)) { 
          reqResp[element] = criptionType === 'encription' ? 'encriptedValue' : 'decriptedValue';
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
