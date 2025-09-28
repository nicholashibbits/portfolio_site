import React from "react";

import GradientSphere from "@/app/components/GradientSphere";

function Hero() {
  return (
    <div className=" bg-neutral-900 text-clr-light diagonal-container-1">
      <div
        className=" hero flex flex-justify-center flex-align-center"
        style={{ position: "relative" }}
      >
        <div className="gradient-sphere-container">
          <GradientSphere size={540} />
          <GradientSphere size={200} />
        </div>
        <div className="hero-content">
          <h1 className="hero-title fw-700">NICK HIBBITS</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
