import React from "react";

import BackgroundContainer from "@/app/components/BackgroundContainer";
import Image from "next/image";

function Contact() {
  return (
    <BackgroundContainer color="neutral" shade="900" textColor="light">
      <div className="container">
        <div className="contact-container flex flex-column relative">
          <ul className="more-info-links flex padding-block-64">
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
              <div className="flex flex-column clr-neutral-100 fw-normal">
                <a href="">Github</a>
                <a href="">LinkedIn</a>
                <a href="">My Resume</a>
              </div>
            </li>
            <li className="link-group">
              <span className="link-group-title fs-600 fw-light">/GO TO</span>
              <div className="flex flex-column fw-normal">
                <a href="" className="">
                  Home
                </a>
                <a href="" className="">
                  Work
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default Contact;
