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
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
  const [h2Width, setH2Width] = useState(0);
  const h2Ref = useRef(null);
  const lineWidth = useMotionValue(0);

  useEffect(() => {
    if (h2Ref.current) {
      const width = h2Ref.current.offsetWidth;
      setH2Width(width);
    }
  }, [project]);

  useEffect(() => {
    // Animate line with double duration (twice as slow)
    animate(lineWidth, isHovered ? h2Width : 0, {
      duration: 0.6, // Doubled from typical 0.3s
      ease: "easeInOut",
    });
  }, [isHovered, h2Width, lineWidth]);

  const lineWidthPx = useTransform(lineWidth, (value) => `${value * 1.3}px`);

  return (
    <motion.li
      animate={{
        filter: isOtherHovered
          ? "blur(3.5px) brightness(0.5)"
          : "blur(0px) brightness(1)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="project-item-content flex flex-column"
        onMouseEnter={() => onHoverChange(index)}
        onMouseLeave={() => onHoverChange(null)}
        animate={{
          borderWidth: isHovered ? "1px" : "0px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        style={{
          borderStyle: "solid",
          borderColor: "currentColor",
          borderRadius: "10px",
          padding: "15px",
          margin: "-12px",
        }}
      >
        <motion.h2
          ref={h2Ref}
          className="fs-700"
          animate={{
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            willChange: "transform",
            transformOrigin: "left",
          }}
        >
          {project}
        </motion.h2>
        <motion.div
          className="project-line"
          style={{
            width: lineWidthPx,
            height: "2px",
            backgroundColor: "currentColor",
            willChange: "transform",
            marginBlock: 5,
            paddingBlock: 2,
          }}
        />
        <motion.p
          className="fs-400"
          animate={{
            scale: isHovered ? 1.3 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{
            willChange: "transform",
            transformOrigin: "left",
          }}
        >
          {description}
        </motion.p>
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
      </motion.div>
    </motion.li>
  );
}

export default ProjectListItem;
