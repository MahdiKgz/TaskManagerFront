import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./services/AuthAPI";

const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
