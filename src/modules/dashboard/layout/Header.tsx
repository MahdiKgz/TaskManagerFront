"use client";
import React from "react";
import { RootState } from "@/src/redux/store";
import { useSelector } from "react-redux";
import ProfileIcon from "@/src/icons/ProfileIcon";
import NotificationsIcon from "@/src/icons/NotificationsIcon";

function DashboardHeader() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className="w-full flex items-center justify-between bg-base-100 rounded-lg text-white h-16 px-6 py-3 pl-16">
      <h1 className="title-graident font-bold text-xl">حساب کاربری</h1>
      <div className="flex items-center gap-x-6">
        <button className="btn btn-circle">
          <NotificationsIcon />
        </button>
        <div className="flex items-center justify-center gap-x-2">
          <ProfileIcon />
          <span className="font-normal text-base">{user?.username}</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
