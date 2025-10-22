import React from "react";
import TrashIcon from "@/src/icons/TrashIcon";
import { useDeleteTaskMutation } from "@/src/redux/services/TaskAPI";
import toast from "react-hot-toast";

interface DeleteTaskButtonProps {
  taskID: string;
}

function DeleteTaskButton({ taskID }: DeleteTaskButtonProps) {
  const [deleteTask] = useDeleteTaskMutation();

  const handleDeleteTask = async (taskID: string) => {
    try {
      await deleteTask({ id: taskID });
      toast.success("تسک با موفقیت حذف شد.");
    } catch (err) {
      toast.error("مشکلی برای حذف وجود دارد");
    }
  };
  return (
    <button
      type="button"
      className="w-full btn btn-sm sm:btn-md btn-error text-white flex items-center justify-center gap-2"
      onClick={() => handleDeleteTask(taskID)}
    >
      <TrashIcon />
      حذف تسک{" "}
    </button>
  );
}

export default DeleteTaskButton;
