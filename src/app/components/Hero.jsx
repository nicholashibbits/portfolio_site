import React from "react";

import GradientSphere from "@/app/components/GradientSphere";

function Hero() {
  return (
    <div className="background-container bg-neutral-900 text-clr-light">
      <div className="hero container flex flex-justify-center flex-align-center">
        <div className="hero-content">
          <GradientSphere size={540} />
          <GradientSphere size={200} initialVelocity={{ x: 2.5, y: 2 }} />
          <div className="hero-animated-text">
            <h1 className="fw-700">NICK HIBBITS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
