import React from "react";
import DashboardHeader from "@/src/modules/dashboard/layout/Header";
import DashboardSidebar from "@/src/modules/dashboard/layout/Sidebar";

export const metadata = {
  title: "تسکینو | پنل کاربر",
  description: "برنامه مدیریت وظایف",
};

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col items-start gap-6 p-6 pb-10">
      <DashboardHeader />
      <div className="w-full h-full flex items-start md:gap-8">
        <DashboardSidebar />
        <div className="w-full h-full p-6 sm:p-10 bg-base-100 rounded-lg !overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashBoardLayout;
