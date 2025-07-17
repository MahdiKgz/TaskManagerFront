import { SubmitHandler, useForm } from "react-hook-form";
import { UserWithoutConfirm } from "../types/Auth.types";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";

export default function userProfile() {
  const { user } = useSelector((state: RootState) => state.auth);
  const methods = useForm({
    defaultValues: {
      ...user,
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { handleSubmit } = methods;
  const onSumbit = (data: unknown) => {
    console.log(data);
  };
  const [editMode, setEditMode] = useState(false);

  return {
    methods,
    handleSubmit,
    onSumbit,
    editMode,
    setEditMode,
  };
}
