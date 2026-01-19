"use client";

import React from "react";
import GradientSphere from "./GradientSphere";

function Contact() {
  return (
    <div id="contact" className="background-container-3">
      <GradientSphere size={80} position="contact-left" movementType="water" />
      <GradientSphere
        size={200}
        position="contact-right"
        movementType="water"
      />
      <div className="container padding-block-96">
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
                <li><a href="https://github.com/nicholashibbits">Github</a></li>
                <li><a href="https://www.linkedin.com/in/nicholas-hibbits/">LinkedIn</a></li>
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
                <li><a href="#home">Home</a></li>
                <li><a href="#work">Work</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
