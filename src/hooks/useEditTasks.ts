import { useForm } from "react-hook-form";
import { TTaskData } from "../types/Tasks.types";
import { useUpdateTaskMutation } from "../redux/services/TaskAPI";
import toast from "react-hot-toast";

export default function useEditTasks(task: TTaskData) {

    const [updateTask] = useUpdateTaskMutation();

    const methods = useForm({
        defaultValues: { ...task },
    }
    )
    const { handleSubmit, formState: { isDirty, errors } } = methods

    const onSubmit = async (data: TTaskData) => {
        try {
            updateTask({ id: data._id, ...data });
            toast.success("تسک با موفقیت ویرایش شد.")
        } catch (err: unknown) {
            toast.error("در ویرایش مشکلی  پیش آمد.")
        }
    }

    return { methods, onSubmit, handleSubmit, isDirty, errors };

}