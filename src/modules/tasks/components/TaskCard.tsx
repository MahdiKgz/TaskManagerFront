import type React from "react";
import type { TTaskData } from "@/src/types/Tasks.types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ITaskCardProps {
  task: TTaskData;
  isDragging?: boolean;
  onEditClick: () => void;
}
const TaskCard: React.FC<ITaskCardProps> = ({ task, isDragging = false, onEditClick }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: `${task.status}::${task._id}`,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      // {...listeners}
      onClick={onEditClick}
      className={`rounded-lg border h-fit p-4 shadow-sm hover:shadow border-slate-700 bg-transparent hover:bg-base-100 transition-all duration-700 cursor-pointer ${
        isDragging ? "ring-2 ring-indigo-500 shadow-lg" : ""
      }`}
    >
      <div className="font-medium text-slate-100">{task.title}</div>
      <p className="mt-1 line-clamp-2 text-sm text-slate-400">
        {task.description}
      </p>
    </div>
  );
};
export default TaskCard;
