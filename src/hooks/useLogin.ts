import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginRequestMutation } from "../redux/services/AuthAPI";
import { ILogin } from "../types/Auth.types";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import toast from "react-hot-toast";

export default function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);

  const methods = useForm<ILogin>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const [loginRequest, { isLoading: isSubmittingForm }] =
    useLoginRequestMutation();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      const response = await loginRequest(data).unwrap();
      dispatch(setUser(response));
      router.push("/dashboard");
    } catch (err) {
      // @ts-expect-error err is unknown or any
      toast.error(err.error?.data?.message);
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
