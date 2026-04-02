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
      const angleOffset =
        id === "contact"
          ? Math.tan((5 * Math.PI) / 180) * (window.innerWidth / 2)
          : 0;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY + angleOffset,
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
            <a href="#about" onClick={(e) => handleAnchorClick(e, "about")} data-cursor="expand">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="#work" onClick={(e) => handleAnchorClick(e, "work")} data-cursor="expand">
              PROJECTS
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => handleAnchorClick(e, "contact")} data-cursor="expand">
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/Nicholas_Hibbits_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              data-cursor="expand"
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
