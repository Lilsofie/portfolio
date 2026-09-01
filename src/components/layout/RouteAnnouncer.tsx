"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function RouteAnnouncer() {
  const pathname = usePathname();
  const first = useRef(true);
  const liveRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const main = document.querySelector<HTMLElement>("main");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
      // Drop the tabstop again so Tab order stays natural afterwards.
      main.addEventListener("blur", () => main.removeAttribute("tabindex"), {
        once: true,
      });
    }
    // Let the title settle, then announce it.
    const t = window.setTimeout(() => {
      if (liveRef.current) liveRef.current.textContent = document.title;
    }, 120);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div
      ref={liveRef}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
}
