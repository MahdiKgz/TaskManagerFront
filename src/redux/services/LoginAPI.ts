import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const loginAPISlice = createApi({
  reducerPath: "Login",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APP_BASE_URL }),
  endpoints: (builder) => ({
    LoginRequest: builder.mutation({
      query: () => ({
        url: "/register",
        method: "PORT",
      }),
    }),
  }),
});
