import React, { useState } from "react";
import { FormProvider } from "react-hook-form";
import useProfile from "@/src/hooks/useProfile";
import Input from "../sharedComponents/Input";
import EditUserIcon from "@/src/icons/EditUserIcon";
import { VALIDATION_RULES } from "@/src/validations/AuthValidation";
import EditPasswordIcon from "@/src/icons/EditPasswordIcon";
import ConfirmModal from "./components/ConfirmModal";
import ChangePassword from "./components/ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { open } from "@/src/redux/slices/modalSlice";
import { UserWithoutConfirm } from "@/src/types/Auth.types";

function ProfileModule() {
  const {
    methods,
    onSubmit,
    handleSubmit,
    editMode,
    setEditMode,
    changePasswordButtonDisabled,
  } = useProfile();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const [passwordDataForModal, setPasswordDataForModal] = useState<UserWithoutConfirm >({});
  const handleOpenChangePasswordModal = () => {
    const currentPasswordData:UserWithoutConfirm = methods.getValues();
    if (!changePasswordButtonDisabled) {
      setPasswordDataForModal(currentPasswordData);
      dispatch(open());
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-start gap-10 sm:gap-8"
      >
        <div className="w-full h-10 flex items-center justify-between">
          <h1 className="font-bold text-xl sm:text-2xl">پروفایل کاربری</h1>
          <button
            onClick={() => setEditMode(!editMode)}
            type="button"
            className="btn btn-sm sm:btn-md btn-primary flex items-center justify-center gap-2"
          >
            <EditUserIcon />
            ویرایش پروفایل
          </button>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-start gap-8">
          <Input disabled={!editMode} name="name" label="نام:" />
          <Input disabled={!editMode} name="username" label="نام کاربری:" />
          <Input disabled={!editMode} name="email" label="ایمیل:" />
        </div>
        <div className="w-full flex flex-col items-start gap-10 sm:gap-8">
          <h1 className="w-full font-bold text-xl sm:text-2xl">
            تغییر رمز عبور
          </h1>
          <div className="w-full flex flex-col sm:flex-row items-end gap-8">
            <Input
              validation={VALIDATION_RULES.password}
              name="password"
              label="رمز عبور فعلی:"
            />
            <Input
              validation={VALIDATION_RULES.password}
              name="newPassword"
              label="رمز عبور جدید:"
            />
            <Input
              validation={VALIDATION_RULES.password}
              name="confirmNewPassword"
              label="تکرار رمز عبور جدید:"
            />
            <button
              type="button"
              onClick={handleOpenChangePasswordModal}
              className="btn btn-primary btn-md btn-wide my-auto"
              disabled={changePasswordButtonDisabled}
            >
              <EditPasswordIcon />
              تغییر رمز عبور
            </button>
            {isOpen && (
              <ConfirmModal>
                <ChangePassword passwordDataForModal={passwordDataForModal} />
              </ConfirmModal>
            )}
          </div>
          <button type="submit">ثبت نهایی</button>
        </div>
      </form>
    </FormProvider>
  );
}

export default ProfileModule;
