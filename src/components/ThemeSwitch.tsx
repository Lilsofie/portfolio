"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");
}

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial: Theme = stored === "dark" ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const checked = theme === "dark";

  const toggle = () => {
    const next: Theme = checked ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <div className="theme-toggle">
      <span className="theme-label" data-active={checked ? "true" : "false"}>
        DARK
      </span>

      <button
        type="button"
        className="theme-switch"
        role="switch"
        aria-checked={checked}
        aria-label="Toggle theme"
        onClick={toggle}
      >
        <span className="theme-thumb" aria-hidden="true" />
      </button>

      <span className="theme-label" data-active={!checked ? "true" : "false"}>
        LIGHT
      </span>
    </div>
  );
}
