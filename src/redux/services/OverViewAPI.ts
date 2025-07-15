import { OverViewType } from "@/src/types/Dashboard.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const overViewAPI = createApi({
  reducerPath: "overview",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL }),
  tagTypes: ["Overview"],
  endpoints: (builder) => ({
    getUserOverview: builder.query<OverViewType, { userID: string }>({
      query: ({ userID }) => `/overview/${userID}`,
      providesTags: ["Overview"],
    }),
  }),
});

export const { useGetUserOverviewQuery } = overViewAPI;
