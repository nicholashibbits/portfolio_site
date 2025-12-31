"use client";

import React from "react";
import { motion } from "motion/react";

function GradientSphere({ size = 540, position = "left" }) {
  const viewBoxSize = 540;

  const positionStyles = {
    left: {
      left: "50px",
      top: "30%",
    },
    right: {
      right: "50px",
      top: "10%",
    },
  };

  // Create floating animation variants with random meandering movement
  const floatingVariants = {
    float: {
      y:
        position === "left"
          ? [
              0, -90, 45, -130, 85, -200, 110, -60, 180, -95, 150, -170, 75,
              -40, 120, -110, 65, -25, 0,
            ]
          : [
              0, 95, -50, 140, -85, 195, -115, 55, -175, 90, -145, 165, -70, 35,
              -125, 105, -60, 20, 0,
            ],
      x:
        position === "left"
          ? [
              0, 65, -120, 180, -75, 140, -190, 85, -50, 160, -110, 75, -165,
              95, -35, 145, -80, 25, 0,
            ]
          : [
              0, -70, 125, -175, 80, -145, 185, -90, 55, -155, 115, -80, 170,
              -100, 40, -150, 85, -30, 0,
            ],
      transition: {
        duration: position === "left" ? 55 : 60,
        repeat: Infinity,
        ease: "easeInOut",
        times: [
          0, 0.07, 0.14, 0.21, 0.28, 0.35, 0.42, 0.49, 0.56, 0.63, 0.7, 0.77,
          0.83, 0.88, 0.92, 0.95, 0.97, 0.99, 1,
        ],
      },
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
        pointerEvents: "none",
        zIndex: 1,
      }}
      variants={floatingVariants}
      animate="float"
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
