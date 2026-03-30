"use client";

import React, { useEffect, useState } from "react";
import GradientCircle from "./GradientCircle";

function Contact() {
  const [extraCircles, setExtraCircles] = useState({
    showCenter: false,
    showTop: false,
  });

  useEffect(() => {
    setExtraCircles({
      showCenter: Math.random() > 0.5,
      showTop: Math.random() > 0.6,
    });
  }, []);

  return (
    <div
      id="contact"
      className="background-container-3"
      style={{ position: "relative" }}
    >
      <GradientCircle size={80} speed="slow" id="contact-left" constrained />
      <GradientCircle size={200} speed="fast" id="contact-right" constrained />
      {extraCircles.showCenter && (
        <GradientCircle
          size={150}
          speed="slow"
          id="contact-center"
          constrained
        />
      )}
      {extraCircles.showTop && (
        <GradientCircle size={100} speed="fast" id="contact-top" constrained />
      )}
      <div
        className="container padding-block-96"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="contact-container flex flex-column relative">
          <ul className="more-info-links flex">
            <li className="link-group">
              <span className="link-group-title fs-600 fw-light">/CONTACT</span>
              <div className="fw-normal">
                <a href="mailto:nicholas.hibbits@gmail.com">
                  nicholas.hibbits@gmail.com
                </a>
              </div>
            </li>
            <li className="link-group">
              <span className="link-group-title fs-600 fw-light">/LINKS</span>
              <ul className="flex flex-column clr-neutral-100 fw-normal">
                <li>
                  <a href="https://github.com/nicholashibbits">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/nicholas-hibbits/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/Nicholas_Hibbits_Resume_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
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
                  >
                    Work
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
