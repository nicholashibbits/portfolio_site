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

  const restY = isMobile ? 225 : 0;

  const yRaw = useTransform(
    scrollYProgress,
    [0.55, 0.55, 0.55],
    [200, restY, restY],
  );

  const y = useSpring(yRaw, { stiffness: 100, damping: 30 });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [0, 0.9, 1]);

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
            height={600}
            className="about-image"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
        <motion.div
          style={{ y, opacity, willChange: "transform, opacity" }}
          className="about-text"
        >
          <h2>About</h2>
          <h3 className="padding-block-4">Code | Music | Mind</h3>
          <p className="padding-top-4">
            <span
              className="gradient-text fs-400"
              style={{ fontStyle: "italic" }}
            >
              Feeling{" "}
            </span>{" "}
            matters as much as<code className="fs-300">function</code>
          </p>
          <p className="padding-block-8">
            My favorite moments on the web or in music are always in the
            details: the tactile animation of a button when clicked, a subtle
            element in the background of a song that changes the mood entirely.
            {/* Coming at design problems from a background in music I
            understand timing, space, and texture matter as much as structure. */}
          </p>
          <p>
            This site serves as a hub to showcase my work in web development and
            music, as well as share my thoughts on certain topics I'm thinking
            about.
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
