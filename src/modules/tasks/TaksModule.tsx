"use client";
import React, { useState } from "react";
import TaskCard from "./components/TaskCard";
import Board from "./components/Board";
import AddTask from "./components/AddTask";
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { TTaskData } from "@/src/types/Tasks.types";

const initialTaskData: TTaskData[] = [
  {
    id: "task-1",
    status: "todo",
    badge: "طراحی UI",
    title: "رابط کاربری داشبورد",
    description: "شروع یک کسب‌وکار جدید مثل بندبازی روی تک‌چرخه است!",
    members: [
      { id: "1", name: "مهسا" },
      { id: "2", name: "رویا" },
      { id: "3", name: "سیما" },
      { id: "4", name: "حسن" },
    ],
  },
  {
    id: "task-2",
    status: "todo",

    badge: "توسعه",
    title: "API پرداخت",
    description: "پیاده‌سازی سیستم پرداخت آنلاین",
    members: [
      { id: "1", name: "مهسا" },
      { id: "3", name: "سیما" },
    ],
  },
  {
    id: "task-3",
    status: "todo",

    badge: "تست",
    title: "تست واحد",
    description: "نوشتن تست‌های واحد برای کامپوننت‌ها",
    members: [
      { id: "2", name: "رویا" },
      { id: "4", name: "حسن" },
    ],
  },
  {
    id: "task-4",
    status: "completed",

    badge: "طراحی UI",
    title: "صفحه ورود",
    description: "طراحی و پیاده‌سازی صفحه ورود کاربران",
    members: [
      { id: "1", name: "مهسا" },
      { id: "2", name: "رویا" },
      { id: "3", name: "سیما" },
    ],
  },
];

const TaksModule = () => {
  const [tasks, setTasks] = useState<TTaskData[]>(initialTaskData);
  const [activeTask, setActiveTask] = useState<TTaskData | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  // تقسیم تسک‌ها بر اساس status
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

  const handleDragStart = (event: any) => {
    const { active } = event;
    const [status, taskId] = active.id.split("::");
    const task = tasks.find((t) => t.id === taskId);
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
        // انتقال به ستون جدید
        setTasks((prevTasks) => {
          return prevTasks.map((task) =>
            task.id === taskId
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
      const taskIndex = newTasks.findIndex((t) => t.id === taskId);

      if (taskIndex === -1) return prevTasks;

      if (fromStatus === toStatus) {
        // مرتب‌سازی در همان ستون
        const sameCategoryTasks = newTasks.filter(
          (t) => t.status === fromStatus
        );
        const overTaskId = overId.split("::")[1];
        const currentIndex = sameCategoryTasks.findIndex(
          (t) => t.id === taskId
        );
        const overIndex = sameCategoryTasks.findIndex(
          (t) => t.id === overTaskId
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
    <div className="flex gap-2 w-full items-start justify-start">
      <div className="flex gap-2 w-full md:hidden items-center justify-start">
        <label htmlFor="ُshowtask" className="font-bold">
          نمایش وظایف:
        </label>
        <select
          name="ُshowtask"
          id="ُshowtask"
          className="bg-gray-100 p-2 rounded-md"
        >
          <option value="todo" className="cursor-pointer" selected>
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
                  <TaskCard key={task.id} task={task} />
                ))}
              </Board>
            </span>
          ))}
        </div>

        <DragOverlay dropAnimation={null}>
          {activeTask ? (
            <div className="rotate-3 opacity-90">
              <TaskCard task={activeTask} isDragging />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
      <div className="w-1/4 h-full">
        <AddTask />
      </div>
    </div>
  );
};

export default TaksModule;
