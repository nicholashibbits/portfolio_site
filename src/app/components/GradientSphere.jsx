"use client";

import React from "react";
import { motion } from "motion/react";

function GradientSphere({
  size = 540,
  position = "left",
  movementType = "float",
}) {
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
    "contact-left": {
      left: "15%",
      top: "15%",
    },
    "contact-right": {
      right: "10%",
      bottom: "25%",
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
    // Water-like fluid movement with smooth, organic flow - slower and wider range
    water: {
      y:
        position === "contact-left"
          ? [
              0, -140, 100, -210, 160, -260, 190, -120, 240, -175, 160, -225,
              210, -105, 260, -150, 175, -190, 120, -155, 85, -105, 50, -70, 25,
              -35, 0,
            ]
          : [
              0, 175, -140, 220, -175, 280, -210, 140, -260, 190, -160, 240,
              -190, 120, -280, 175, -140, 220, -190, 155, -105, 70, -50, 25,
              -15, 8, 0,
            ],
      x:
        position === "contact-left"
          ? [
              0, 120, -175, 245, -160, 210, -260, 140, -190, 175, -225, 190,
              -120, 245, -160, 175, -140, 190, -105, 140, -70, 105, -35, 70,
              -15, 35, 0,
            ]
          : [
              0, -160, 210, -260, 190, -245, 260, -160, 210, -190, 245, -210,
              140, -260, 190, -160, 210, -190, 160, -120, 105, -70, 50, -25, 15,
              -8, 0,
            ],
      rotate:
        position === "contact-left"
          ? [
              0, 8, -12, 18, -15, 22, -18, 12, -15, 18, -12, 15, -8, 12, -15, 8,
              -12, 8, -5, 4, -2, 2, -2, 1, -1, 0.5, 0,
            ]
          : [
              0, -10, 15, -18, 12, -22, 18, -12, 15, -18, 12, -15, 8, -12, 15,
              -8, 12, -8, 5, -4, 2, -2, 2, -1, 1, -0.5, 0,
            ],
      transition: {
        duration: position === "contact-left" ? 120 : 125,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1], // Smoother cubic bezier for slower, more fluid motion
        times: [
          0, 0.038, 0.077, 0.115, 0.154, 0.192, 0.231, 0.269, 0.308, 0.346,
          0.385, 0.423, 0.462, 0.5, 0.538, 0.577, 0.615, 0.654, 0.692, 0.731,
          0.769, 0.808, 0.846, 0.885, 0.923, 0.962, 1,
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
      animate={movementType}
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
