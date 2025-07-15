import React from "react";

interface RadialProgressProps {
  value: number;
  type: "completed" | "in-progress" | "todo";
}

const getClassNames = (type: string) => {
  switch (type) {
    case "completed":
      return { color: "accent", label: "تکمیل شده" };
    case "in-progress":
      return { color: "warning", label: "در حال تکمیل" };
    case "todo":
      return { color: "error", label: "برای انجام" };
    default:
      return { color: "error", label: "نامشخص" };
  }
};

function RadialProgress({ value, type }: RadialProgressProps) {
  const { color, label } = getClassNames(type);

  return (
    <div className="w-[300px] h-fit px-6 py-8 flex flex-col items-center gap-4 bg-base-200/50 rounded-lg shadow-lg">
      <div
        className={`radial-progress text-${color}`}
        style={{ "--value": value, "--size": "10rem" } as React.CSSProperties}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      >
        {value}%
      </div>
      <span className={`text-${color} font-semibold text-lg`}>{label}</span>
    </div>
  );
}

export default RadialProgress;
