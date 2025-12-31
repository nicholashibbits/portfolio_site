import React from "react";

function Contact() {
  return (
    <div id="contact" className="background-container-3">
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
              <div className="flex flex-column clr-neutral-100 fw-normal">
                <a href="">Github</a>
                <a href="">LinkedIn</a>
                <a
                  href="/Nicholas_Hibbits_AV_Tech_Resume_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
              </div>
            </li>
            <li className="link-group">
              <span className="link-group-title fs-600 fw-light">/GO TO</span>
              <div className="flex flex-column fw-normal">
                <a href="#home">Home</a>
                <a href="#work">Work</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
