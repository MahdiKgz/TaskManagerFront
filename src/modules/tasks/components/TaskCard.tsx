import type React from "react"
import type { TTaskData } from "@/src/types/Tasks.types"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface ITaskCardProps {
  task: TTaskData
  isDragging?: boolean
}
const TaskCard: React.FC<ITaskCardProps> = ({ task, isDragging = false }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: `${task.status}::${task._id}`,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`rounded-lg border h-fit p-4 shadow-sm hover:shadow border-slate-700 bg-transparent hover:bg-base-100 hover:p-3 transition-all duration-700 cursor-pointer ${
        isDragging ? "ring-2 ring-indigo-500 shadow-lg" : ""
      }`}
    >
    

      <div className="font-medium text-slate-100">{task.title}</div>
      <p className="mt-1 line-clamp-2 text-sm text-slate-400">
        {task.description}
      </p>

      {/* <div className="mt-3 flex items-center justify-between">
        <div className="w-full h-fit justify-end items-center flex p-3"> */}
          {/* {task.members.map((item, index) => (
            <div
              title={item.name}
              key={item.id}
              className={`relative  flex justify-center items-center overflow-hidden hover:scale-105 -z-${
                index * 10
              } hover:z-50 rounded-full border-2 border-white bg-neutral-blue w-11 h-11 -translate-x-${
                index * 4
              } ml-[-10px]`}
            > */}
              {/* <p className="w-full flex items-center justify-center gap-2 py-2 px-5 rounded-lg btn btn-soft btn-warning duration-300">
                {user.name}
              </p>
            </div> */}
          {/* ))} */}
          {/* {task.members.length > 4 ? (
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-200">
              +{task.members?.length - 4}
            </div>
          ) : null} */}
        {/* </div> */}
      </div>
  );
};
export default TaskCard;
