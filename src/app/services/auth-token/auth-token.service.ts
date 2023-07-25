import { Injectable } from '@angular/core';
import { LoginRequestData, LoginResponseData } from '../auth/auth.types';
import { Maybe } from 'src/app/helpers/types';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  private USER_KEY = 'auth-user';

  constructor() {}

  public clear() {
    window.sessionStorage.clear();
  }

  public saveToken(token: LoginResponseData): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(token));
  }

  public getToken(): Maybe<LoginResponseData> {
    const token = window.sessionStorage.getItem(this.USER_KEY);
    if (!token) {
      return null;
    }

    return JSON.parse(token);
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }
}
