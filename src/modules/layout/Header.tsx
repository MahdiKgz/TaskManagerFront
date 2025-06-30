import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="container h-20 flex items-center justify-between">
      <h1 className="uppercase font-bold text-xl">Task Manager</h1>
      <Link href={"/login"}>
        <button className="btn btn-warning">Login</button>
      </Link>
    </div>
  );
}

export default Header;
