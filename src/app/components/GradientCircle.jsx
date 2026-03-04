"use client";

import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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

function GradientCircle({
  size = 200,
  speed = "slow",
  id = "",
  constrained = false,
}) {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [containerSize, setContainerSize] = useState(null);
  const circleRef = useRef(null);
  const startOffset = useRef(0);

  useEffect(() => {
    startOffset.current = Math.random();

    const mql = window.matchMedia("(min-width: 65em)");
    setIsDesktop(mql.matches);
    setMounted(true);

    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Measure parent container for constrained mode before paint
  useLayoutEffect(() => {
    if (mounted && constrained && circleRef.current) {
      const parent = circleRef.current.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    }
  }, [mounted, constrained]);

  const instanceId = useId();

  // Seed from the id prop for deterministic but unique paths per instance
  const seed = hashString(id || instanceId);

  // Generate a meandering path with many waypoints
  const keyframes = useMemo(() => {
    if (!mounted) return { x: [], y: [] };
    if (constrained && !containerSize) return { x: [], y: [] };

    const numPoints = 16;
    const xKeys = [];
    const yKeys = [];

    if (constrained && containerSize) {
      // Constrained mode: wander across the parent container with slight overflow
      const overflow = 0.15;
      const xMin = -size * overflow;
      const xMax = containerSize.width - size + size * overflow;
      const yMin = -size * overflow;
      const yMax = containerSize.height - size + size * overflow;

      for (let i = 0; i < numPoints; i++) {
        const baseSeed = seed + i * 53;
        xKeys.push(xMin + seededRandom(baseSeed) * (xMax - xMin));
        yKeys.push(yMin + seededRandom(baseSeed + 1000) * (yMax - yMin));
      }
    } else {
      // Viewport mode: wider range on desktop
      const xRange = isDesktop ? 90 : 60;
      const yRange = isDesktop ? 60 : 40;

      for (let i = 0; i < numPoints; i++) {
        const baseSeed = seed + i * 53;
        xKeys.push((seededRandom(baseSeed) - 0.5) * xRange);
        yKeys.push((seededRandom(baseSeed + 1000) - 0.5) * yRange);
      }
    }

    // Rotate arrays by a random offset so each mount starts at a different point
    const offset = Math.floor(startOffset.current * numPoints);
    const xRotated = [...xKeys.slice(offset), ...xKeys.slice(0, offset)];
    const yRotated = [...yKeys.slice(offset), ...yKeys.slice(0, offset)];

    // Close the loop back to start
    xRotated.push(xRotated[0]);
    yRotated.push(yRotated[0]);

    const unit = constrained ? "px" : "";

    return {
      x: xRotated.map((k) => `${k}${unit || "vw"}`),
      y: yRotated.map((k) => `${k}${unit || "vh"}`),
    };
  }, [seed, isDesktop, constrained, containerSize, size, mounted]);

  const duration = speed === "fast" ? 40 : 90;
  const hasKeyframes = keyframes.x.length > 0;

  if (!mounted) return null;

  return (
    <motion.div
      ref={circleRef}
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
      {...(hasKeyframes && {
        animate: {
          x: keyframes.x,
          y: keyframes.y,
        },
        transition: {
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        },
      })}
    />
  );
}

export default GradientCircle;
