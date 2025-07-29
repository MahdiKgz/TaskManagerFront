import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEditPasswordRequestMutation } from "../redux/services/AuthAPI";
import toast from "react-hot-toast";
import { IEditPasswordBody } from "../types/Auth.types";

export default function useProfile() {
  const { user } = useSelector((state: RootState) => state.auth);
  const methods = useForm({
    defaultValues: {
      ...user,
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { handleSubmit, watch, reset: resetForm } = methods;
  const [editPasswordMutation, { isLoading, reset: resetMutationState }] =
    useEditPasswordRequestMutation();
  const password = watch("password");
  const newPassword = watch("newPassword");
  const confirmNewPassword = watch("confirmNewPassword");

  const onSubmit = () => {
    // TODO : implement edit profile in this section
  };
  const editPassword = async (passwordData: IEditPasswordBody) => {
    if (!user?._id) {
      toast.error("شناسه کاربری یافت نشد. لطفاً دوباره وارد شوید.");
      return;
    }

    try {
      const response = await editPasswordMutation({
        userId: user._id,
        passwordData,
      }).unwrap();

      toast.success("رمز عبور با موفقیت تغییر یافت!");
      resetForm((prevValues) => ({
        ...prevValues,
        password: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
      resetMutationState();
      return response;
    } catch (err: unknown) {
      // @ts-expect-error err is unknown type
      toast.error(err?.data?.message || "خطا در تغییر رمز عبور.");
      throw err;
    }
  };
  const [editMode, setEditMode] = useState(false);

  let changePasswordButtonDisabled = true;

  if (
    newPassword === confirmNewPassword &&
    newPassword !== "" &&
    confirmNewPassword !== "" &&
    password !== ""
  ) {
    changePasswordButtonDisabled = false;
  }
  return {
    methods,
    handleSubmit,
    onSubmit,
    editMode,
    setEditMode,
    changePasswordButtonDisabled,
    editPassword,
    isLoading,
  };
}
