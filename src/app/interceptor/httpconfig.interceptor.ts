/**
 * HTTP Interceptor
 * https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling
 */
import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Adds content-type headers
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      })
    }

    return next.handle(request).pipe(
      map(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log(event);
          }
          return event;
        }
      ),
      catchError(
        (error: HttpErrorResponse) => {
          console.log({
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status
          })

          return throwError(error);
        }
      )
    );
  }
}
