"use client"

import React from "react";
import Link from "next/link";
import DashboardIcon from "@/src/icons/DashboardIcon";
import ProfileIcon from "@/src/icons/ProfileIcon";
import TaskIcon from "@/src/icons/TaskIcon";
import LogoutIcon from "@/src/icons/LogoutIcon";
import { clearAuthCookie } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logOut } from "@/src/redux/slices/authSlice";
import toast from "react-hot-toast";

function DashboardSidebar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    toast.success("خروج از پنل کاربری")
    await clearAuthCookie();
    dispatch(logOut());
    router.push("/login");
  };
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
        <button className="logout-btn" onClick={handleLogout}>
          <LogoutIcon />
          خروج از حساب
        </button>
      </div>
    </div>
  );
}

export default DashboardSidebar;
