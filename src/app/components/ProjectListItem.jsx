"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

function ProjectListItem({
  project,
  description,
  extendedDescription,
  index,
  hoveredIndex,
  onHoverChange,
}) {
  const isHovered = hoveredIndex === index;

  return (
    <motion.li
      className="project-item-content"
      style={
        isHovered
          ? {
              backdropFilter: "blur(3px)",
            }
          : {
              backdropFilter: "none",
            }
      }
    >
      <motion.div
        className="project-item-content-inner"
        onMouseEnter={() => onHoverChange(index)}
        onMouseLeave={() => onHoverChange(null)}
      >
        <h2 className="fs-700 card-header">{project}</h2>
        <p className="fs-400">{description}</p>
        <p className="fs-400 margin-block-start-12">{extendedDescription}</p>
      </motion.div>
    </motion.li>
  );
}

export default ProjectListItem;
