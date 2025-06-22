import React from "react";

import BackgroundContainer from "@/app/components/BackgroundContainer";
import Image from "next/image";

function Contact() {
  return (
    <BackgroundContainer color="primary" shade="500" textColor="light">
      <div className="container">
        <Image
          priority
          src="/abstractLines2.svg"
          alt="abstract lines"
          width={1512}
          height={1113}
        ></Image>
        <div className="contact-container flex flex-column ">
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
          <h1 className="h1 footer-call-to-action fs-1000 padding-block-64">
            Let's build something
          </h1>
        </div>
      </div>
    </BackgroundContainer>
  );
}

export default Contact;
