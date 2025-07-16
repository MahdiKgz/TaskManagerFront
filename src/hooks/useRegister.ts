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
    reset,
  } = methods;

  const [registerRequest] = useRegisterRequestMutation();
  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    await registerRequest(data).unwrap();
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
