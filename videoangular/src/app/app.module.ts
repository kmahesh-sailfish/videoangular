import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatNativeDateModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { RequestCacheService, RequestCache } from './request-cache.service';
import { HttpInterceptingHandler } from '@angular/common/http/src/module';
import { httpInterceptorProviders } from './http-interceptors/index';
import { LoginComponent } from './login/login.component';
import { AnnadhnamComponent } from './annadhnam/annadhnam.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AnnadhnamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule],
  providers: [AuthService,
  HttpErrorHandlerService,
  {provide: RequestCache, useClass: RequestCacheService},
  httpInterceptorProviders,
  LoginService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
