import React from "react";

function Checkbox({
  label,
  checked,
  setChecked,
}: {
  label?: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full flex items-center justify-start gap-x-2">
      <input
        id="remember-me"
        type="checkbox"
        className={`checkbox checkbox-sm ${checked ? "checkbox-warning" : ""}`}
        defaultChecked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="remember-me" className="text-sm">
        {label || "مرا به خاطر بسپار"}
      </label>
    </div>
  );
}

export default Checkbox;
