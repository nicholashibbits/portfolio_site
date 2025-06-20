"use client";

import React, { useState } from "react";

function ProjectListItem({ project, description, extendedDescription }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <div className="project-item-content flex flex-column">
        <h2
          className="fs-700"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {project}
        </h2>
        <p className="fs-400">{description}</p>
        {isHovered && (
          <p className="fs-400 margin-block-start-12">{extendedDescription}</p>
        )}
      </div>
    </li>
  );
}

export default ProjectListItem;
