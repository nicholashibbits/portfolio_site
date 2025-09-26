import React from "react";

import { Cursor } from "motion-plus/react";

import Hero from "@/app/components/Hero";
import Contact from "@/app/components/Contact";
import Work from "@/app/components/Work";
import About from "@/app/components/About";

export default function Home() {
  return (
    <>
      <Cursor style={{ width: 5, height: 5 }} className="cursor" />
      <Cursor
        follow
        center={{ x: 0.5, y: 0.5 }}
        spring={{ stiffness: 1000, damping: 50 }}
        magnetic={{ snap: 0.9, padding: 0 }}
        style={{ width: 40, height: 40, borderRadius: 200 }}
        variants={{
          magnetic: { opacity: 0 },
        }}
        className="reticule"
      />

      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}
