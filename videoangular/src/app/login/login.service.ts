import { Injectable } from '@angular/core';
import { Logindb } from './logindb';
import { promise } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
import { Observable } from 'node_modules/rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AnndhnamRegister } from '../annadhnam/dto/anndhnamRegister';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private handleError: HandleError;
  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService) {
      this.handleError = httpErrorHandler.createHandleError('LoginService');
}
login(payload: Logindb): Observable<Logindb> {
  return this.http.post<Logindb>(environment.url, payload, httpOptions)
  .pipe(
    catchError(this.handleError('login', payload))
    );
  }
  register(payload: AnndhnamRegister): Observable<AnndhnamRegister> {
    return this.http.post<AnndhnamRegister>(environment.url + '/annadhnam/register', payload, httpOptions)
    .pipe(
      catchError(this.handleError('register', payload))
    );
  }
  getdata(): Observable<any> {
return this.http.get(environment.url + '/annadhnam/getdata', httpOptions)
.pipe(catchError(this.handleError()));
  }
  getbyId(id): Observable<any> {
    return this.http.get(environment.url + '/annadhnam/' + id, httpOptions)
    .pipe(catchError(this.handleError()));
  }
  updatebyId(id, data): Observable<any> {
    return this.http.put(environment.url + '/annadhnam/' + id, data, httpOptions)
    .pipe(catchError(this.handleError()));
  }
  getlistData(): Observable<any> {
    return this.http.get(environment.url + '/annadhnam/getdata', httpOptions)
    .pipe(
      map(res => res) // or any other operator
    )
  }
}
