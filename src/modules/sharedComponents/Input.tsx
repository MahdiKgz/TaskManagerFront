import React from "react";
import { useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
}

function Input({ name }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full flex flex-col items-start gap-y-2">
      <input
        className="w-full input focus:input-warning input-lg transition-colors duration-300"
        {...register(name, { required: "this field is required" })}
        placeholder={name}
        type={
          name === "password" || name === "confirmPassword"
            ? "password"
            : "text"
        }
      />
      <span className="text-xs text-error font-semibold mx-2">
        {errors[name]?.message}
      </span>
    </div>
  );
}

export default Input;
