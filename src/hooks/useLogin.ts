import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoginRequestMutation } from "../redux/services/AuthAPI";
import { ILogin } from "../types/Auth.types";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();
  const methods = useForm<{ username: string; password: string }>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [checked, setChecked] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;

  const [loginRequest] = useLoginRequestMutation();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    await loginRequest(data);
    toast.success("Welcome Back to Task Manager :)");
    setTimeout(() => router.push("/dashboard"), 1500);
    reset();
  };
  return { methods, isValid, handleSubmit, checked, setChecked, onSubmit };
}
