"use client";

import React, { useMemo } from "react";

import AnimatedBlob from "@/app/components/AnimatedBlob";

function Hero() {
  // Randomly show 0, 1, or 2 extra blobs on each render
  const extraBlobs = useMemo(() => {
    return {
      showCenter: Math.random() > 0.5,
      showBottom: Math.random() > 0.6,
    };
  }, []);

  return (
    <div id="home" className=" bg-neutral-900 text-clr-light">
      <div
        className=" hero flex flex-justify-center flex-align-center"
        style={{ position: "relative" }}
      >
        <div className="gradient-sphere-container">
          <AnimatedBlob size={600} position="left" />
          <AnimatedBlob size={175} position="right" />
          {extraBlobs.showCenter && (
            <AnimatedBlob size={280} position="hero-center" />
          )}
          {extraBlobs.showBottom && (
            <AnimatedBlob size={120} position="hero-bottom" />
          )}
        </div>
        <div className="hero-content">
          <h1 className="hero-title fw-700">NICK HIBBITS</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
