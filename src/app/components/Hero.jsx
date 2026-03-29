"use client";

import React, { useEffect, useState } from "react";

import GradientCircle from "@/app/components/GradientCircle";

function Hero() {
  const [extraCircles, setExtraCircles] = useState({
    showBottom: false,
  });
  const [isMediumUp, setIsMediumUp] = useState(false);
  const [isLargeUp, setIsLargeUp] = useState(false);

  useEffect(() => {
    setExtraCircles({
      showCenter: Math.random() > 0.5,
      showBottom: Math.random() > 0.6,
    });

    const mediumMql = window.matchMedia("(min-width: 45em)");
    const largeMql = window.matchMedia("(min-width: 65em)");
    setIsMediumUp(mediumMql.matches);
    setIsLargeUp(largeMql.matches);

    const mediumHandler = (e) => setIsMediumUp(e.matches);
    const largeHandler = (e) => setIsLargeUp(e.matches);
    mediumMql.addEventListener("change", mediumHandler);
    largeMql.addEventListener("change", largeHandler);
    return () => {
      mediumMql.removeEventListener("change", mediumHandler);
      largeMql.removeEventListener("change", largeHandler);
    };
  }, []);

  return (
    <div id="home" className=" text-clr-light">
      <div
        className=" hero flex flex-justify-center flex-align-center"
        style={{ position: "relative" }}
      >
        <div className="backlayer">
          {isMediumUp && (
            <GradientCircle
              size={600}
              speed="slow"
              id="hero-left"
              xMin={-5}
              xMax={isLargeUp ? 60 : 40}
              yMin={-5}
              yMax={40}
            />
          )}
          <GradientCircle
            size={175}
            speed="fast"
            id="hero-right"
            xMin={-5}
            xMax={isLargeUp ? 80 : 55}
            yMin={-5}
            yMax={55}
          />
          {extraCircles.showBottom && (
            <GradientCircle
              size={120}
              speed="fast"
              id="hero-bottom"
              xMin={-5}
              xMax={isLargeUp ? 85 : 60}
              yMin={-5}
              yMax={60}
            />
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
