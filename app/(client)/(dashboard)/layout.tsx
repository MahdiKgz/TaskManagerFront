import React from "react";
import DashboardHeader from "@/src/modules/dashboard/layout/Header";
import DashboardSidebar from "@/src/modules/dashboard/layout/Sidebar";

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col items-start gap-6 p-6 pb-10">
      <DashboardHeader />
      <div className="w-full h-full flex items-start gap-8">
        <DashboardSidebar />
        <div className="w-full h-full p-10 bg-base-100 rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashBoardLayout;
