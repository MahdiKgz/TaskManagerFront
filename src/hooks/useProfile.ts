import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { editPasswordThunk } from "../redux/slices/PasswordSlice";

export default function useProfile() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const methods = useForm({
    defaultValues: {
      ...user,
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { handleSubmit, watch } = methods;

  const password = watch("password");
  const newPassword = watch("newPassword");
  const confirmNewPassword = watch("confirmNewPassword");

  const onSubmit = (data: unknown) => {
    console.log("data", data);
  };
  const editPassword = async (data: any) => {
    return dispatch(editPasswordThunk(data));
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
  };
}
