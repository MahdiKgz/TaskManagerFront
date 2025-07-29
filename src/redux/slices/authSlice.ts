import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthSliceState,
  IUser,
  UserWithoutConfirm,
} from "@/src/types/Auth.types";

const initialState: AuthSliceState = {
  user: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserWithoutConfirm>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      if (state.user) {
        state.user.token = action.payload || "";
      }
    },
    login: (state, action: PayloadAction<{ user: IUser; token: string }>) => {
      const { confirmPassword, ...userWithoutConfirm } = action.payload.user;
      state.user = { ...userWithoutConfirm, token: action.payload.token };
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
