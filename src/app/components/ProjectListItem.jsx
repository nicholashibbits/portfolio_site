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
        animate={{
          maxHeight: isHovered ? "300px" : "140px",
          boxShadow: isHovered 
            ? "-18px 17px 0px 0px rgba(0,0,0,1)"
            : "none",
        }}
        transition={{
          maxHeight: { duration: 0.3 },
          boxShadow: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <motion.h2 
          className="fs-700 card-header"
          style={{
            transformOrigin: "left center",
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >{project}</motion.h2>
        <motion.p 
          className="fs-400"
          style={{
            transformOrigin: "left center",
          }}
          animate={{
            scale: isHovered ? 1.05 : 1,
            paddingRight: isHovered ? "10px" : "0",
          }}
          transition={{
            scale: {

              duration: 0.3,
              ease: "easeInOut",
            },
            paddingRight: {
              duration: 0,
            }
          }}
        >{description}</motion.p>
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
