"use client";
import GithubIcon from "@/src/icons/GithubIcon";
import Link from "next/link";
import React from "react";
import ParticlesBackground from "./Effect/ParticlesBg";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

function HeroSection() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-16 sm:gap-8 py-2 sm:py-3 my-16 sm:my-10 overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col items-center justify-center gap-y-8">
        <h1 className="font-bold text-3xl text-center title-gradient">
          تسکینو ؛ یه راه ساده برای مدیریت کار های روزانه
        </h1>
        <span className="text-gray-300 max-w-2xl text-center">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </span>
        <div className="w-full h-fit flex flex-col sm:flex-row-reverse items-center justify-center gap-7 sm:gap-10">
          {user === null ? (
            <Link href="/login" className="btn btn-warning btn-wide">
              ورود به حساب
            </Link>
          ) : (
            <Link href="/dashboard" className="btn btn-warning btn-wide">
              ایجاد تسک
            </Link>
          )}

          <Link
            href="https://github.com/MahdiKgz/task-manager-front"
            className="btn btn-primary btn-wide hover:btn-primary"
          >
            <GithubIcon />
            مشارکت در توسعه
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
