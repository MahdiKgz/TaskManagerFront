import React from "react";

interface AccordionProps {
  title: string;
  description: string;
  isOpened: boolean;
}

function Accordion({ title, description, isOpened }: AccordionProps) {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" defaultChecked={isOpened} />
      <div className="collapse-title font-semibold">{title}</div>
      <div className="collapse-content text-sm">{description}</div>
    </div>
  );
}

export default Accordion;
