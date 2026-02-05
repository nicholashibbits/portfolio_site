"use client";

import React, { useMemo } from "react";
import { motion } from "motion/react";

// Generate a blob path with organic, amorphous shape
function generateBlobPath(cx, cy, baseRadius, points, variance, seed) {
  const angleStep = (Math.PI * 2) / points;
  const pathPoints = [];

  // Generate points around the center with random variance
  for (let i = 0; i < points; i++) {
    const angle = i * angleStep;
    const randomFactor = seededRandom(seed + i) * 2 - 1;
    const radius = baseRadius + randomFactor * variance;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    pathPoints.push({ x, y });
  }

  // Create smooth bezier curve through all points
  let path = `M ${pathPoints[0].x} ${pathPoints[0].y}`;

  for (let i = 0; i < pathPoints.length; i++) {
    const p0 = pathPoints[(i - 1 + pathPoints.length) % pathPoints.length];
    const p1 = pathPoints[i];
    const p2 = pathPoints[(i + 1) % pathPoints.length];
    const p3 = pathPoints[(i + 2) % pathPoints.length];

    // Calculate control points for smooth curve
    const tension = 0.3;
    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;
    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }

  return path + " Z";
}

// Seeded random for consistent blob shapes
function seededRandom(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function AnimatedBlob({
  size = 540,
  position = "left",
  movementType = "float",
}) {
  const viewBoxSize = 540;
  const center = viewBoxSize / 2;
  const baseRadius = 220;
  const numPoints = 8;
  const variance = 60;

  // Generate unique gradient ID for each instance
  const gradientId = useMemo(
    () => `blob-gradient-${position}-${Math.random().toString(36).slice(2, 9)}`,
    [position],
  );

  // Generate multiple blob path variations for morphing animation
  const blobPaths = useMemo(() => {
    const seedVariants = {
      left: [1.2, 3.7, 6.1, 8.9, 11.3, 14.2, 17.5, 20.1, 23.8, 1.2],
      right: [2.5, 5.3, 7.8, 10.4, 13.6, 16.9, 19.2, 22.7, 25.1, 2.5],
      "hero-center": [4.1, 7.3, 10.8, 13.5, 16.2, 19.7, 22.4, 25.9, 28.3, 4.1],
      "hero-bottom": [3.3, 6.6, 9.9, 12.1, 15.4, 18.8, 21.2, 24.5, 27.7, 3.3],
      "contact-left": [1.2, 3.7, 6.1, 8.9, 11.3, 14.2, 17.5, 20.1, 23.8, 1.2],
      "contact-right": [2.5, 5.3, 7.8, 10.4, 13.6, 16.9, 19.2, 22.7, 25.1, 2.5],
      "contact-center": [
        5.2, 8.4, 11.6, 14.8, 17.3, 20.5, 23.7, 26.1, 29.4, 5.2,
      ],
      "contact-top": [2.8, 5.9, 9.1, 12.3, 15.6, 18.2, 21.8, 24.9, 27.2, 2.8],
    };
    const seeds = seedVariants[position] || seedVariants.left;

    return seeds.map((seed) =>
      generateBlobPath(center, center, baseRadius, numPoints, variance, seed),
    );
  }, [position, center, baseRadius, numPoints, variance]);

  const positionStyles = {
    left: {
      left: "-100px",
      top: "10%",
    },
    right: {
      right: "10%",
      top: "-50px",
    },
    "hero-center": {
      left: "30%",
      top: "40%",
    },
    "hero-bottom": {
      right: "25%",
      bottom: "-10%",
    },
    "contact-left": {
      left: "5%",
      top: "15%",
    },
    "contact-right": {
      right: "10%",
      top: "20%",
    },
    "contact-center": {
      left: "35%",
      top: "25%",
    },
    "contact-top": {
      right: "25%",
      top: "10%",
    },
  };

  // Random initial offsets for viewport position (generated once on mount)
  const randomViewportOffset = useMemo(() => {
    const isContact = position.startsWith("contact");
    // Smaller offset for contact section to keep blobs more visible
    const xRange = isContact ? 120 : 300;
    const yRange = isContact ? 80 : 200;
    return {
      x: Math.round((Math.random() - 0.5) * xRange),
      y: Math.round((Math.random() - 0.5) * yRange),
    };
  }, [position]);

  // Random start index for path morphing animation
  const randomPathStartIndex = useMemo(() => {
    return Math.floor(Math.random() * (blobPaths.length - 1));
  }, [blobPaths.length]);

  // Generate randomized traversal keyframes for organic movement
  const randomKeyframes = useMemo(() => {
    const numPoints = 12;
    const xKeys = [0];
    const yKeys = [0];
    const rotateKeys = [0];
    const scaleKeys = [1];
    const times = [0];

    for (let i = 1; i < numPoints; i++) {
      // Random values with some directional bias
      xKeys.push((Math.random() - 0.5) * 2);
      yKeys.push((Math.random() - 0.5) * 2);
      rotateKeys.push((Math.random() - 0.5) * 60);
      scaleKeys.push(0.94 + Math.random() * 0.12);
      times.push(i / numPoints);
    }

    // Close the loop
    xKeys.push(0);
    yKeys.push(0);
    rotateKeys.push(0);
    scaleKeys.push(1);
    times.push(1);

    return { xKeys, yKeys, rotateKeys, scaleKeys, times };
  }, []);

  // Traversal animation - blobs drift across the screen with randomized paths
  const positionAnimation = useMemo(() => {
    const isLeft =
      position === "left" ||
      position === "contact-left" ||
      position === "hero-center" ||
      position === "contact-center";
    const isContact = position.startsWith("contact");

    // Duration for the full traversal cycle (15% slower)
    const duration = isContact ? 94 : 76;

    // Traversal distances - more constrained for contact section
    const xTravel = isContact ? 280 : 500;
    const yTravel = isContact ? 180 : 380;

    // Apply travel distance to random keyframes
    const xValues = randomKeyframes.xKeys.map((k) =>
      isLeft ? k * xTravel : -k * xTravel,
    );
    const yValues = randomKeyframes.yKeys.map((k) =>
      isLeft ? k * yTravel : -k * yTravel,
    );

    return {
      x: xValues,
      y: yValues,
      rotate: randomKeyframes.rotateKeys,
      scale: randomKeyframes.scaleKeys,
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        times: randomKeyframes.times,
      },
    };
  }, [position, randomKeyframes]);

  // Path morphing animation for wiggly edges (starts at random position in sequence)
  const pathAnimation = useMemo(() => {
    const isContact = position.startsWith("contact");
    // Reorder paths to start from random index
    const reorderedPaths = [
      ...blobPaths.slice(randomPathStartIndex),
      ...blobPaths.slice(0, randomPathStartIndex + 1),
    ];
    return {
      d: reorderedPaths,
      transition: {
        duration: isContact ? 40 : 32,
        repeat: Infinity,
        ease: "easeInOut",
      },
    };
  }, [blobPaths, position, randomPathStartIndex]);

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
        marginLeft: randomViewportOffset.x,
        marginTop: randomViewportOffset.y,
        willChange: "transform",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "visible",
      }}
      animate={positionAnimation}
    >
      <defs>
        <linearGradient
          id={gradientId}
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
      <motion.path
        d={blobPaths[randomPathStartIndex]}
        fill={`url(#${gradientId})`}
        animate={pathAnimation}
        style={{ willChange: "d" }}
      />
    </motion.svg>
  );
}

export default AnimatedBlob;
