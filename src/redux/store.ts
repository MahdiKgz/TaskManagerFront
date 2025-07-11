import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./services/AuthAPI";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// src/redux/store.ts (continued)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
