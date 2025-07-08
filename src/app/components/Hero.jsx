import React from "react";

import BackgroundContainer from "@/app/components/BackgroundContainer";
import Image from "next/image";

function Hero() {
  return (
    <BackgroundContainer color="neutral" shade="900" textColor="light">
      <div className="hero container flex flex-justify-center flex-align-center">
        <div className="hero-content">
          <div className="hero-animated-text">
            <h1 className="fw-700">NICK HIBBITS</h1>
            <p className="hero-subtitle">
              Web developer • Frontend engineer • Specializing in web-based
              applications
            </p>
          </div>
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default Hero;
