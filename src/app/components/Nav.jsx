"use client";

import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        menu
      </button>
      <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
        <ul className="nav-list container flex flex-column">
          <li className="nav-item">
            <a href="#about" onClick={() => setIsOpen(false)}>
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="#work" onClick={() => setIsOpen(false)}>
              WORK
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a href="/Nicholas_Hibbits_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
