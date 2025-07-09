import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceState, UserWithoutConfirm } from "@/src/types/Auth.types";

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
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
