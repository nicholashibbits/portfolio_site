"use client";

import React, { useState, useEffect, useRef } from "react";

function GradientSphere({ size = 540, initialVelocity = { x: 1.7, y: 1.5 } }) {
  const viewBoxSize = 540;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const velocityRef = useRef(initialVelocity);
  const positionRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      let { x, y } = positionRef.current;
      let { x: velX, y: velY } = velocityRef.current;

      const newX = x + velX;
      const newY = y + velY;

      // Get viewport dimensions
      const sphereRadius = size / 2;

      let newVelX = velX;
      let newVelY = velY;

      // Calculate the actual position in window coordinates
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const absX = centerX + newX;
      const absY = centerY + newY;

      const maxSpeed = 8;
      const minSpeed = 0.1;

      // Left boundary
      if (absX - sphereRadius < 0) {
        newVelX = Math.max(Math.abs(newVelX) * 0.8, minSpeed); // rightward, dampened
        positionRef.current.x = -centerX + sphereRadius + 1; // snap just inside
      }
      // Right boundary
      if (absX + sphereRadius > window.innerWidth) {
        newVelX = -Math.max(Math.abs(newVelX) * 0.8, minSpeed); // leftward, dampened
        positionRef.current.x = centerX - sphereRadius - 1; // snap just inside
      }
      // Top boundary
      if (absY - sphereRadius < 0) {
        newVelY = Math.max(Math.abs(newVelY) * 0.8, minSpeed); // downward, dampened
        positionRef.current.y = -centerY + sphereRadius + 1;
      }
      // Bottom boundary
      if (absY + sphereRadius > window.innerHeight) {
        newVelY = -Math.max(Math.abs(newVelY) * 0.8, minSpeed); // upward, dampened
        positionRef.current.y = centerY - sphereRadius - 1;
      }

      // Clamp to max speed
      newVelX = Math.max(-maxSpeed, Math.min(maxSpeed, newVelX));
      newVelY = Math.max(-maxSpeed, Math.min(maxSpeed, newVelY));

      // Gravity, air resistance, randomness
      newVelY += 0.003;
      newVelX *= 0.9998;
      newVelY *= 0.9998;
      newVelX += (Math.random() - 0.5) * 0.02;
      newVelY += (Math.random() - 0.5) * 0.02;

      // Update refs
      velocityRef.current = { x: newVelX, y: newVelY };
      positionRef.current = { x: newX, y: newY };

      // Only update state for rendering
      setPosition({ x: newX, y: newY });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size]);

  return (
    <svg
      ref={containerRef}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      fill="none"
      className="gradient-sphere"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        transition: "none",
        willChange: "transform",
        pointerEvents: "none",
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
    </svg>
  );
}

export default GradientSphere;
