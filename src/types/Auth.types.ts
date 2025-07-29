export interface IRegister {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUser extends IRegister {
  _id: string;
  token: string;
}
export interface IEditPasswordBody {
  password?: string;
  newPassword?: string;
  confirmNewPassword?: string;
}
export type UserWithoutConfirm = Omit<IUser, "confirmPassword">;
export interface AuthSliceState {
  user: UserWithoutConfirm | null;
}

export interface ILogin {
  username: string;
  password: string;
}
