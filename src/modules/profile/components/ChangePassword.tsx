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
      toast.success("رمز عبور با موفقیت تغییر کرد.");
      dispatch(logOut());
      router.replace("/login");
    }, 1000);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmitConfirm)}
        className="w-full flex flex-col gap-5 justify-center items-start text-white"
      >
        <h1 className="w-full font-semibold text-xl md:text-2xl text-center">
          آیا از تغییر رمز عبور خود مطمئن هستید؟
        </h1>
        <p className="w-full text-xs md:text-sm font-medium text-gray-300 text-center">
          با انجام این عملیات از حساب کاربری خود خارج خواهید شد!
        </p>
        <span className="w-full h-auto py-2 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => dispatch(close())}
            type="button"
            className="btn btn-error w-full md:w-[160px] font-semibold text-base"
          >
            خیر
          </button>
          <button
            type="submit"
            className="btn btn-soft btn-success w-full md:w-[160px] font-semibold text-base"
          >
            {isLoading ? "خروج از حساب ...." : "بله"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ChangePassword;
