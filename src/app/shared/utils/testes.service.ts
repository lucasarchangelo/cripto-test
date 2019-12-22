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

  public get<T>(url: string, criptoProperties: CriptoProperties): Observable<T> {

    return this.httpClient.get<T>(url)
      .pipe(
        map((response: T) => {
          if (criptoProperties.hasDecritpValues) {
            this.criptionValues<T>('decriptionType', criptoProperties.decriptValues, response);
          }
          return response;
        })
      );
  }

  public post<T>(url: string, body: any, criptoProperties: CriptoProperties): Observable<T> {
    let encriptedBody;

    if (criptoProperties.hasEncriptionValues) {
      encriptedBody = this.criptionValues<T>('encriptionType', criptoProperties.encriptionValues, body);
    } else {
      encriptedBody = body;
    }

    return this.httpClient.post<T>(url, encriptedBody)
      .pipe(
        map((response: T) => {
          if (criptoProperties.hasDecritpValues) {
            this.criptionValues<T>('decriptionType', criptoProperties.decriptValues, response);
          }
          return response;
        })
      );
  }

  private criptionValues<T>(criptionType: string, criptionValues: Array<string>, reqResp: T): T {
    if (criptionValues.length > 0) {
      return null;
    } else {
      return this.recursiveCript(reqResp, criptionType);
    }

  }

  private recursiveCript<T>(reqResp: T, criptionType: string): T {
    const keys = Object.keys(reqResp);
    keys.forEach((element) => {
      if (typeof reqResp[element] === 'string' || typeof reqResp[element] === 'number') {
        reqResp[element] = criptionType === 'encriptionType' ? 'encriptedValue' : 'decriptedValue';
      } else {
        this.recursiveCript(reqResp[element], criptionType);
      }
    })
    return reqResp;
  }
}
