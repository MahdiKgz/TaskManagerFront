import { PLACEHOLDER } from "@/src/constants/placeholders";
import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

interface InputProps {
  name: string;
  validation?: RegisterOptions;
  disabled?: boolean;
  label?: string;
  [key: string]: any;
}

function Input({
  name,
  validation,
  disabled = false,
  label,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="w-full flex flex-col items-start gap-y-2 group">
      {label && (
        <label className="text-gray-600 group-focus-within:text-white text-sm transition-colors duration-100">
          {label}
        </label>
      )}
      <input
        className="w-full input focus:input-warning input-lg transition-colors duration-300 !outline-none"
        {...rest}
        {...register(name, {
          required: "this field is required",
          ...validation,
        })} // Spread the validation prop
        placeholder={PLACEHOLDER[name]}
        type={
          name.includes("password") || name.includes("Password")
            ? "password"
            : "text"
        }
        disabled={disabled}
      />
      <span className="text-xs text-error font-semibold mx-2">
        {errors[name]?.message as React.ReactNode}
      </span>
    </div>
  );
}

export default Input;
