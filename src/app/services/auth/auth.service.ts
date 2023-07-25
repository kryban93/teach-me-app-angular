import { Injectable } from '@angular/core';
import { LoginRequestData, SignupRequestData } from './auth.types';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../endpoints';
import { AuthTokenService } from '../auth-token/auth-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private authTokenService: AuthTokenService
  ) {}

  public login(user: LoginRequestData): Observable<any> {
    // const test = this.http
    //   .post(endpoints.LOGIN, user, httpOptions)
    //   .pipe(tap(), catchError(this.handleError));

    // console.log(test);
    // return test;
    const test = this.http.post(endpoints.LOGIN, user);
    console.log(test);
    return test;
  }

  public signup(user: SignupRequestData): Observable<any> {
    const test = this.http.post(endpoints.SIGNUP, user);

    console.log(test);
    return test;
  }

  public logout() {
    this.authTokenService.clear();
  }
}
