"use client";
import React from "react";
import { Model } from "./House";
import { Typewriter } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
const HeroSection = () => {
  return (
    <main>
      <section className="h-screen snap-always snap-center bg-[url('/images/bg.jpeg')] ">
        <div className="  container mx-auto align ">
          <Canvas>
            <Stage environment="city" intensity={0.8}>
              <Model />
            </Stage>
            <OrbitControls enableZoom={true} />
          </Canvas>
          <span>
            <Typewriter
              words={[
                "UX Designer",
                "UI Designer",
                "Front-end developer",
                "Back-end developer",
                "Based in UB",
              ]}
              loop={5}
              cursor
              cursorStyle="..."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>

          <div>
            <button className="px-6 py-4 rounded-full mr-4 w-full sm:w-fit bg-white hover:bg-gradient-to-br text-black from-green-800 via-slate-800 to-black">
              Hire me
            </button>
            <button className="px-6 py-4 rounded-full bg-transparent sm:w-fit w-full  text-white border-white border mt-3 hover:bg-slate-800">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
