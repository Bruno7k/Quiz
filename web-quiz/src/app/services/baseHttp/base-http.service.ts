import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  constructor(private http: HttpClient) {}

  protected get<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.get<T>(url, { params, headers });
  }

  protected post<T>(
    url: string,
    body: any,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.post<T>(url, body, { headers });
  }

  protected put<T>(
    url: string,
    body: any,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.put<T>(url, body, { headers, params });
  }

  protected delete<T>(
    url: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.delete<T>(url, { headers, params });
  }

  protected createHeaders(customHeaders?: {
    [key: string]: string;
  }): HttpHeaders {
    let headers = new HttpHeaders();
    if (customHeaders) {
      Object.keys(customHeaders).forEach((key) => {
        headers = headers.set(key, customHeaders[key]);
      });
    }
    return headers;
  }
}
