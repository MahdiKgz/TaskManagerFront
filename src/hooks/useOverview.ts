import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function useOverview() {
  const { user } = useSelector((state: RootState) => state.auth);
  const methods = useForm({ defaultValues: { ...user } });

  const { handleSubmit } = methods;
  let disabled = true;

  const onSubmit = async (data: unknown) => {
    console.log(data);
  };

  return { methods, disabled, handleSubmit, onSubmit };
}
