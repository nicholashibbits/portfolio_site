import React from "react";

import GradientSphere from "@/app/components/GradientSphere";

function Hero() {
  return (
    <div id="home" className=" bg-neutral-900 text-clr-light">
      <div
        className=" hero flex flex-justify-center flex-align-center"
        style={{ position: "relative" }}
      >
        <div className="gradient-sphere-container">
          <GradientSphere size={600} position="left" />
          <GradientSphere size={175} position="right" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title fw-700">NICK HIBBITS</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
