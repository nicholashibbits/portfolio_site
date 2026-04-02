"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import GradientCircle from "@/app/components/GradientCircle";

function Hero() {
  const heroRef = useRef(null);

  const [isMediumUp, setIsMediumUp] = useState(false);
  const [isLargeUp, setIsLargeUp] = useState(false);

  const { scrollYProgress } = useScroll();
  const circleOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

  useEffect(() => {
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
      <motion.div style={{ opacity: circleOpacity, willChange: "opacity" }}>
        {isMediumUp && (
          <GradientCircle
            size={600}
            speed="slow"
            id="hero-left"
            scrollFollow
            xMin={-5}
            xMax={isLargeUp ? 55 : 35}
            yMin={-40}
            yMax={140}
          />
        )}
        <GradientCircle
          size={175}
          speed="fast"
          id="hero-right"
          scrollFollow
          xMin={-5}
          xMax={isLargeUp ? 80 : 60}
          yMin={-25}
          yMax={110}
          zIndex={1}
        />
      </motion.div>
      <div
        ref={heroRef}
        className=" hero flex flex-justify-center flex-align-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="hero-content">
          <h1 className="hero-title fw-700">NICK HIBBITS</h1>
        </div>
      </div>
      <motion.div
        style={{
          opacity: circleOpacity,
          willChange: "opacity",
          position: "relative",
          zIndex: 3,
        }}
      >
        <GradientCircle
          size={120}
          speed="fast"
          id="hero-bottom"
          scrollFollow
          xMin={-5}
          xMax={isLargeUp ? 85 : 65}
          yMin={-25}
          yMax={110}
          zIndex={1}
        />
      </motion.div>
    </div>
  );
}

export default Hero;
