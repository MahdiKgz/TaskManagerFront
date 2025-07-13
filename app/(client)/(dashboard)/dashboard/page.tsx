"use client";
import { RootState } from "@/src/redux/store";
import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state: RootState) => state.auth.user);
  if (user) {
    return <div>welcome {user.username}</div>;
  }
}

export default Dashboard;
