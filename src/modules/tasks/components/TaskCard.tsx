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
      className={`relative rounded-lg border h-fit p-4 shadow-sm hover:shadow border-slate-700 bg-transparent hover:bg-base-100 transition-all duration-700 ${
        isDragging ? "ring-2 ring-indigo-500 shadow-lg" : ""
      }`}
    >
      {/* Drag Handle */}
      <div
        {...listeners}
        className="absolute top-2 right-2 w-6 h-6 cursor-grab active:cursor-grabbing flex items-center justify-center text-slate-400 hover:text-slate-200 transition-colors"
        title="Drag to reorder"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" />
        </svg>
      </div>
      
      {/* Clickable Content */}
      <div onClick={onEditClick} className="cursor-pointer pr-8">
        <div className="font-medium text-slate-100">{task.title}</div>
        <p className="mt-1 line-clamp-2 text-sm text-slate-400">
          {task.description}
        </p>
      </div>
    </div>
  );
};
export default TaskCard;
