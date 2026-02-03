import React from "react";

import ProjectListItem from "@/app/components/ProjectListItem";

function Work() {
  return (
    <div id="work" className="diagonal background-container-2">
      <div className="work-content-wrapper">
        <div className="container work-container">
          <div className="padding-block-128">
            <h1 className="padding-block-end-16">Work</h1>

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
                  project="Clarity Dose"
                  description="An online platform featuring a live radio show, music label, blog, and merch shop."
                  extendedDescription="Crafted a full-stack application to connect artists and share my favorite music. Built with Next.js."
                />
                <ProjectListItem
                  project="NHIBIT Music"
                  description="Site showcasing my own original electronic music."
                  extendedDescription="Built a static site to promote my music, generate gigs, and faciliate connections. Built with Framer."
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
