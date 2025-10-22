import type React from "react";
import type { TTaskData } from "@/src/types/Tasks.types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

interface ITaskCardProps {
  task: TTaskData;
  isDragging?: boolean;
}
const TaskCard: React.FC<ITaskCardProps> = ({ task, isDragging = false }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
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
      onClick={() => setOpenEditModal(true)}
      className={`rounded-lg border h-fit p-4 shadow-sm hover:shadow border-slate-700 bg-transparent hover:bg-base-100 transition-all duration-700 cursor-pointer ${
        isDragging ? "ring-2 ring-indigo-500 shadow-lg" : ""
      }`}
    >
      <div className="font-medium text-slate-100">{task.title}</div>
      <p className="mt-1 line-clamp-2 text-sm text-slate-400">
        {task.description}
      </p>
      {openEditModal && (
        <EditTaskModal
          isOpen={openEditModal}
          setIsOpen={setOpenEditModal}
          task={task}
        />
      )}
    </div>
  );
};
export default TaskCard;
