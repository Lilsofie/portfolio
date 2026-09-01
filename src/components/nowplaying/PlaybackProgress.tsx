"use client";

import { useEffect, useRef } from "react";

/* The scroll listener only requests a frame; the frame writes one CSS
   custom property. No React state is touched on scroll, so nothing
   re-renders. */
export default function PlaybackProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      // A page shorter than the viewport is fully "read".
      const pct = max <= 0 ? 1 : Math.min(1, Math.max(0, window.scrollY / max));
      el.style.setProperty("--progress", String(pct));
      el.setAttribute("aria-valuenow", String(Math.round(pct * 100)));
    };

    const onScroll = () => {
      if (frame) return; // coalesce bursts into one frame
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="np-progress"
      role="progressbar"
      aria-label="Page reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      /* Progress changes constantly while scrolling; announcing every step
         would flood a screen reader. The value stays queryable on demand. */
      aria-live="off"
    >
      <span className="np-progress__fill" aria-hidden="true" />
      <span className="np-progress__head" aria-hidden="true" />
    </div>
  );
}
