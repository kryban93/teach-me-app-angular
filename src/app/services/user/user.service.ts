import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../endpoints';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { UserTypes } from 'src/app/models/user.types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: UserModel;
  constructor(private http: HttpClient) {}

  public setUser(user: UserTypes) {
    this.user = new UserModel(user);
  }

  public getUser(): UserModel {
    return this.user;
  }

  public getUserId(): string {
    return this.user.id;
  }

  getUsers(): Observable<any> {
    return this.http.get(endpoints.USERS);
  }

  getProfile(): Observable<any> {
    return this.http.get(endpoints.PROFILE);
  }
}
