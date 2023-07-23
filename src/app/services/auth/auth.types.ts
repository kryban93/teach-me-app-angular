export interface LoginRequestData {
  login: string;
  password: string;
}

export interface SignupRequestData {
  login: string;
  password: string;
  name: string;
}

export interface LoginResponseData {
  accessToken: string;
  tokenType: string;
}
