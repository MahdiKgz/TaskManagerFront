import GithubIcon from "@/src/icons/GithubIcon";
import Link from "next/link";
import React from "react";
import ParticlesBackground from "./Effect/ParticlesBg";

function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-16 sm:gap-8 py-2 sm:py-3 my-16 sm:my-10 overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col items-center justify-center gap-y-8">
        <h1 className="font-bold text-3xl text-center bg-gradient-to-l text-transparent bg-clip-text from-amber-200 to-amber-600">
          A Minimalist Task Manger For your Daily Routines
        </h1>
        <span className="text-gray-300 max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip
        </span>
        <div className="w-full h-fit flex flex-col sm:flex-row items-center justify-center gap-7 sm:gap-10">
          <Link href="/login" className="btn btn-warning btn-wide">
            Login
          </Link>
          <Link
            href="https://github.com/MahdiKgz/task-manager-front"
            className="btn btn-primary btn-wide hover:btn-primary"
          >
            <GithubIcon />
            Visit Github
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
