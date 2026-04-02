"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const PROJECTS = [
  {
    name: "Veterans Affairs",
    description:
      "Developed pages in va.gov providing information on education benefits to veterans.",
    details:
      "Migrated legacy applications, digitized forms, and maintained code for the Department of Veteran's Affairs.",
    longDescription:
      "Led frontend development on veteran-facing education products at va.gov as a React/Redux developer at GovCIO. Digitized over 15 VA education benefits forms and built the Licenses & Certifications search page used by veterans nationwide.",
    links: [
      {
        label: "VA Licenses & Certifications",
        url: "https://www.va.gov/education/gibill-comparison-tool/licenses-certifications-and-prep-courses",
      },
      {
        label: "GI Bill Comparison Tool",
        url: "https://www.va.gov/education/gi-bill-comparison-tool/schools-and-employers",
      },
    ],
  },
  {
    name: "Studio Zoomies",
    description: "Engineered a web-based CRM for gig photographers.",
    details:
      "Performed software development on a web-app offering customer relation services to gig photographers.",
    longDescription:
      "Built a full-featured CRM web application for gig photographers at JarvisWorks using React.js and Supabase. Delivered in-app SMS/email messaging via Twilio and a complete invoicing and payments system powered by Stripe.",
    links: [
      {
        label: "Studio Zoomies",
        url: "https://www.studiozoomies.com/home",
      },
    ],
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
      <p className="work-content-label">Overview{project.wip && " (in development)"}</p>
      <p className="work-content-description">
        {project.description}
        {project.details && (
          <>
            {" "}
            {project.details}
          </>
        )}
      </p>

      <div className="work-content-lower">
        <p className="work-content-label">Description</p>
        {project.longDescription ? (
          <p className="work-content-description">{project.longDescription}</p>
        ) : (
          <p className="work-content-description" style={{ opacity: 0.4 }}>—</p>
        )}

        <p className="work-content-label">Links</p>
        {project.links?.length > 0 ? (
          <ul className="work-content-links">
            {project.links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" data-cursor="expand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="work-content-description" style={{ opacity: 0.4 }}>—</p>
        )}
      </div>
    </motion.div>
  );
}

function Work() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(min-width: 45em)").matches) {
      setSelected(0);
    }
  }, []);

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
              className={`work-accordion-item${project.wip ? " wip" : ""}${selected === i ? " is-selected" : ""}`}
            >
              <button
                className="work-accordion-trigger"
                onClick={() => toggle(i)}
                aria-expanded={selected === i}
                data-cursor="expand"
              >
                <span>{project.name}</span>
              </button>
              <AnimatePresence>
                {selected === i && (
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
                  data-cursor="expand"
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="work-desktop-divider" />

          <div className="work-desktop-panel">
            <AnimatePresence mode="wait">
              {selected !== null && (
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
