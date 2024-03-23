"use client";
import React, { useRef, useState, useEffect } from "react";

import Contact from "../components/Contact";

import Projects from "../components/Projects";
import AnimateGraph from "../components/Animation";

export default function Home() {
  const handleUp = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="w-screen bg-[var(--darkModeColor)] text-white hover:cursor-pointer overflow-auto">
      <div>
        <button className="fixed m-16" onClick={() => handleUp()}>
          down
        </button>

        <div>
          <AnimateGraph />
        </div>
        <div>
          <Contact />
        </div>
        <Projects />
      </div>
    </main>
  );
}
