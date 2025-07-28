import {
  IEditPasswordBody,
  ILogin,
  IRegister,
  UserWithoutConfirm,
} from "@/src/types/Auth.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as any;
      const token = state.auth.user?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerRequest: builder.mutation<UserWithoutConfirm, IRegister>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    loginRequest: builder.mutation<UserWithoutConfirm, ILogin>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    editPasswordRequest: builder.mutation<
      UserWithoutConfirm,
      { userId: string; passwordData: IEditPasswordBody }
    >({
      query: ({ userId, passwordData }) => ({
        url: `/profile/edit-password/${userId}`,
        method: "PUT",
        body: passwordData,
      }),
    }),
  }),
});

export const {
  useRegisterRequestMutation,
  useLoginRequestMutation,
  useEditPasswordRequestMutation,
} = AuthApi;
