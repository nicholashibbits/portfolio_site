import React from "react";

import BackgroundContainer from "@/app/components/BackgroundContainer";
import Image from "next/image";

function Hero() {
  return (
    <BackgroundContainer color="neutral" shade="900" textColor="light">
      <div className="hero container flex flex-justify-center flex-align-center">
        <div>
          <h1 className="fs-1000 fw-700">Nick Hibbits</h1>
          <h2 className="fs-800 ">Web Developer</h2>
          <p className="fs-600">
            Frontend engineer, specializing in web-based applications
          </p>
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default Hero;
