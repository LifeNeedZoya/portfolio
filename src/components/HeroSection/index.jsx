"use client";
import React, { useEffect, useRef } from "react";
import HouseModel from "../HouseModel";

const HeroSection = () => {
  return (
    <main className=" h-screen w-screen bg-[var(--darkModeColor)] lg:flex lg:justify-between ">
      <div className="lg:flex-1 " id="HeroPic">
        <div className=" md:flex md:my-0 md:pt-0 ">
          <div className="w-[700px] h-[900px]">
            <HouseModel />
          </div>
        </div>
      </div>
      <div
        className=" 
        lg:flex-1"
        id="HeroData"
      >
        <div className="flex justify-center lg:mt-40 flex-col text-white text-2xl font-serif text-center mr-32  ">
          <h1 className=" lg:tracking-[50px] tracking-[20px] text-pink-500 text-4xl text-center">
            Hello
          </h1>
          <h2 className="lg:text-9xl text-7xl "> I am Zoya</h2>
          <p className="inline-block  tracking-widest ">
            Back-end, Front-end developer & Freelancer
          </p>
        </div>
        <div className="border-b-4 border-t-4 border-pink-500 xl:max-w-[600px] my-4 md:my-12">
          <p className="m-5 text-lg">
            I am Fullstack developer based in Ulan-bator .Nowadays i am student
            in Pinecone academy
          </p>
        </div>
        <div className="border-b-4 border-pink-500 lg:my-12 xl:w-[600px] text-center">
          <p className="m-5 text-lg">
            And i am willing to do internship in a tech company{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
