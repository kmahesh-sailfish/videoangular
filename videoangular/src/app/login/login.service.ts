import { Injectable } from '@angular/core';
import { Logindb } from './logindb';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
}
login(payload: Logindb): Promise<any> {
  console.log(payload);
  return ;
}
}
