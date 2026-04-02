"use client";

import { useEffect } from "react";

export default function ViewportHeight() {
  useEffect(() => {
    let timeout;

    const setVh = () => {
      document.documentElement.style.setProperty(
        "--real-vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(setVh, 100);
    };

    setVh();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}
