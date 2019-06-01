import { Injectable } from 'node_modules/@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from 'node_modules/@angular/common/http';

import { Observable } from 'node_modules/rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
