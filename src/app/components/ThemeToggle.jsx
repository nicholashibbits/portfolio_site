"use client";

import { useState, useCallback } from "react";

const themes = [
  {
    name: "orange",
    primary: "#db761d",
    gradient1: "#e8913a",
    gradient2: "#f5b74c",
    sphere: "#DB761D",
  },
  {
    name: "scarlett",
    primary: "#c41e3a",
    gradient1: "#d44055",
    gradient2: "#e86b7f",
    sphere: "#c41e3a",
  },
  {
    name: "green",
    primary: "#2d8a4e",
    gradient1: "#3da863",
    gradient2: "#5cc47a",
    sphere: "#2d8a4e",
  },
];

export default function ThemeToggle() {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = useCallback(() => {
    const nextIndex = (themeIndex + 1) % themes.length;
    const theme = themes[nextIndex];

    document.documentElement.style.setProperty("--clr-primary", theme.primary);
    document.documentElement.style.setProperty(
      "--gradient-stop-1",
      theme.gradient1,
    );
    document.documentElement.style.setProperty(
      "--gradient-stop-2",
      theme.gradient2,
    );
    document.documentElement.style.setProperty(
      "--sphere-primary",
      theme.sphere,
    );

    setThemeIndex(nextIndex);
  }, [themeIndex]);

  return (
    <button className="theme-toggle" onClick={cycleTheme} data-cursor="expand">
      Change Theme
    </button>
  );
}
