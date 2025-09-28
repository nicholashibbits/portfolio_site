"use client";

import React from "react";
import { motion } from "motion/react";

function GradientSphere({ size = 540, position = "left" }) {
  const viewBoxSize = 540;

  const positionStyles = {
    left: {
      left: "200px",
      top: "50%",
      transform: "translateY(50%)",
    },
    right: {
      right: "-100px",
      top: "50%",
      transform: "translateY(-50%)",
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      fill="none"
      className="gradient-sphere"
      style={{
        position: "absolute",
        ...positionStyles[position],
        willChange: "transform",
        pointerEvents: "auto",
        zIndex: 1,
      }}
      whileHover={{
        scale: 1.1,
        x: position === "left" ? 20 : -20,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <path
        d="M540 270C540 419.117 419.117 540 270 540C120.883 540 0 419.117 0 270C0 120.883 120.883 0 270 0C419.117 0 540 120.883 540 270Z"
        fill="url(#paint0_linear_4_4)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_4"
          x1="497.5"
          y1="147.5"
          x2="27"
          y2="366"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#001236" />
          <stop offset="0.105769" stopColor="#340242" />
          <stop offset="1" stopColor="#DB761D" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default GradientSphere;
