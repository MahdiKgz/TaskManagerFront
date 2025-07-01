import Footer from "@/src/modules/layout/Footer";
import Header from "@/src/modules/layout/Header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
