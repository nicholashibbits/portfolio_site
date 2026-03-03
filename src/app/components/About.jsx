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
        <h2>Systems thinker, texture obsessive</h2>
        <p>
          I'm a web developer who cares about how digital experiences{" "}
          <em>feel</em>, not just how they function. I come at design problems
          from a background in music production, where timing, space, and
          texture matter as much as structure.
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
