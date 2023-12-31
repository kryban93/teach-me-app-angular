import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AuthTokenService } from '../services/auth-token/auth-token.service';
import { endpoints } from '../services/endpoints';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private authTokenService: AuthTokenService) {}

  intercept(
    req: HttpRequest<undefined>,
    next: HttpHandler
  ): Observable<HttpEvent<undefined>> {
    console.log('run interceptor');
    const isLoggedIn = this.authTokenService.isLoggedIn();
    console.log(req.url);
    if (isLoggedIn && req.url !== (endpoints.LOGIN || endpoints.SIGNUP)) {
      const token = this.authTokenService.getToken();
      console.log('set headers if logged on: ' + token?.accessToken);

      req = req.clone({
        headers: new HttpHeaders()
          .set('content-type', 'application/json')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
          .set('Authorization', `${token?.tokenType}${token?.accessToken}`),
        withCredentials: true,
      });
    } else {
      console.log('set headers if not logged');
      req = req.clone({
        headers: new HttpHeaders()
          .set('content-type', 'application/json')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'),
        withCredentials: true,
      });
    }

    return next.handle(req).pipe(
      map((res) => {
        console.info('Passed through the interceptor in response');
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
        }
        return throwError(errorMsg);
      })
    );
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
