import React from "react";
import TaskCard from "./components/TaskCard";
import Board from "./components/Board";
import AddTask from "./components/AddTask";

const taskdata = {
  badge: "طراحی UI",
  title: "رابط کاربری داشبرد",
  description: "شروع یک کسب‌وکار جدید مثل بندبازی روی تک‌چرخه است!",
  members: [
    { id: "1", name: "مهسا" },
    { id: "2", name: "رویا" },
    { id: "3", name: "سیما" },
    { id: "4", name: "حسن" },
  ],
};
const TaksModule = () => {
  const list = [
    { id: "1", status: "todo", count: "3" },
    { id: "2", status: "in-progress", count: "4" },
    { id: "3", status: "completed", count: "6" },
  ];
  return (
      <div className="flex gap-2 w-full items-start justify-start">
      <div className="flex gap-2 w-full md:hidden items-center justify-start">
        <label htmlFor="ُshowtask" className="font-bold">نمایش وظایف:</label>
        <select name="ُshowtask" id="ُshowtask" className="bg-gray-100 p-2 rounded-md">
          <option value="todo" className="cursor-pointer" selected>برای انجام</option>
          <option value="in-progress" className="cursor-pointer">در حال تکمیل</option>
          <option value="completed" className="cursor-pointer">تکمیل شده</option>
        </select>
      </div>
      <div className="flex h-full min-h-0 overflow-y-auto gap-2">
        {list.map((item) => (
          <span className="flex-1 h-full flex-col items-center justify-start gap-5">
            <Board item={item}>
              <TaskCard task={taskdata} />
              <TaskCard task={taskdata} />
              <TaskCard task={taskdata} />
              <TaskCard task={taskdata} />
              
            </Board>
          </span>
        ))}
      </div>
      <div className="w-1/4 h-full">
        <AddTask />
      </div>
      </div>
  );
};

export default TaksModule;
