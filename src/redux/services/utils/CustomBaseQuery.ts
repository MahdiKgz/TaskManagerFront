import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../../store";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.user?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
