"use client";
import React from "react";
import RegisterForm from "./components/RegisterForm";

function LoginModule() {
  return (
    <div className="relative z-10 w-screen h-screen flex items-center justify-center">
      <RegisterForm />
    </div>
  );
}

export default LoginModule;
