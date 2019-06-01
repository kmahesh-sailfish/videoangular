import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getAuthorizationToken() {
    return 'some-auth-token';
  }
}
