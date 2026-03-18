"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

function ImageWithText() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 45em)");
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.3", "end 0.4"],
  });

  const restY = isMobile ? 160 : 0;

  const yRaw = useTransform(
    scrollYProgress,
    [0.15, 0.25, 0.4, 0.7, 0.9, 1],
    [200, 0, restY, restY, -100, -120],
  );

  const y = useSpring(yRaw, { stiffness: 100, damping: 15 });

  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.6, 0.7, 0.9, 0.98],
    [0, 0.9, 1, 1, 1, 0],
  );

  return (
    <div className="img-container" ref={ref}>
      <div className="img-wrapper">
        <motion.div
          animate={{ y: [0, -6, 2, -4, 0], x: [0, 3, -2, 4, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/orange-headshot.jpg"
            alt="Nick Hibbits"
            width={600}
            height={1000}
            className="about-image"
          />
        </motion.div>
        <motion.div
          style={{ y, opacity, willChange: "transform, opacity" }}
          className="about-text"
        >
          <h2>Sound check </h2>
          <p>
            I'm a web developer who cares about how digital experiences{" "}
            <span
              className="gradient-text fs-500"
              style={{ fontStyle: "italic" }}
            >
              feel{" "}
            </span>{" "}
            as much as how they function. I come at design problems from a
            background in music production where timing, space, and texture
            matter as much as structure.
          </p>
        </motion.div>
      </div>
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
