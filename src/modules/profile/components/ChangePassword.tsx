import useProfile from "@/src/hooks/useProfile";
import React from "react";
import { FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { close } from "@/src/redux/slices/modalSlice";

const ChangePassword = () => {
  const { methods, onSubmit, handleSubmit } = useProfile();
  const dispatch = useDispatch();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-auto py-10 flex flex-col gap-5 justify-center items-center"
      >
        <p className="w-full">آیا از تغییر رمز عبور خود مطمئن هستید؟</p>
        <span className="w-3/4 h-fit py-2 flex justify-between items-center gap-2">
          <button
            onClick={() => dispatch(close())}
            type="reset"
            className="rounded-md cursor-pointer hover:bg-red-500 w-full h-full p-2 bg-red-900 text-white"
          >
            خیر
          </button>
          <button
            type="submit"
            className="rounded-md cursor-pointer hover:bg-green-500 w-full h-full p-2 bg-green-900 text-white"
          >
            بله
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ChangePassword;
