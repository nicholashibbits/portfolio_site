"use client";

import React, { useEffect, useId, useMemo, useState } from "react";
import { motion } from "motion/react";

// Seeded random for deterministic values
function seededRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return hash;
}

function GradientCircle({ size = 200, speed = "slow", id = "" }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const instanceId = useId();
  const gradientId = `circle-gradient-${id}-${instanceId}`;

  // Seed from the id prop for deterministic but unique paths per instance
  const seed = hashString(id || instanceId);

  // Generate a meandering path with many waypoints
  const keyframes = useMemo(() => {
    const numPoints = 16;
    const xKeys = [];
    const yKeys = [];

    // Generate wandering waypoints using seeded random
    // Values are in vw/vh-like percentages that we'll map to pixel offsets
    for (let i = 0; i < numPoints; i++) {
      const baseSeed = seed + i * 53;
      // Wander across a large range: -30vw to +30vw, -20vh to +20vh
      xKeys.push((seededRandom(baseSeed) - 0.5) * 60);
      yKeys.push((seededRandom(baseSeed + 1000) - 0.5) * 40);
    }

    // Close the loop back to start
    xKeys.push(xKeys[0]);
    yKeys.push(yKeys[0]);

    // Convert percentages to vw/vh pixel values
    // Using vw-based units so movement scales with viewport
    const xVw = xKeys.map((k) => `${k}vw`);
    const yVh = yKeys.map((k) => `${k}vh`);

    return { xVw, yVh };
  }, [seed]);

  const duration = speed === "fast" ? 40 : 90;

  if (!mounted) return null;

  return (
    <motion.div
      className="gradient-circle"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, #001236 0%, #340242 10.5%, #DB761D 100%)`,
        position: "absolute",
        pointerEvents: "none",
        zIndex: 1,
        willChange: "transform",
      }}
      animate={{
        x: keyframes.xVw,
        y: keyframes.yVh,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default GradientCircle;
