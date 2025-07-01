import React from "react";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitCardsProps {
  benefit: Benefit;
  index: number;
}

function BenefitsCard({ benefit, index }: BenefitCardsProps) {
  return (
    <div
      className={`flex items-center ${
        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      } w-full max-w-xl`}
    >
      {/* Unique SVG Icon */}
      <div className="flex-shrink-0">{benefit.icon}</div>
      {/* Benefit Text */}
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? "items-end text-right" : "items-start text-left"
        } gap-y-2 flex-1`}
      >
        <h1 className="font-semibold text-lg text-amber-200">
          {benefit.title}
        </h1>
        <span className="font-normal text-sm text-gray-300">
          {benefit.description}
        </span>
      </div>
    </div>
  );
}
export default BenefitsCard;
