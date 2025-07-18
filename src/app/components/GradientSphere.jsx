"use client";

import React, { useState, useEffect, useRef } from "react";

function GradientSphere({ size = 540, initialVelocity = { x: 1, y: 0.8 } }) {
  const viewBoxSize = 540;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(initialVelocity);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      setPosition((prevPos) => {
        const newX = prevPos.x + velocity.x;
        const newY = prevPos.y + velocity.y;

        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const sphereRadius = size / 2;

        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Bounce off horizontal boundaries with more dramatic speed changes
        if (
          newX <= -viewportWidth / 2 + sphereRadius ||
          newX >= viewportWidth / 2 - sphereRadius
        ) {
          newVelX = -velocity.x * 0.8; // Speed increase on horizontal bounce
          newVelY = velocity.y * 0.5; // Slight speed reduction on other axis
        }

        // Bounce off vertical boundaries with more dramatic speed changes
        if (
          newY <= -viewportHeight / 2 + sphereRadius ||
          newY >= viewportHeight / 2 - sphereRadius
        ) {
          newVelY = -velocity.y * 1.1; // Speed increase on vertical bounce
          newVelX = velocity.x * 0.9; // Slight speed reduction on other axis
        }

        // Add slight gravity effect (pulls downward)
        newVelY += 0.003;

        // Reduce air resistance for faster movement
        newVelX *= 0.9998;
        newVelY *= 0.9998;

        // Add some randomness to make it more organic
        newVelX += (Math.random() - 0.5) * 0.02;
        newVelY += (Math.random() - 0.5) * 0.02;

        // Clamp velocity to prevent excessive speeds but allow higher max speed
        const maxSpeed = 6;
        newVelX = Math.max(-maxSpeed, Math.min(maxSpeed, newVelX));
        newVelY = Math.max(-maxSpeed, Math.min(maxSpeed, newVelY));

        // Update velocity
        setVelocity({ x: newVelX, y: newVelY });

        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity, size]);

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
