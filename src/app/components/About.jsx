"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

function ImageWithText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const yRaw = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.6, 0.9],
    [200, 0, 0, -150],
  );
  const y = useSpring(yRaw, { stiffness: 100, damping: 15 });

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.5, 0.7, 0.8, 0.9],
    [0, 0.7, 1, 1, 0.5, 0],
  );

  return (
    <div className="img-container" ref={ref}>
      <Image
        src="/orange-headshot.jpg"
        alt="Nick Hibbits"
        width={600}
        height={1000}
        className="about-image"
      />
      <motion.div
        style={{ y, opacity, willChange: "transform, opacity" }}
        className="about-text"
      >
        <h2>Sites and Sounds</h2>
        <p>
          I'm a digital creative specializing in web development and audio
          engineering. Inspired by the natural world I strive to maintain
          life-like familiarity in computerized mediums. Either through smooth,
          physics-based, animations that offer more satisfying UX on a website,
          or programming swing into rhythmic elements of a track to make it
          sound more human, I love blurring the lines between organic and
          digital spaces.
        </p>
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
