import React from "react";
import HeroSection from "@/components/HeroSection";
import Contact from "./contact";
import Expertise from "./expertise";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory scroll-smooth scroll-p-0 scroll-m-0 bg-[var(--darkModeColor)] text-white">
      <Header />
      <HeroSection />
      <Expertise />
      <Contact />
    </main>
  );
}
