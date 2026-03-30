import React from "react";

import ProjectListItem from "@/app/components/ProjectListItem";

function Work() {
  return (
    <div id="work" className="diagonal background-container-2">
      <div className="work-content-wrapper">
        <div className="container work-container">
          <div className="padding-block-128">
            <h1 className="padding-block-end-16">Projects</h1>

            <div className="project-wrapper">
              <ul className="project-list">
                <ProjectListItem
                  project="Veterans Affairs"
                  description="Developed pages in va.gov providing information on education benefits to veterans."
                  extendedDescription="Migrated legacy applications, digitized forms, and maintained code for the Department of Veteran's Affairs."
                />
                <ProjectListItem
                  project="Studio Zoomies"
                  description="Engineered a web-based CRM for gig photographers."
                  extendedDescription="Performed software development on a web-app offering customer relation services to gig photographers. Built using React.js and Supabase."
                />
                <ProjectListItem
                  project="NHIBIT Music"
                  wip={true}
                  description="original tracks and mixes "
                  extendedDescription=""
                />
                <ProjectListItem
                  project="Clarity Dose"
                  wip="true"
                  description="Interactive electronic music platform"
                  extendedDescription=""
                />
                <ProjectListItem
                  project="Topo Tunes"
                  wip={true}
                  description="Discover current popular music from around the world "
                  extendedDescription=""
                />
                <ProjectListItem
                  project="lil viz"
                  wip={true}
                  description="custom sound visualizer"
                  extendedDescription=""
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
