"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion} from "motion/react";

function ProjectListItem({
  project,
  description,
  extendedDescription,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="project-item-content"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        isHovered
          ? {
            backdropFilter: "blur(2px)",
          }
          : {
            backdropFilter: "none",
          }
        }
        >
      <motion.div
        className="project-item-content-inner"
        animate={({
          maxHeight: isHovered ? "200px" : "140px",
        })}

      >
        <h2 className="fs-700 card-header">{project}</h2>
        <p className="fs-400">{description}</p>
        <motion.p className="fs-400 margin-block-start-12 extended-description"
        animate={{
          transform: isHovered ? "translateY(0)" : "translateY(-100%)",
          opacity: isHovered ? 1 : 0,
          transition: {transform:{duration: 0.3}, opacity:{duration: 0.5}},
          boxShadow: isHovered ? "rgba(0, 0, 0, 0.5)" : "transparent",
        }}
  
        >{extendedDescription}</motion.p>
    
      </motion.div>
    </motion.li>
  );
}

export default ProjectListItem;
