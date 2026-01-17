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
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
          <motion.img
            src="/arrow-circle-up-right-svgrepo-com.svg"
            alt=""
            style={{
              width: "2rem",
              height: "2rem",
              opacity: 1,
              transform: "rotate(-10deg)",
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
              rotate: isHovered ? 10: -100,
              x: isHovered ? 20 : -20,
              y: isHovered ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        </div>
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
          transform: isHovered ? "translateY(0)" : "translateY(-40%)",
          opacity: isHovered ? 1 : 0,
          transition: {transform:{duration: 0.5, ease: "easeOut"}, opacity:{duration: 0.3, ease: "easeInOut"}},
          boxShadow: isHovered ? "rgba(0, 0, 0, 0.5)" : "transparent",
        }}
  
        >{extendedDescription}</motion.p>
    
      </motion.div>
    </motion.li>
  );
}

export default ProjectListItem;
