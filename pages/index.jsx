import React from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth scroll-p-0 scroll-m-0 bg-[var(--darkModeColor)] text-white">
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
