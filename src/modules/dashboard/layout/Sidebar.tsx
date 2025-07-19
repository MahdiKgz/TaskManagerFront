import React from "react";
import Link from "next/link";
import DashboardIcon from "@/src/icons/DashboardIcon";
import ProfileIcon from "@/src/icons/ProfileIcon";
import TaskIcon from "@/src/icons/TaskIcon";
import Logout from "../components/Logout";


function DashboardSidebar() {
  
  return (
    <div className="hidden lg:block w-[280px] h-full bg-base-100 rounded-lg px-6 py-4 pb-6">
      <div className="w-full h-full flex flex-col items-start justify-between">
        <div className="w-full flex flex-col items-start gap-6">
          <Link href="/dashboard" className="dashboard-btn">
            <DashboardIcon />
            پیشخوان
          </Link>
          <Link href="/dashboard/profile" className="dashboard-btn">
            <ProfileIcon />
            پروفایل
          </Link>
          <Link href="/dashboard/tasks" className="dashboard-btn">
            <TaskIcon />
            وظایف
          </Link>
        </div>
        <Logout/>
      </div>
    </div>
  );
}

export default DashboardSidebar;
