import { Injectable } from 'node_modules/@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from 'node_modules/@angular/common/http';

import { Observable } from 'node_modules/rxjs';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // clone request and replace 'http://' with 'https://' at the same time
    const secureReq = req.clone({
      url: req.url.replace('http://', 'http://')
    });
    // send the cloned, "secure" request to the next handler.
    return next.handle(secureReq);
  }
}
