"use client";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  return (
    <main className=" h-screen w-screen bg-[var(--darkModeColor)] md:flex">
      <div className="flex-1">
        <img
          src="/images/hero-image.png"
          alt="girl"
          className="w-80 h-80 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] "
        />
      </div>
      <div
        className=" inline-block m
        flex-1   "
      >
        <div className="flex justify-center  lg:mt-28 flex-col text-white text-2xl font-serif  ">
          <h1 className=" tracking-[50px]">Hello</h1>
          <h2 className="text-9xl  "> I am Zoya</h2>
          <p className="inline-block  tracking-widest ">
            Back-end, Front-end developer & Freelancer
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
