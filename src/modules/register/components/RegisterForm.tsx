import React, { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import Input from "../../sharedComponents/Input";
import Checkbox from "../../sharedComponents/Checkbox";
import Link from "next/link";
import useRegister from "@/src/hooks/useRegister";
import { VALIDATION_RULES } from "@/src/validations/AuthValidation";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { useRouter } from "next/navigation";

function RegisterForm() {
  const {
    methods,
    handleSubmit,
    checked,
    setChecked,
    onSubmit,
    isValid,
    isSubmittingForm,
  } = useRegister();

  const { user } = useSelector((state: RootState) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="relative z-10 w-full sm:w-[480px] h-full sm:h-auto bg-base-100/60 sm:bg-base-100 px-4.5 py-8 flex flex-col items-center justify-center sm:justify-normal sm:rounded-xl">
      <h1 className="title-gradient font-bold text-3xl">ایجاد حساب</h1>
      <FormProvider {...methods}>
        <form
          className="w-[80%] flex flex-col gap-y-5 items-center mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input name="name" validation={VALIDATION_RULES.name} />
          <Input name="username" validation={VALIDATION_RULES.username} />
          <Input name="email" validation={VALIDATION_RULES.email} />
          <Input name="password" validation={VALIDATION_RULES.password} />
          <Input
            name="confirmPassword"
            validation={VALIDATION_RULES.password}
          />
          <Checkbox
            label="Remember Me"
            checked={checked}
            setChecked={setChecked}
          />
          <button
            className="w-full btn btn-soft btn-warning"
            disabled={!isValid || isSubmittingForm}
          >
            ثبت نام
          </button>
          <div className="w-full flex items-center justify-start gap-x-1 text-sm">
            <span>حساب دارید؟</span>
            <Link
              href="/login"
              className="text-warning hover:text-amber-300 duration-300"
            >
              ورود به حساب
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default RegisterForm;
