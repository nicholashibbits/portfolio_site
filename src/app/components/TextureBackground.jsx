"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function TextureBackground({ children }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="texture-bg" ref={ref}>
      <motion.div
        className="texture-bg__layer"
        style={{ y, willChange: "transform" }}
      />
      {children}
    </div>
  );
}
