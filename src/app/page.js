import React from "react";

import Hero from "@/app/components/Hero";
import Contact from "@/app/components/Contact";
import Work from "@/app/components/Work";
import About from "@/app/components/About";
import GradientSphere from "@/app/components/GradientSphere";

export default function Home() {
  return (
    <>
      <div className="gradient-sphere-container">
        <GradientSphere size={540} />
        <GradientSphere size={200} initialVelocity={{ x: 2.5, y: 2 }} />
        <Hero />
        <About />
      </div>
      <Work />
      <Contact />
    </>
  );
}
