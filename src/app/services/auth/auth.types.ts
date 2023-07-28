import { UserTypes } from 'src/app/models/user.types';

export interface LoginRequestData {
  username: string;
  password: string;
}

export interface SignupRequestData {
  email: string;
  password: string;
  username: string;
}

export interface LoginResponseData {
  accessToken: string;
  tokenType: string;
  user: UserTypes;
}
