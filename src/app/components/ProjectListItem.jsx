"use client";

import React, { useState } from "react";
import * as motion from "motion/react-client";

function ProjectListItem({ project, description, extendedDescription }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <div
        className="project-item-content flex flex-column"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="fs-700">{project}</h2>
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
