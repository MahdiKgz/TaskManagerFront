import { SOCIAL_MEDIA } from "@/src/constants/socialMedia";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="container flex flex-col sm:flex-row items-start justify-around gap-y-5 sm:gap-x-20 h-fit px-10 py-6 bg-gray-500/40 rounded-t-4xl font-bold text-sm text-white">
      <div className="flex items-start flex-col gap-y-3">
        <h1 className="title-gradient text-xl !font-extrabold">
          تسکی نو یه راه ساده برای مدیریت کارهای روزانه
        </h1>
        <Link
          className="text-sm sm:text-base text-gray-300 hover:text-amber-400 duration-300"
          href="https://github.com/MahdiKgz/TaskManagerFront"
        >
          مشارکت در توسعه فرانت اند
        </Link>
        <Link
          className="text-sm text-gray-300 hover:text-amber-400 duration-300"
          href="https://github.com/MahdiKgz/TaskManagerBack"
        >
          مشارکت در توسعه بک اند
        </Link>
      </div>
      <div className="flex flex-col items-start gap-y-3">
        <h1 className="title-gradient text-xl !font-extrabold">
          شبکه های اجتماعی
        </h1>
        <div className="w-fit px-4 flex items-center gap-x-5">
          {SOCIAL_MEDIA.map(({ link, icon }) => (
            <Link href={link}>{icon}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
