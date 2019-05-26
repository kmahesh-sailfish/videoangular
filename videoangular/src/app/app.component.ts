import { Component } from '@angular/core';
import { Logindb } from './login/logindb';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly loginservice:LoginService){

  }
  title = 'videoangular';
  model = new Logindb();
  login () {
  // console.log(this.model);
  this.loginservice.login(this.model);

  }
}
