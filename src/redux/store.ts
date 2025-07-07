import { configureStore } from "@reduxjs/toolkit";
import { loginAPISlice } from "./services/LoginAPI";

const store = configureStore({
  reducer: {
    [loginAPISlice.reducerPath]: loginAPISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginAPISlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
