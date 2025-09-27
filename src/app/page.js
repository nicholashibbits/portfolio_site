import React from "react";

import Hero from "@/app/components/Hero";
import Contact from "@/app/components/Contact";
import Work from "@/app/components/Work";
import About from "@/app/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
