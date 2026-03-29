"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import GradientCircle from "@/app/components/GradientCircle";

function Hero() {
  const heroRef = useRef(null);
  const heroMetrics = useRef({ bottom: 0, ready: false });
  const { scrollY } = useScroll();

  const titleY = useTransform(() => {
    const y = scrollY.get();
    // Very slow parallax — title moves at 15% of scroll speed
    // then releases after 20rem (320px) of visual travel
    const parallaxSpeed = 0.7;
    const maxOffset = 520;
    const offset = y * parallaxSpeed;
    if (offset <= maxOffset) {
      return offset;
    }
    return maxOffset;
  });

  const [extraCircles, setExtraCircles] = useState({
    showBottom: false,
  });
  const [isMediumUp, setIsMediumUp] = useState(false);
  const [isLargeUp, setIsLargeUp] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      heroMetrics.current = {
        bottom: el.offsetTop + el.offsetHeight,
        ready: true,
      };
    }

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
        ref={heroRef}
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
        <motion.div
          className="hero-content"
          style={{ y: titleY, willChange: "transform" }}
        >
          <h1 className="hero-title fw-700">NICK HIBBITS</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
