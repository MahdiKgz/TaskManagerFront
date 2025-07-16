import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterRequestMutation } from "../redux/services/AuthAPI";
import { IRegister } from "../types/Auth.types";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import toast from "react-hot-toast";

export default function useRegister() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);

  const methods = useForm<IRegister>({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [registerRequest, { isLoading: isSubmittingForm }] =
    useRegisterRequestMutation();

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      const response = await registerRequest(data).unwrap();
      dispatch(setUser(response));
      toast.success("ثبت نام با موفقیت انجام شد.");
      router.push("/dashboard");
    } catch (err: unknown) {
      // @ts-expect-error err is unknown or any
      toast.error(err.error?.data?.message as string);
    }
  };

  return {
    methods,
    handleSubmit,
    isValid,
    checked,
    setChecked,
    onSubmit,
    isSubmittingForm,
  };
}
