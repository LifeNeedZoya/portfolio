"use client";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  return (
    <main className=" h-screen w-screen bg-[var(--bgColor)] flex">
      <div
        className=" inline-block m
        flex-1   "
      >
        <div className="flex justify-center items-center flex-col text-[var(--textColor)] text-9xl font-[100px]">
          <h1 className="text-[var(--textColor)] helloClass text">Hello</h1>
          <h2 className="">Zoya</h2>
          <h2 className="">Back-end</h2>
          <h2 className="">Front-end</h2>
          <h2 className="">developer</h2>
        </div>
      </div>
      <div className="flex-1">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
