import { ILogin, IRegister, UserWithoutConfirm } from "@/src/types/Auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../slices/authSlice";
import { setAuthCookie } from "@/app/actions/auth";
import toast from "react-hot-toast";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    registerRequest: builder.mutation<UserWithoutConfirm, IRegister>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      },
    }),
    loginRequest: builder.mutation<UserWithoutConfirm, ILogin>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
        if (data && (data as any).token) {
          await setAuthCookie((data as any).token);
        } else {
          toast.error("ورود ناموفق");
        }
      },
    }),
  }),
});

export const { useRegisterRequestMutation, useLoginRequestMutation } = AuthApi;
