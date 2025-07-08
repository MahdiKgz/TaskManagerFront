export interface IRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser extends IRegister {
  _id: string;
}
