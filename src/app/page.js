"use client";
import React, { useRef, useState, useEffect } from "react";

import Contact from "../components/Contact";

import Projects from "../components/Projects";
import AnimateGraph from "../components/Animation";

export default function Home() {
  return (
    <main className="w-screen bg-[var(--darkModeColor)] text-white hover:cursor-pointer overflow-auto">
      <div>
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
