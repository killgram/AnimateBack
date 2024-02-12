export interface ISignUp {
  login: string;
  password: string;
}

export interface IUser {
  login: string;
  password: string;
  registrationTime: number;
  uid: string;
}

export interface ISignIn {
  accessToken?: string;
  isError: boolean;
}
