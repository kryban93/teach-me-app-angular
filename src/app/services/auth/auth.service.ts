import { Injectable } from '@angular/core';
import { LoginRequestData, SignupRequestData } from './auth.types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../endpoints';

const httpOptions = {
  headers: new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'),
  withCredentials: true,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(user: LoginRequestData): Observable<any> {
    return this.http.post(endpoints.LOGIN, user, httpOptions);
  }

  public signup(user: SignupRequestData): void {
    const test = this.http
      .post(endpoints.SIGNUP, user, httpOptions)
      .subscribe((response) => response);
    console.log(test);
  }
}
