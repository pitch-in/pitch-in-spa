import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get = <T>(path: string, params?: HttpParams): Observable<T> =>
    this.httpClient.get<T>(url(path), { params });

  post = <T>(path: string, body?: any): Observable<T> =>
    this.httpClient.post<T>(url(path), body);

  put = <T>(path: string, body?: any): Observable<T> =>
    this.httpClient.put<T>(url(path), body);

  delete = (path: string): Observable<any> => this.httpClient.delete(url(path));
}

export function url(url: string): string {
  return `${environment.apiUrl}api/${url}`;
}
