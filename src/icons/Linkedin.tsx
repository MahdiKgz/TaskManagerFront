import React from "react";

function Linkedin({ fill = "#FEFEFE" }: { fill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={fill}
      viewBox="0 0 24 24"
      className={
        !fill ? "" : "hover:fill-blue-500 hover:stroke-blue-500 duration-300"
      }
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM7.5 8.98H12v2.08h.07c.62-1.16 2.13-2.38 4.43-2.38 4.74 0 5.61 3.12 5.61 7.17V24h-5v-6.67c0-1.59-.03-3.63-2.21-3.63s-2.55 1.73-2.55 3.52V24h-5V8.98z" />
    </svg>
  );
}

export default Linkedin;
