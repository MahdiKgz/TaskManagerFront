"use client";
import GithubIcon from "@/src/icons/GithubIcon";
import Linkedin from "@/src/icons/Linkedin";
import { RootState } from "@/src/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className="container h-20 flex items-center justify-between">
      <h1 className="uppercase font-bold text-xl text-white">تسکینو</h1>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-4">
          <Link href="https://github.com/MahdiKgz">
            <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/mahdi-kgz-70895725b/">
            <Linkedin />
          </Link>
        </div>
        {user === null ? (
          <Link href={"/login"}>
            <button className="btn btn-warning">ورود به حساب</button>
          </Link>
        ) : (
          <Link href="/dashboard">
            <button className="btn btn-warning">{user?.username}</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
