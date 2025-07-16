import { ILogin, IRegister, UserWithoutConfirm } from "@/src/types/Auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../slices/authSlice";
import toast from "react-hot-toast";
import Router from "next/router";

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
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          setTimeout(() => Router.push("/dashboard"), 2000);
        } catch (err) {
          toast.error(err.error.data.message);
        }
      },
    }),
    loginRequest: builder.mutation<UserWithoutConfirm, ILogin>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
          setTimeout(() => Router.push("/dashboard"), 2000);
        } catch (err) {
          toast.error(err.error.data.message);
        }
      },
    }),
  }),
});

export const { useRegisterRequestMutation, useLoginRequestMutation } = AuthApi;
