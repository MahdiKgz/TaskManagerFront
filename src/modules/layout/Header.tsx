"use client";
import GithubIcon from "@/src/icons/GithubIcon";
import Linkedin from "@/src/icons/Linkedin";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className="container h-20 flex items-center justify-between">
      <h1 className="uppercase font-bold text-xl text-white">Task Manager</h1>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-4">
          <Link href="https://github.com/MahdiKgz">
            <GithubIcon />
          </Link>
          <Link href="https://www.linkedin.com/in/mahdi-kgz-70895725b/">
            <Linkedin />
          </Link>
        </div>
        <Link href={"/login"}>
          <button className="btn btn-warning">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
