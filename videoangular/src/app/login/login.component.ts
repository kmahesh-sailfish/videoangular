import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Logindb } from './logindb';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly loginservice:LoginService){

  }
  title = 'videoangular';
  model = new Logindb();
  login () {
  // console.log(this.model);
  this.loginservice.login(this.model).subscribe(
    logUser => console.log(logUser)
  ); }

  ngOnInit() {
  }

}
