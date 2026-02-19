import React from "react";

function ProjectListItem({ project, description, extendedDescription, wip = false }) {
  return (
    <li className={`project-item-content${wip ? " wip" : ""}`}>
      <div className="project-item-content-inner">
        <div className="project-item-header">
          <h2 className="fs-700 card-header">{project}</h2>
          <img
            className="project-arrow"
            src="/arrow-circle-up-right-svgrepo-com.svg"
            alt=""
          />
        </div>
        <p className="fs-400 project-description">{description}</p>
        <p className="fs-400 margin-block-start-12 extended-description">
          {extendedDescription}
        </p>
      </div>
    </li>
  );
}

export default ProjectListItem;
