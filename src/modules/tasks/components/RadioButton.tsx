import React from "react";
import { useFormContext } from "react-hook-form";

interface RadioButtonProps {
  label: string;
  value: string;
}

function RadioButton({ value, label }: RadioButtonProps) {
  const methods = useFormContext();
  const { register } = methods;

  return (
    <div className="flex items-center mb-4">
      <input
        id={value}
        type="radio"
        value={value}
        {...register("status")}
        className="w-4 h-4 text-slate-400 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 accent-warning"
      />
      <label
        htmlFor={value}
        className="ms-2 text-sm font-medium text-slate-400 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
