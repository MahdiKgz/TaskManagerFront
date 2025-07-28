"use client";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { close } from "@/src/redux/slices/modalSlice";
import useProfile from "@/src/hooks/useProfile";
import { IEditPasswordBody } from "@/src/types/Auth.types";
import { logOut } from "@/src/redux/slices/authSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IChangePasswordProp {
  passwordDataForModal: IEditPasswordBody;
}
const ChangePassword: React.FC<IChangePasswordProp> = ({
  passwordDataForModal,
}) => {
  const { methods, editPassword, handleSubmit, isLoading } = useProfile();
  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmitConfirm = async () => {
    await editPassword(passwordDataForModal);
    dispatch(close());
    setTimeout(() => {
      toast.success("خروج از پنل کاربری");
      dispatch(logOut());
      router.replace("/login");
    }, 1000);
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
        <span className="w-3/4 h-fit py-2 flex justify-center items-center gap-2">
          <button
            onClick={() => dispatch(close())}
            type="button"
            className="rounded-md cursor-pointer hover:bg-red-500 w-auto h-full py-2 px-4 bg-red-900 text-white  text-center"
          >
            خیر
          </button>
          <button
            type="submit"
            className="rounded-md cursor-pointer w-auto text-center text-nowrap hover:bg-green-500  h-full py-2 px-4 bg-green-900 text-white"
          >
            {isLoading ? "در حال ارسال..." : "بله"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ChangePassword;
