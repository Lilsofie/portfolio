"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { THEME_KEY } from "../../lib/theme";

const CROSSFADE_MS = 260;

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () =>
  document.documentElement.getAttribute("data-theme") === "dark";

const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const animTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (animTimer.current !== null) window.clearTimeout(animTimer.current);
    },
    []
  );

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

    root.setAttribute("data-theme-anim", "");
    if (animTimer.current !== null) window.clearTimeout(animTimer.current);
    animTimer.current = window.setTimeout(() => {
      root.removeAttribute("data-theme-anim");
      animTimer.current = null;
    }, CROSSFADE_MS);

    if (next === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable — the theme still applies for this visit */
    }
  }, []);

  return (
    <button
      type="button"
      className="themedock"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={
        isDark ? "Switch to light mode (Side A)" : "Switch to dark mode (Side B)"
      }
      title={isDark ? "Switch to light mode — Side A" : "Switch to dark mode — Side B"}
      data-side={isDark ? "b" : "a"}
    >
      <span className="themedock__disc" aria-hidden="true">
        <span className="themedock__label">{isDark ? "B" : "A"}</span>
      </span>
      <span className="themedock__word">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
