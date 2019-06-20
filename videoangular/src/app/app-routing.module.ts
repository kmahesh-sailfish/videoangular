import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AnnadhnamComponent} from './annadhnam/annadhnam.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'annadhnam', component: AnnadhnamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
