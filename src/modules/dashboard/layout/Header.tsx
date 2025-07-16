"use client";
import React, { useState } from "react";
import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";
import ProfileIcon from "@/src/icons/ProfileIcon";
import NotificationsIcon from "@/src/icons/NotificationsIcon";
import MobileSidebar from "./MobileSidebar";
import HamburgerIcon from "@/src/icons/HamburgerIcon";

function DashboardHeader() {
  const { user } = useSelector((state: RootState) => state.auth);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between bg-base-100 rounded-lg text-white h-16 px-4 sm:px-6 py-2 sm:py-3 lg:pl-16">
      <h1 className="title-graident font-bold text-base sm:text-xl">
        حساب کاربری
      </h1>
      <div className="flex items-center gap-x-6">
        <button className="btn btn-circle hidden sm:block">
          <NotificationsIcon />
        </button>
        <button className="hidden lg:flex items-center justify-center gap-x-2">
          <ProfileIcon />
          <span className="font-normal text-base">{user?.name}</span>
        </button>
        <button onClick={() => setOpen(!open)} className="block lg:hidden">
          <HamburgerIcon />
        </button>
      </div>
      {open && <MobileSidebar setOpen={setOpen} />}
    </div>
  );
}

export default DashboardHeader;
