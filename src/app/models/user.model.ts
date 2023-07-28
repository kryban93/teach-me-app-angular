import { UserTypes } from './user.types';

export class UserModel {
  public id: string;
  public name: string;
  public lastname: string;
  public email: string;
  constructor({ id, name, lastname, email }: UserTypes) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
  }

  getId(): string {
    return this.id;
  }
}
