import ParticlesBg from "@/src/modules/Landing/components/Effect/ParticlesBg";
import React from "react";

export const metadata = {
  title: "تسکینو | ورود و ثبت نام",
  description: "برنامه مدیریت وظایف",
};

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ParticlesBg />
      {children}
    </div>
  );
}

export default AuthLayout;
