"use client";

import React from "react";
import GradientCircle from "./GradientCircle";

function Contact() {
  return (
    <div
      id="contact"
      className="background-container-3"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <GradientCircle
        size={80}
        speed="slow"
        id="contact-left"
        constrained
        zIndex={1}
        overflowFactor={-0.2}
      />
      <GradientCircle
        size={200}
        speed="fast"
        id="contact-right"
        constrained
        overflowFactor={-0.1}
      />
      <GradientCircle
        size={130}
        speed="slow"
        id="contact-center"
        constrained
        overflowFactor={-0.15}
      />
      <div
        className="container contact-content"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="contact-container flex flex-column relative">
          <ul className="more-info-links flex">
            <li className="link-group">
              <span className="link-group-title fs-600 fw-light">/CONTACT</span>
              <div className="fw-normal">
                <a
                  href="mailto:nicholas.hibbits@gmail.com"
                  data-cursor="expand"
                >
                  nicholas.hibbits@gmail.com
                </a>
              </div>
            </li>
            <li className="link-group">
              <span className="link-group-title fs-600 fw-light">/LINKS</span>
              <ul className="flex flex-column clr-neutral-100 fw-normal">
                <li>
                  <a
                    href="https://github.com/nicholashibbits"
                    data-cursor="expand"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nicholas-hibbits/"
                    data-cursor="expand"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/Nicholas_Hibbits_Resume_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="expand"
                  >
                    My Resume
                  </a>
                </li>
              </ul>
            </li>
            <li className="link-group">
              <span className="link-group-title fs-600 fw-light">/GO TO</span>
              <ul className="flex flex-column fw-normal">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("home")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-cursor="expand"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("work")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-cursor="expand"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
