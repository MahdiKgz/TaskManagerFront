import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./utils/CustomBaseQuery";
import type {
  TTaskApi,
  TTaskData,
  TTaskResponse,
  TDeleteTaskParam,
  TTaskDeleteResponse,
} from "../../types/Tasks.types";

export const TaskAPI = createApi({
  reducerPath: "TaskAPI",
  baseQuery,
  tagTypes: ["Tasks"],

  endpoints: (builder) => ({
    addTask: builder.mutation<TTaskResponse, TTaskApi>({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tasks"],
    }),
    getAllTasks: builder.query<TTaskData[], void>({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      providesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation<TTaskDeleteResponse, TDeleteTaskParam>({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    getOneTask: builder.query<TTaskData, { id: string }>({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "Tasks", id }],
    }),
     updateTask: builder.mutation<TTaskResponse, { id: string; status: string }>({
      query: ({ id, ...body }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetOneTaskQuery,
  useDeleteTaskMutation,
  useGetAllTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation
} = TaskAPI;
