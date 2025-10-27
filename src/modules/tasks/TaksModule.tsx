"use client";

import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import Board from "./components/Board";
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import type { TTaskData } from "@/src/types/Tasks.types";
import useTask from "@/src/hooks/useTask";
import AddTaskModal from "./components/AddTaskModal";
import EditTaskModal from "./components/EditTaskModal";
import toast from "react-hot-toast";

const TaksModule = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<TTaskData | null>(null);
  const { allTasks, isLoadingTasks, updateTask } = useTask();

  const [tasks, setTasks] = useState<TTaskData[]>([]);
  const [activeTask, setActiveTask] = useState<TTaskData | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    if (allTasks && allTasks.length > 0) {
      setTasks(allTasks);
    } else if (!isLoadingTasks && (!allTasks || allTasks.length === 0)) {
      setTasks([]);
    }
  }, [allTasks, isLoadingTasks]);

  if (isLoadingTasks) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">در حال بارگذاری تسک‌ها...</div>
      </div>
    );
  }

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const completedTasks = tasks.filter((task) => task.status === "completed");

  const list = [
    {
      id: "1",
      status: "todo",
      count: todoTasks.length.toString(),
      tasks: todoTasks,
    },
    {
      id: "2",
      status: "in-progress",
      count: inProgressTasks.length.toString(),
      tasks: inProgressTasks,
    },
    {
      id: "3",
      status: "completed",
      count: completedTasks.length.toString(),
      tasks: completedTasks,
    },
  ];

  const handleDragStart = (event: { active: { id: string } }) => {
    const { active } = event;
    const [, taskId] = active.id.split("::");
    const task = tasks.find((t) => t._id === taskId);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // اگر روی خود ستون drop شد
    if (
      overId === "todo" ||
      overId === "in-progress" ||
      overId === "completed"
    ) {
      const [fromStatus, taskId] = activeId.split("::");
      const toStatus = overId;

      if (fromStatus !== toStatus) {
        const updatedTask = tasks.find((t) => t._id === taskId);
        if (updatedTask) {
          updateTask({
            id: taskId,
            status: toStatus as "todo" | "in-progress" | "completed",
          });
          toast.success("وضعیت تسک تغییر کرد.");
        }

        // انتقال به ستون جدید
        setTasks((prevTasks) => {
          return prevTasks.map((task) =>
            task._id === taskId
              ? {
                  ...task,
                  status: toStatus as "todo" | "in-progress" | "completed",
                }
              : task
          );
        });
      }
      return;
    }

    // اگر روی تسک دیگری drop شد
    const [fromStatus, taskId] = activeId.split("::");
    const [toStatus] = overId.split("::");

    if (!fromStatus || !toStatus) return;

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      const taskIndex = newTasks.findIndex((t) => t._id === taskId);

      if (taskIndex === -1) return prevTasks;

      if (fromStatus === toStatus) {
        // مرتب‌سازی در همان ستون
        const sameCategoryTasks = newTasks.filter(
          (t) => t.status === fromStatus
        );
        const overTaskId = overId.split("::")[1];
        const currentIndex = sameCategoryTasks.findIndex(
          (t) => t._id === taskId
        );
        const overIndex = sameCategoryTasks.findIndex(
          (t) => t._id === overTaskId
        );

        if (currentIndex !== -1 && overIndex !== -1) {
          const reorderedTasks = arrayMove(
            sameCategoryTasks,
            currentIndex,
            overIndex
          );
          const otherTasks = newTasks.filter((t) => t.status !== fromStatus);
          return [...otherTasks, ...reorderedTasks];
        }
      } else {
        // انتقال بین ستون‌ها
        newTasks[taskIndex] = {
          ...newTasks[taskIndex],
          status: toStatus as "todo" | "in-progress" | "completed",
        };
      }
      return newTasks;
    });
  };

  return (
    <div className="w-full flex flex-col items-start gap-6">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-2xl">وظایف</h1>
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="btn btn-sm sm:btn-md btn-primary"
        >
          ایجاد تسک
        </button>
      </div>
      <div className="flex flex-col gap-2 w-full items-start justify-start">
        <div className="flex gap-2 w-full md:hidden items-center justify-start">
          <label htmlFor="ُshowtask" className="font-bold">
            نمایش وظایف:
          </label>
          <select
            name="ُshowtask"
            id="ُshowtask"
            className="bg-gray-100 p-2 rounded-md"
          >
            <option value="todo" className="cursor-pointer">
              برای انجام
            </option>
            <option value="in-progress" className="cursor-pointer">
              در حال تکمیل
            </option>
            <option value="completed" className="cursor-pointer">
              تکمیل شده
            </option>
          </select>
        </div>
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex h-full min-h-0 overflow-y-auto gap-2 w-full">
            {list.map((item) => (
              <span
                key={item.id}
                className="flex-1 h-full flex-col items-center justify-start gap-5"
              >
                <Board item={item}>
                  {item.tasks.map((task) => (
                    <TaskCard 
                      key={task._id} 
                      task={task} 
                      onEditClick={() => {
                        setSelectedTask(task);
                        setEditModalOpen(true);
                      }}
                    />
                  ))}
                </Board>
              </span>
            ))}
          </div>

          <DragOverlay dropAnimation={null}>
            {activeTask ? (
              <div className="rotate-3 opacity-90">
                <TaskCard 
                  task={activeTask} 
                  isDragging 
                  onEditClick={() => {}} 
                />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
        <div className="w-1/4 h-full">
          <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {selectedTask && (
        <EditTaskModal 
          isOpen={editModalOpen} 
          setIsOpen={setEditModalOpen} 
          task={selectedTask} 
        />
      )}
    </div>
  );
};

export default TaksModule;
