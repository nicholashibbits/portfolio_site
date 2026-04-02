"use client";

import { useEffect } from "react";

export default function ViewportHeight() {
  useEffect(() => {
    const setHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };

    const handleOrientationChange = () => {
      setTimeout(setHeight, 100);
    };

    setHeight();
    window.addEventListener("orientationchange", handleOrientationChange);
    return () =>
      window.removeEventListener("orientationchange", handleOrientationChange);
  }, []);

  return null;
}
