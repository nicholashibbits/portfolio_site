"use client";

import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        data-cursor="expand"
      >
        menu
      </button>
      <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
        <ul className="nav-list container flex flex-column">
          <li className="nav-item">
            <a href="#about" onClick={(e) => handleAnchorClick(e, "about")}>
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="#work" onClick={(e) => handleAnchorClick(e, "work")}>
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => handleAnchorClick(e, "contact")}>
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/Nicholas_Hibbits_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
