import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth scroll-p-0 scroll-m-0 ">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
