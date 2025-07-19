import CloseIcon from "@/src/icons/CloseIcon";
import DashboardIcon from "@/src/icons/DashboardIcon";
import ProfileIcon from "@/src/icons/ProfileIcon";
import TaskIcon from "@/src/icons/TaskIcon";
import { RootState } from "@/src/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Logout from "../components/Logout";

function MobileSidebar({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <div className="w-[70%] sm:w-2/5 h-full flex lg:hidden flex-col items-start justify-between p-6 bg-base-300 fixed right-0 top-0 bottom-0 z-30">
        <div className="w-full flex flex-col items-start gap-8">
          <div className="w-full flex items-center justify-between">
            <h1 className="font-bold text-lg text-white">پنل کاربری</h1>
            <button onClick={() => setOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="w-full btn btn-lg border-white rounded-lg">
            <ProfileIcon />
            <span className=" font-bold text-lg">{user?.name}</span>
          </div>
          <div className="w-full flex flex-col items-start gap-5">
            <Link
              onClick={() => setOpen(false)}
              href="/dashboard"
              className="dashboard-btn"
            >
              <DashboardIcon />
              پیشخوان
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/dashboard/profile"
              className="dashboard-btn"
            >
              <ProfileIcon />
              پروفایل
            </Link>
            <Link
              onClick={() => setOpen(false)}
              href="/dashboard/tasks"
              className="dashboard-btn"
            >
              <TaskIcon />
              وظایف
            </Link>
          </div>
        </div>
        <Logout/>
      </div>
      <div
        onClick={() => setOpen(false)}
        className="w-full h-full block lg:hidden fixed inset-0 z-10 bg-black/30 backdrop-blur-xs"
      />
    </>
  );
}

export default MobileSidebar;
