/*
 * CoreApiService
 * This is a common http client service used throughout the application.
 * It automatically formats your API depending on the environments you are working with.
 */

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public constructor(public http: HttpClient) { }

  public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(environment.api_endpoint + endPoint, options);
  }

  public post<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(environment.api_endpoint + endPoint, params, options);
  }

  public put<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(environment.api_endpoint + endPoint, params, options);
  }

  public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(environment.api_endpoint + endPoint, options);
  }

  public all<T>(observables: any) {
    return forkJoin<T>(observables);
  }

  public convertObjectIntoHttpParams(object: object, params: HttpParams = new HttpParams()): HttpParams {
    Object.entries(object).forEach(
      ([param, value]) => {
        if (value instanceof Object) {
          params.append(param, JSON.stringify(value));
        } else if (value instanceof Array) {
          value.forEach((subValue) => {
            if (subValue instanceof Object || subValue instanceof Array) {
              params.append(param, JSON.stringify(subValue));
            } else {
              params.append(param, subValue);
            }
          });
        } else {
          params.append(param, value);
        }
      }
    );

    return params;
  }
}
