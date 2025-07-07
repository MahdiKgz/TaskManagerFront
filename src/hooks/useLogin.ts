import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function useLogin() {
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
  } = methods;

  const onSubmit: SubmitHandler<{ username: string }> = async (data) => {
    toast.success("Submiited", { duration: 1000 });
    console.log(data);
  };
  return { methods, isValid, handleSubmit, checked, setChecked, onSubmit };
}
