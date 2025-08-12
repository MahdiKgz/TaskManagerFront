// import React, { ReactNode } from "react";

import { ReactNode } from "react";
import TaskCard from "./TaskCard";

// interface IBrandProps {
//   children: ReactNode;
//  item:{
//     id: string;
//     status: string;
//     count: string;
// }
// }
// const getClassNames = (status: string) => {
//   switch (status) {
//     case "completed":
//       return { color: "success", label: "تکمیل شده" };
//     case "in-progress":
//       return { color: "warning", label: "در حال تکمیل" };
//     case "todo":
//       return { color: "error", label: "برای انجام" };
//     default:
//       return { color: "error", label: "نامشخص" };
//   }
// };
// const Board: React.FC<IBrandProps> = ({ children, item }) => {
//       const { color, label } = getClassNames(item.status);

//   return (
//     <div className="flex w-full h-[600px] min-h-0 overflow-y-auto flex-col gap-2">
//       <div
//         className={` bg-${color} px-4 py-2 flex items-center justify-between h-10 text-center border border-solid rounded-md  w-full`}
//       >
//         <p className="font-medium ">{label}</p>
//         <p className="px-3 py-0.5 bg-white rounded-xl text-center text-black flex items-center justify-center">
//           {item.count ?? 0}
//         </p>
//       </div>
//       <div className="overflow-y-scroll gap-2 py-2 h-[500px] flex-1 flex-col items-center w-full  px-2 ">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Board;

type Member = { id: string; name: string };
type Task = {
  id: string;
  title: string;
  members: Member[];
};
type Column = {
  id: string;
  title: string;
  colorClass: string;
  count: number;
  tasks: Task[];
};

interface IBrandProps {
  children: ReactNode;
  item: {
    id: string;
    status: string;
    count: string;
  };
}
const Board: React.FC<IBrandProps> = ({ item, children }) => {
  const getClassNames = (status: string) => {
    switch (status) {
      case "completed":
        return { color: "success", label: "تکمیل شده" };
      case "in-progress":
        return { color: "warning", label: "در حال تکمیل" };
      case "todo":
        return { color: "error", label: "برای انجام" };
      default:
        return { color: "error", label: "نامشخص" };
    }
  };
  const { color, label } = getClassNames(item.status);

  return (
    <div className="mb-2 h-full flex flex-col gap-2 items-center justify-start w-full">
      <div
        className={`bg-${color} w-full flex items-center justify-between py-2 px-3 gap-2 border-2 rounded-3xl`}
      >
        <span className={`font-medium `}>{label}</span>
        <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-700">
          {item.count}
        </span>
      </div>

      <div className="rounded-xl p-3 border-slate-700 h-full w-full bg-base-200">
        <div className="flex flex-col gap-3 pb-3 mb-3 h-fit">{children}</div>
      </div>
    </div>
  );
};
export default Board;
