"use client";
import { FormProvider } from "react-hook-form";
import Input from "../../sharedComponents/Input";
import useTask from "@/src/hooks/useTask";
import TaskIcon from "@/src/icons/TaskIcon";
import RadioButton from "./RadioButton";
import TextArea from "./TextArea";
import CloseIcon from "@/src/icons/CloseIcon";

interface AddTaskProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AddTask = ({ isOpen, setIsOpen }: AddTaskProps) => {
  const {
    methods,
    onSubmit,
    handleSubmit,
    formState: { errors },
  } = useTask();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start gap-5 h-fit"
      >
        <div className="w-full sm:w-[60%] md:w-[40%] md:mx-auto mb-3 text-sm font-semibold text-slate-100 border-slate-700 border bg-base-200 p-6 h-fit rounded-xl">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-xl text-right font-semibold text-slate-100">
              ایجاد تسک جدید
            </h1>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="cursor-pointer"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="space-y-3">
            <div className="space-y-2">
              <p>عنوان تسک</p>
              <Input name="title" className="border w-full h-10 input" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>وضعیت تسک</p>
              <div className="px-5 h-fit w-full">
                <RadioButton value="todo" label="برای انجام" />
                <RadioButton value="in-progress" label="درحال تکمیل" />
                <RadioButton value="completed" label="تکمیل شده" />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="desc">توضیحات</label>
              <TextArea />
              {errors.description && (
                <p className="text-red-600">
                  {errors.description.message as string}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full btn btn-sm sm:btn-md btn-primary flex items-center justify-center gap-2"
            >
              <TaskIcon />
              ایجاد تسک جدید{" "}
            </button>{" "}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddTask;
