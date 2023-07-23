import { Injectable } from '@angular/core';
import { LoginRequestData, SignupRequestData } from './auth.types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endpoints } from '../endpoints';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(user: LoginRequestData): Observable<any> {
    return this.http.post(endpoints.LOGIN, user, httpOptions);
  }

  public signup(user: SignupRequestData): Observable<any> {
    return this.http.post(endpoints.SIGNUP, user, httpOptions);
  }
}
