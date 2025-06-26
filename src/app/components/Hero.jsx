import React from "react";

import BackgroundContainer from "@/app/components/BackgroundContainer";
import Image from "next/image";

function Hero() {
  return (
    <BackgroundContainer color="neutral" shade="900" textColor="light">
      <div className="hero container flex flex-justify-center flex-align-center">
        <Image
          priority
          src="/abstractLines1.svg"
          alt="abstract lines"
          width={1512}
          height={1113}
          className="abstract-lines"
        ></Image>
        <div>
          <h1 className="fs-1000 fw-700">Nick Hibbits</h1>
          <h2 className="fs-800 ">Web Developer, Digital Creative</h2>
          <p className="fs-600">
            Frontend focused full-stack engineer, specializing in web-app
            development
          </p>
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default Hero;
