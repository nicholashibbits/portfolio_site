"use client";

import { useEffect } from "react";

export default function ViewportHeight() {
  useEffect(() => {
    const setHeight = () => {
      const h = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${h}px`);
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
