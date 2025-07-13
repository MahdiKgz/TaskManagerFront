import { BENEFITS } from "@/src/constants/benefits";
import React from "react";
import BenefitsCard from "./BenefitsCard";

function Benefits() {
  return (
    <div className="container flex flex-col gap-y-12 items-center justify-center py-16 overflow-hidden">
      <h1 className="font-bold text-2xl text-center bg-gradient-to-l text-transparent bg-clip-text to-amber-200 from-amber-600">
        مزایای تسکینو
      </h1>
      {BENEFITS.map((benefit, index) => (
        <BenefitsCard key={benefit.title} benefit={benefit} index={index} />
      ))}
    </div>
  );
}

export default Benefits;
