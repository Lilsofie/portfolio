"use client";

import { useLayoutEffect, useState } from "react";

const DONE_MS = 1300;

export default function ArrivalGate({ world }: { world: string }) {
  const [arrived] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const v = sessionStorage.getItem("arrival-world");
      if (v) sessionStorage.removeItem("arrival-world");
      const reduce = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      // Reduced motion: navigate near-instantly with no choreography.
      return v === world && !reduce;
    } catch {
      return false;
    }
  });

  useLayoutEffect(() => {
    if (!arrived) return;
    const root = document.documentElement;
    root.setAttribute("data-arrival", world);
    const t = window.setTimeout(
      () => root.removeAttribute("data-arrival"),
      DONE_MS
    );
    return () => {
      window.clearTimeout(t);
      root.removeAttribute("data-arrival");
    };
  }, [arrived, world]);

  return null;
}
