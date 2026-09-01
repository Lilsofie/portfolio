"use client";

import { useEffect } from "react";

export default function StickyCompact() {
  useEffect(() => {
    const head = document.querySelector<HTMLElement>(".site-head");
    if (!head) return;
    let frame = 0;
    let last: boolean | null = null;

    const measure = () => {
      frame = 0;
      // Separate enter/leave thresholds: a single threshold can chatter when
      // a state change nudges scroll position back across it.
      const y = window.scrollY;
      const now = last ? y > 40 : y > 96;
      if (now === last) return; // only touch the DOM on a real change
      last = now;
      if (now) head.setAttribute("data-compact", "");
      else head.removeAttribute("data-compact");
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      head.removeAttribute("data-compact");
    };
  }, []);

  return null;
}
