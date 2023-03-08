export interface IAuthUser extends IAuthUserCredentials {
  _id: string;
  email_verified: boolean;
  role: string;
  updatedAt: Date;
  createdAt: Date;
  access_token: string;
  refresh_token: string;
}

export interface IAuthUserCredentials extends IAuthUserLoginInfo {
  name: string;
}

export interface IAuthUserLoginInfo {
  email: string;
  password: string;
}
