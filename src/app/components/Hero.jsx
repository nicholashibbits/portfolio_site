"use client";

import React, { useMemo } from "react";

import GradientCircle from "@/app/components/GradientCircle";

function Hero() {
  // Randomly show 0, 1, or 2 extra circles on each render
  const extraCircles = useMemo(() => {
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
          <GradientCircle size={600} speed="slow" id="hero-left" />
          <GradientCircle size={175} speed="fast" id="hero-right" />
          {extraCircles.showCenter && (
            <GradientCircle size={280} speed="slow" id="hero-center" />
          )}
          {extraCircles.showBottom && (
            <GradientCircle size={120} speed="fast" id="hero-bottom" />
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
