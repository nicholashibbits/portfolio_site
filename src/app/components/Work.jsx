"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const PROJECTS = [
  {
    name: "Veterans Affairs",
    description:
      "Developed pages in va.gov providing information on education benefits to veterans.",
    details:
      "Migrated legacy applications, digitized forms, and maintained code for the Department of Veteran's Affairs.",
    links: [],
  },
  {
    name: "Studio Zoomies",
    description: "Engineered a web-based CRM for gig photographers.",
    details:
      "Performed software development on a web-app offering customer relation services to gig photographers. Built using React.js and Supabase.",
    links: [],
  },
  {
    name: "NHIBIT Music",
    description: "Original tracks and mixes",
    details: "",
    links: [],
    wip: true,
  },
  {
    name: "Clarity Dose",
    description: "Interactive electronic music platform",
    details: "",
    links: [],
    wip: true,
  },
  {
    name: "Topo Tunes",
    description: "Discover current popular music from around the world",
    details: "",
    links: [],
    wip: true,
  },
  {
    name: "lil viz",
    description: "Custom sound visualizer",
    details: "",
    links: [],
    wip: true,
  },
];

const enterTransition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };
const exitTransition = { duration: 0.2, ease: [0.4, 0, 0.2, 1] };

function ProjectContent({ project }) {
  return (
    <motion.div
      className="work-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: enterTransition }}
      exit={{ opacity: 0, y: 10, transition: exitTransition }}
      style={{ willChange: "transform, opacity" }}
    >
      <p className="work-content-label">Description</p>
      <p className="work-content-description">
        {project.description}
        {project.details && (
          <>
            {" "}
            {project.details}
          </>
        )}
      </p>

      <p className="work-content-label">Links</p>
      {project.links?.length > 0 ? (
        <ul className="work-content-links">
          {project.links.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="work-content-description" style={{ opacity: 0.4 }}>
          —
        </p>
      )}
    </motion.div>
  );
}

function Work() {
  const [selected, setSelected] = useState(0);

  const toggle = (i) => setSelected((prev) => (prev === i ? null : i));

  return (
    <div id="work" className="diagonal background-container-2">
      <div className="work-content-wrapper">
      <div className="container work-container">
        <h1 className="work-heading">Projects</h1>

        {/* Mobile accordion */}
        <ul className="work-accordion">
          {PROJECTS.map((project, i) => (
            <li
              key={project.name}
              className={`work-accordion-item${project.wip ? " wip" : ""}`}
            >
              <button
                className="work-accordion-trigger"
                onClick={() => toggle(i)}
                aria-expanded={selected === i}
                disabled={!!project.wip}
              >
                <span>{project.name}</span>
                {project.wip && (
                  <span className="work-wip-tag">soon</span>
                )}
              </button>
              <AnimatePresence>
                {selected === i && !project.wip && (
                  <div className="work-accordion-content">
                    <ProjectContent key={project.name} project={project} />
                  </div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Desktop grid */}
        <div className="work-desktop">
          <ul className="work-desktop-list">
            {PROJECTS.map((project, i) => (
              <li
                key={project.name}
                className={`work-desktop-item${project.wip ? " wip" : ""}${selected === i ? " is-selected" : ""}`}
              >
                <button
                  className="work-desktop-trigger"
                  onClick={() => toggle(i)}
                  disabled={!!project.wip}
                >
                  {project.name}
                </button>
                {project.wip && (
                  <span className="work-wip-tag">soon</span>
                )}
              </li>
            ))}
          </ul>

          <div className="work-desktop-divider" />

          <div className="work-desktop-panel">
            <AnimatePresence mode="wait">
              {selected !== null && !PROJECTS[selected]?.wip && (
                <ProjectContent key={selected} project={PROJECTS[selected]} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Work;
