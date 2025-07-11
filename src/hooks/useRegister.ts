import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IRegister } from "../types/Auth.types";
import { useRegisterRequestMutation } from "../redux/services/AuthAPI";
import { useRouter } from "next/navigation";

export default function useRegister() {
  const router = useRouter();
  const methods = useForm<IRegister>({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [checked, setChecked] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [registerRequest] = useRegisterRequestMutation();
  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      await registerRequest(data).unwrap();
      toast.success("Welcome to Task Manager :)");
      router.push("/");
    } catch (err: any) {
      if (err?.status === 422) {
        toast.error("Check All the fields");
      } else if (err?.status === 409) {
        toast.error("User Exists.");
      } else {
        toast.error("Try Again Later.");
      }
    }
  };

  return {
    methods,
    handleSubmit,
    checked,
    setChecked,
    onSubmit,
    isValid,
  };
}
