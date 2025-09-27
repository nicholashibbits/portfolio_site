"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function ProjectListItem({ project, description, extendedDescription }) {
  const [isHovered, setIsHovered] = useState(false);
  const [h2Width, setH2Width] = useState(0);
  const h2Ref = useRef(null);
  const lineWidth = useMotionValue(0);
  const animatedLineWidth = useSpring(lineWidth, {
    stiffness: 300,
    damping: 30,
  });
  const lineWidthPx = useTransform(animatedLineWidth, (value) => `${value}px`);

  useEffect(() => {
    if (h2Ref.current) {
      const width = h2Ref.current.offsetWidth;
      setH2Width(width);
    }
  }, [project]);

  useEffect(() => {
    lineWidth.set(isHovered ? h2Width : 0);
  }, [isHovered, h2Width, lineWidth]);
  return (
    <li>
      <div
        className="project-item-content flex flex-column"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2
          ref={h2Ref}
          className="fs-700"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          {project}
        </h2>
        <motion.div
          className="project-line"
          style={{
            width: lineWidthPx,
            height: "2px",
            backgroundColor: "currentColor",
            willChange: "transform",
          }}
        />
        <p className="fs-400">{description}</p>
        <motion.div
          className="extended-description-container"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{ overflow: "hidden" }}
        >
          <p className="fs-400 margin-block-start-12">{extendedDescription}</p>
        </motion.div>
      </div>
    </li>
  );
}

export default ProjectListItem;
