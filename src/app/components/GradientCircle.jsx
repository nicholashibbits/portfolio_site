"use client";

import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

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
  scrollFollow = false,
  xMin,
  xMax,
  yMin,
  yMax,
  zIndex = 1,
  overflowFactor = 0.15,
}) {
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [containerSize, setContainerSize] = useState(null);
  // Lock viewport dimensions at mount — only update on orientation change.
  // This prevents vw/vh keyframe targets from jumping when IAB toolbars appear.
  const [lockedDimensions, setLockedDimensions] = useState(null);
  const circleRef = useRef(null);
  const startOffset = useRef(0);

  // Tracks real scroll position (updates immediately on scroll)
  const currentScrollY = useMotionValue(0);
  // Tracks the "settled" scroll position (updates with a delay)
  const scrollOffsetY = useMotionValue(0);

  useEffect(() => {
    startOffset.current = Math.random();

    setLockedDimensions({ width: window.innerWidth, height: window.innerHeight });

    const mql = window.matchMedia("(min-width: 65em)");
    setIsDesktop(mql.matches);
    setMounted(true);

    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);

    const handleOrientationChange = () => {
      setTimeout(() => {
        setLockedDimensions({ width: window.innerWidth, height: window.innerHeight });
      }, 100);
    };
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      mql.removeEventListener("change", handler);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    if (!scrollFollow) return;

    let timer;
    const handleScroll = () => {
      currentScrollY.set(window.scrollY);
      clearTimeout(timer);
      // After viewport has been still for ~.1s, drift the circles into view
      timer = setTimeout(() => {
        animate(scrollOffsetY, window.scrollY, {
          type: "spring",
          stiffness: 10,
          damping: 25,
          mass: 1,
        });
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [scrollFollow, currentScrollY, scrollOffsetY]);

  // wrapperY makes the fixed wrapper behave like position:absolute initially.
  // When offset === current (caught up), wrapperY === 0 → circles back in viewport.
  const wrapperY = useTransform(
    () => scrollOffsetY.get() - currentScrollY.get(),
  );

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
      const overflow = overflowFactor;
      const cxMin = -size * overflow;
      const cxMax = containerSize.width - size + size * overflow;
      const cyMin = -size * overflow;
      const cyMax = containerSize.height - size + size * overflow;

      for (let i = 0; i < numPoints; i++) {
        const baseSeed = seed + i * 53;
        xKeys.push(cxMin + seededRandom(baseSeed) * (cxMax - cxMin));
        yKeys.push(cyMin + seededRandom(baseSeed + 1000) * (cyMax - cyMin));
      }
    } else {
      // Viewport mode: range in vw/vh percentages, converted to locked px at mount
      const xLo = xMin ?? (isDesktop ? -45 : -30);
      const xHi = xMax ?? (isDesktop ? 45 : 30);
      const yLo = yMin ?? (isDesktop ? -30 : -20);
      const yHi = yMax ?? (isDesktop ? 30 : 20);

      for (let i = 0; i < numPoints; i++) {
        const baseSeed = seed + i * 53;
        xKeys.push(xLo + seededRandom(baseSeed) * (xHi - xLo));
        yKeys.push(yLo + seededRandom(baseSeed + 1000) * (yHi - yLo));
      }
    }

    // Rotate arrays by a random offset so each mount starts at a different point.
    // For viewport mode, restrict candidates to positions within the visible viewport
    // so circles are always on-screen on first render.
    let offset;
    if (constrained) {
      offset = Math.floor(startOffset.current * numPoints);
    } else {
      const inViewIndices = xKeys.reduce((acc, x, i) => {
        if (x >= 0 && x <= 80 && yKeys[i] >= 0 && yKeys[i] <= 80) acc.push(i);
        return acc;
      }, []);
      const candidates = inViewIndices.length > 0 ? inViewIndices : xKeys.map((_, i) => i);
      offset = candidates[Math.floor(startOffset.current * candidates.length)];
    }
    const xRotated = [...xKeys.slice(offset), ...xKeys.slice(0, offset)];
    const yRotated = [...yKeys.slice(offset), ...yKeys.slice(0, offset)];

    // Close the loop back to start
    xRotated.push(xRotated[0]);
    yRotated.push(yRotated[0]);

    if (constrained) {
      return {
        x: xRotated.map((k) => `${k}px`),
        y: yRotated.map((k) => `${k}px`),
      };
    }

    // Convert vw/vh percentages to fixed pixels using locked dimensions.
    // This prevents keyframe targets from jumping when browser UI chrome
    // (e.g. Instagram IAB toolbar) changes the viewport size mid-scroll.
    const vwBase = lockedDimensions?.width ?? window.innerWidth;
    const vhBase = lockedDimensions?.height ?? window.innerHeight;
    return {
      x: xRotated.map((k) => `${(k / 100) * vwBase}px`),
      y: yRotated.map((k) => `${(k / 100) * vhBase}px`),
    };
  }, [
    seed,
    isDesktop,
    constrained,
    containerSize,
    size,
    mounted,
    xMin,
    xMax,
    yMin,
    yMax,
    overflowFactor,
    lockedDimensions,
  ]);

  const duration = speed === "fast" ? 40 : 90;
  const hasKeyframes = keyframes.x.length > 0;

  if (!mounted) return null;

  const circleMotionProps = hasKeyframes
    ? {
        animate: { x: keyframes.x, y: keyframes.y },
        transition: { duration, repeat: Infinity, ease: "easeInOut" },
      }
    : {};

  if (scrollFollow) {
    return (
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          y: wrapperY,
          pointerEvents: "none",
          zIndex,
          willChange: "transform",
        }}
      >
        <motion.div
          ref={circleRef}
          className="gradient-circle"
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: `linear-gradient(135deg, #001236 0%, #340242 10.5%, var(--sphere-primary, #DB761D) 100%)`,
            position: "absolute",
            pointerEvents: "none",
            willChange: "transform",
          }}
          {...circleMotionProps}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={circleRef}
      className="gradient-circle"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, #001236 0%, #340242 10.5%, var(--sphere-primary, #DB761D) 100%)`,
        position: "absolute",
        pointerEvents: "none",
        zIndex,
        willChange: "transform",
      }}
      {...circleMotionProps}
    />
  );
}

export default GradientCircle;
