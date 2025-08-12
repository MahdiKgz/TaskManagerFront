import { SubmitHandler, useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { setUser } from "../redux/slices/authSlice";
// import toast from "react-hot-toast";

export default function useTask() {
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const [checked, setChecked] = useState<boolean>(false);

  const methods = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

 

  const onSubmit = async (data:any) => {
    console.log(data);
    // try {
    //   const response = await loginRequest(data).unwrap();
    //   dispatch(setUser(response));
    //   toast.success("با موفقیت وارد شدید.");
    //   router.push("/dashboard");
    // } catch (err) {
    //   // @ts-expect-error err is unknown
    //   toast.error(err.data.message);
    // }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
  };
}
