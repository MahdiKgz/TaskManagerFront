"use client"
import type { ReactNode } from "react"
import type React from "react"

import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import type { TTaskData } from "@/src/types/Tasks.types"

interface IBrandProps {
  children: ReactNode
  item: {
    id: string
    status: string
    count: string
    tasks?: TTaskData[]
  }
}
const Board: React.FC<IBrandProps> = ({ item, children }) => {
  const getClassNames = (status: string) => {
    switch (status) {
      case "completed":
        return { color: "success", label: "تکمیل شده" }
      case "in-progress":
        return { color: "warning", label: "در حال تکمیل" }
      case "todo":
        return { color: "error", label: "برای انجام" }
      default:
        return { color: "error", label: "نامشخص" }
    }
  }
  const { color, label } = getClassNames(item.status)
  const { setNodeRef, isOver } = useDroppable({
    id: item.status,
  })
  const taskIds = item.tasks?.map((task) => `${task.status}::${task._id}`) || []
  const isEmpty = !item.tasks || item.tasks.length === 0

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
      <div
        ref={setNodeRef}
        className={`rounded-xl p-3 border h-full w-full min-h-[400px] transition-all duration-200 ${
          isOver
            ? " border-indigo-500 border-2 bg-base-200"
            : "border-slate-700 bg-base-200"
        }`}
      >
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-3 min-h-[350px] h-full">
            {children}
            {isEmpty && (
              <div className="flex items-center justify-center h-full min-h-[300px] text-slate-400  rounded-lg">
                <div className="text-center p-8">
                  <div className="text-4xl mb-2">📋</div>
                  <p className="text-sm font-medium">ستون خالی است</p>
                </div>
              </div>
            )}
          </div>
        </SortableContext>
      </div>
    </div>
  );
};
export default Board;
