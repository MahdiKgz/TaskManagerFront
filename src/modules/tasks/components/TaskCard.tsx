
type Member = { id: string; name: string }
type TaskCardProps = {
  task:{
  badge?: string
  title: string
  description?: string
  members: Member[]
}}

const  TaskCard:React.FC<TaskCardProps>=( {task})=> {
 
  return (
    <div className="rounded-lg border h-fit p-4 shadow-sm hover:shadow border-slate-700 bg-transparent hover:bg-base-100 hover:p-3 transition-all duration-700 cursor-pointer">
      <div className="mb-2">
        <p  className="bg-pink-900/20 text-slate-400 px-3 py-2 w-fit rounded-full">
          {task.badge}
        </p>
      </div>

      <div className="font-medium text-slate-100">{task.title}</div>
      <p className="mt-1 line-clamp-2 text-sm text-slate-400">{task.description}</p>


      <div className="mt-3 flex items-center justify-between">
        <div className="w-full h-fit justify-end items-center flex p-3">
      {task.members.map((item,index) => (
        <div
        title={item.name}
          key={item.id}
          className={`relative  flex justify-center items-center overflow-hidden hover:scale-105 -z-${
            index * 10
          } hover:z-50 rounded-full border-2 border-white bg-neutral-blue w-11 h-11 -translate-x-${
            index * 4
          } ml-[-10px]`}
        >
          <p className="w-full flex items-center justify-center gap-2 py-2 px-5 rounded-lg btn btn-soft btn-warning duration-300">
            {item.name.charAt(0)}
          </p>
        </div>
      ))}
          {task.members.length > 4 ? (
              <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-200">
              +{task.members?.length - 4}
            </div>
          ) : null}
        </div>
          </div>

       
    </div>
  )
}
export default TaskCard






// // import Image from "next/image";
// // const list = ["مهسا", "رویا", "سیما", "حسن"];
// // const TaskCard = () => {
// //   return (
// //     <div className="w-full h-fit bg-black border border-gray-700 hover:shadow-xl hover:shadow-gray-700 hover:scale-103 hover:p-5 duration-700 cursor-pointer rounded-md p-2 flex-col justify-between items-start gap-5">
// //       <p className="bg-gray-700 w-fit px-3 py-1 rounded-full my-4">پروژه 1</p>
// //       <h6>تسک </h6>
// //       <p>توضیحات</p>
// //       <p>توضیحات محتصری در مورد این تسک</p>
// //       <div className="w-full h-fit justify-end items-center flex p-3">
// //         {list.map((item, index) => (
// //           <div
// //             key={index}
// //             className={`relative  flex justify-center items-center overflow-hidden hover:scale-105 -z-${
// //               index * 10
// //             } hover:z-50 rounded-full border-2 border-white bg-neutral-blue w-11 h-11 -translate-x-${
// //               index * 4
// //             } ml-[-10px]`}
// //           >
// //             <p className="w-full flex items-center justify-center gap-2 py-2 px-5 rounded-lg btn btn-soft btn-warning duration-300">
// //               {item.charAt(0)}
// //             </p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TaskCard;
// "use client";

// const members = ["مهسا", "رویا", "سیما", "حسن"];

// export default function TaskCard() {
//   return (
//     <div className="w-full h-fit hover:shadow-gray-700 hover:p-3 border gap-5 flex flex-col rounded-md p-2  hover:shadow-lg duration-700 bg-base-300">
//       <p className="bg-gray-700 w-fit px-3 py-1 rounded-full text-xs">
//         پروژه 1
//       </p>
//       <h6 className="font-semibold mb-1">تسک</h6>
//       <p className="">توضیحات</p>
//       <p className="mb-3 text-sm">توضیحات مختصری در مورد این تسک</p>

//       <div className="w-full h-fit flex items-center justify-end py-1 px-4">
//         {members.map((name, index) => {
//           return (
//             <div
//               key={index}
//               className={`relative  flex justify-center items-center overflow-hidden hover:scale-105 -z-${
//                 index * 10
//               } hover:z-50 rounded-full border-2 border-white bg-neutral-blue w-11 h-11 -translate-x-${
//                 index * 4
//               } ml-[-10px]`}
//               aria-label={`عضو ${name}`}
//               title={name}
//             >
//               <p className="w-full flex items-center justify-center gap-2 py-2 px-5 rounded-lg btn btn-soft btn-warning duration-300">
//                 {name.charAt(0)}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
