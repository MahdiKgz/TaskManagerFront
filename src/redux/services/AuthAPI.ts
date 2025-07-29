import {
  IEditPasswordBody,
  ILogin,
  IRegister,
  UserWithoutConfirm,
} from "@/src/types/Auth.types";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/src/redux/services/utils/CustomBaseQuery";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery,
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
