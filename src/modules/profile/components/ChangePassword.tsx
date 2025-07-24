"use client";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { close } from "@/src/redux/slices/modalSlice";
import useProfile from "@/src/hooks/useProfile";
import { UserWithoutConfirm } from "@/src/types/Auth.types";

interface IChangePasswordProp {
  passwordDataForModal: UserWithoutConfirm;
}
const ChangePassword: React.FC<IChangePasswordProp> = ({
  passwordDataForModal,
}) => {
  const { methods, editPassword, handleSubmit } = useProfile();
  const dispatch = useDispatch();
  const onSubmitConfirm = async () => {
    await editPassword(passwordDataForModal); 
    dispatch(close());
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitConfirm)}
        className="w-full h-auto py-10 flex flex-col gap-5 justify-center items-center"
      >
        <p className="w-full text-center">
          آیا از تغییر رمز عبور خود مطمئن هستید؟
        </p>
        <span className="w-3/4 h-fit py-2 flex justify-between items-center gap-2">
          <button
            onClick={() => dispatch(close())}
            type="button"
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
