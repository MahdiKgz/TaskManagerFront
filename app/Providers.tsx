"use client";

import store from "@/src/redux/store";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster />
      {children}
    </Provider>
  );
}

export default Providers;
