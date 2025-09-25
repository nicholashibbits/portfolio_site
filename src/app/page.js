import React from "react";

import { Cursor } from "motion-plus/react";

import Hero from "@/app/components/Hero";
import Contact from "@/app/components/Contact";
import Work from "@/app/components/Work";
import About from "@/app/components/About";

export default function Home() {
  return (
    <>
      <Cursor style={{ borderRadius: 5 }} />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
