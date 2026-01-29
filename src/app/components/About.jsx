"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageWithText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div className="img-container">
      <div ref={ref}>
        <Image
          src="/orange-headshot.jpg"
          alt="Nick Hibbits"
          width={600}
          height={1000}
          className="about-image"
        />
      </div>
      <motion.div
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y, opacity }}
        className="about-text"
      >
        <h2>Lorem ipsum</h2>
        <p>Lodor sit amet, consectetur adipiscing elit.</p>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="container">
      <ImageWithText />
    </section>
  );
}
