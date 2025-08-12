"use client";
import { FormProvider } from "react-hook-form";
import Input from "../../sharedComponents/Input";
import useTask from "@/src/hooks/useTask";
import TaskIcon from "@/src/icons/TaskIcon";

const AddTask = () => {
  const { methods, onSubmit, handleSubmit } = useTask();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start gap-5 h-fit"
      >
        <div className=" w-full h-fit text-xl text-center font-semibold text-slate-100">
          ایجاد تسک جدید
        </div>
        <div className="mb-3 text-sm font-semibold text-slate-100 border-slate-700 border bg-base-200 p-3 h-fit rounded-xl">
          <div className="space-y-3">
            <div className="space-y-2">
              <p>عنوان تسک</p>

              <Input name="title" className="border w-full h-10 input" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p>وضعیت تسک</p>
              <span className="px-5 h-fit w-full">
                <div className="flex items-center mb-4">
                  <input
                    id="todo"
                    type="radio"
                    value="todo"
                    name="status"
                    className="w-4 h-4 text-slate-400 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  ></input>
                  <label
                    htmlFor="todo"
                    className="ms-2 text-sm font-medium text-slate-400 cursor-pointer"
                  >
                    برای انجام
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="in-progress"
                    type="radio"
                    value="in-progress"
                    name="status"
                    className="w-4 h-4 text-slate-400 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  ></input>
                  <label
                    htmlFor="in-progress"
                    className="ms-2 text-sm font-medium text-slate-400 cursor-pointer"
                  >
                    درحال تکمیل
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="completed"
                    type="radio"
                    value="completed"
                    name="status"
                    className="w-4 h-4 text-slate-400 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"
                  ></input>
                  <label
                    htmlFor="completed"
                    className="ms-2 text-sm font-medium text-slate-400 "
                  >
                    تکمیل شده
                  </label>
                </div>
              </span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="desc">توضیحات</label>
              <textarea
                id="desc"
                className="min-h-24 p-2 input "
                placeholder="توضیحات کوتاه اضافه کنید..."
              />
            </div>
            <button
              type="submit"
              className="btn btn-sm sm:btn-md btn-primary flex items-center justify-center gap-2"
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
