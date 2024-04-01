import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private _refreshrequired = new Subject<void>();
  get RequiredRefresh() {
    return this._refreshrequired;
  }
  constructor(
    private httpClient: HttpClient,
    
  ) {}
 
  header() {
    
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers':'Origin, Access-Control-Allow-Headers, Content-Type, X-Auth-Token, Authorization, X-Requested-With,observe',
      
    });
  }
  public makeGetRequest<T>(url: string): Observable<T | null | undefined> {
    return this.httpClient
      .get<T>(url, {
        observe: 'response',
        headers: this.header(),
      })
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {

          if(error)
          if(error.error)
          if(error.error.message)
           alert(error.error.message);
          return of();
      }),
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      );
  }

  public makePostRequest<T>(
    url: string,
    body?: any
  ): Observable<T | null | undefined> {
    return this.httpClient
      .post<T>(url, body, {
        observe: 'response',
        
      })
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {

           if(error)
          if(error.error)
          if(error.error.message)
           alert(error.error.message);

           
          return of();
      }),
       map((res: HttpResponse<T>) => {
          this.RequiredRefresh.next();
          return res.body;
        })
      );
  }
  public makePostRequestWithHeader<T>(
    url: string,
    header: HttpHeaders,
    body?: any
  ): Observable<T | null | undefined> {
    return this.httpClient
      .post<T>(url, body, {
        observe: 'response',
        headers: header,
      })
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {
        
           if(error)
          if(error.error)
          if(error.error.message)
           alert(error.error.message);

          return of();
      }),
        map((res: HttpResponse<T>) => {
          this.RequiredRefresh.next();
          return res.body;
        })
      );
  }

  public makePutRequest<T>(
    url: string,
    body?: any
  ): Observable<T | null | undefined> {
    return this.httpClient
      .put<T>(url, body, {
        observe: 'response',
        
      })
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {
       
          if(error)
          if(error.error)
          if(error.error.message)
           alert(error.error.message);

          return of();
      }),
        map((res: HttpResponse<T>) => {
          this.RequiredRefresh.next();

          return res.body;
        })
        
      );
  }

  public makePatchRequest<T>(
    url: string,
    body?: any
  ): Observable<T | null | undefined> {
    return this.httpClient
      .patch<T>(url, body, {
        observe: 'response',
      
      })
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {

           if(error)
          if(error.error)
          if(error.error.message)
           alert(error.error.message);

          return of();
      }),
       map((res: HttpResponse<T>) => {
          this.RequiredRefresh.next();
          return res.body;
        })
      );
  }

  public makeDeleteRequest<T>(
    url: string,
    body?: any
  ): Observable<T | null | undefined> {
    return this.httpClient
      .request<T>('delete', url, {
        body,
        observe: 'response',

      })
      .pipe(
        catchError((error: any, caught: Observable<any>): Observable<any> => {

            if(error)
          if(error.error)
          if(error.error.message)
          alert(error.error.message);

          return of();
      }),
       map((res: HttpResponse<T>) => {
          this.RequiredRefresh.next();

          return res.body;
        })
      );
  }
}
