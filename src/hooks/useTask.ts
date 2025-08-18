"use client";

import { RootState } from "./../redux/store";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  useAddTaskMutation,
  useGetAllTasksQuery,
} from "../redux/services/TaskAPI";
import { useSelector } from "react-redux";

interface TaskFormData {
  status: string;
  title: string;
  description: string;
  user: string;
}

export default function useTask() {
  const router = useRouter();
  const [addTask, { isLoading: isAddingTask }] = useAddTaskMutation();
  const {
    data: allTasks,
    isLoading: isLoadingTasks,
    refetch,
  } = useGetAllTasksQuery();

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
  const { user } = useSelector((state: RootState) => state.auth);
  const onSubmit: SubmitHandler<TaskFormData> = async (data) => {
    const finalData = {
      status: data.status || "todo",
      title: data.title,
      description: data.description,
      user: String(user?._id) || "",
    };
    try {
      const response = await addTask(finalData).unwrap();
      toast.success("تسک با موفقیت اضافه شد");
      methods.reset();
      // refetch()
    } catch (err: any) {
      toast.error(err?.data?.message || "خطا در عملیات");
    }
  };

  const getOneTask = (id: string) => {
    // This function can be used to trigger a refetch with a specific task ID
    // For example: getOneTask("taskId")
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
    // refetchTasks: refetch,
    // oneTask,
    // isLoadingOneTask,
    getOneTask,
  };
}
