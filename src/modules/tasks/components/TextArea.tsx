import React from "react";
import { useFormContext } from "react-hook-form";

function TextArea() {
  const { register } = useFormContext();
  return (
    <textarea
      {...register("description", {
        required: "توضیحات الزامیست",

        minLength: {
          value: 10,
          message: "توضیحات باید حداقل دارای 10 کارکتر باشد",
        },
        maxLength: {
          value: 100,
          message: "توضیحات میتواند حداکثر 100 کارکتر داشته باشد",
        },
      })}
      id="desc"
      className="min-h-24 p-2 input w-full resize-none "
      placeholder="توضیحات کوتاه اضافه کنید..."
    />
  );
}

export default TextArea;
