import { Injectable } from '@angular/core';
import { Logindb } from './logindb';
import { promise } from 'protractor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService, HandleError } from '../http-error-handler.service';
import { Observable } from 'node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
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
}
