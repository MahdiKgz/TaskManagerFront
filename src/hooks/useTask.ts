"use client";

import type { RootState } from "../redux/store";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  useAddTaskMutation,
  useGetAllTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "../redux/services/TaskAPI";
import { useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/query/react";

interface TaskFormData {
  status: string;
  title: string;
  description: string;
  user: string;
}

export default function useTask() {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  const userId = user?._id;

  const {
    data: allTasks,
    isLoading: isLoadingTasks,
    refetch,
  } = useGetAllTasksQuery(userId ?? skipToken);

  const [addTask, { isLoading: isAddingTask }] = useAddTaskMutation();
  const [updateTask, { isLoading: isUpdatingTask }] = useUpdateTaskMutation();
  const [deleteTask, { isLoading: isDeletingTask }] = useDeleteTaskMutation();

  const methods = useForm<TaskFormData>({
    defaultValues: {
      status: "",
      title: "",
      description: "",
      user: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<TaskFormData> = async (data) => {
    const finalData = {
      status: data.status || "todo",
      title: data.title,
      description: data.description,
      user: String(user?._id) || "",
    };

    try {
      await addTask(finalData).unwrap();
      toast.success("Task added successfully");
      methods.reset();
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Error adding task");
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask({ id }).unwrap();
      toast.success("Task deleted successfully");
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Error deleting task");
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    register,
    formState: { errors },
    allTasks,
    isLoadingTasks,
    isAddingTask,
    isUpdatingTask,
    isDeletingTask,
    updateTask,
    handleDeleteTask,
  };
}
