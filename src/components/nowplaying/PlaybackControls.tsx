"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Track } from "../../content";

export default function PlaybackControls({
  prev,
  next,
  pageName,
}: {
  prev?: Track;
  next?: Track;

  pageName: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      setScrolled((was) => {
        const now = window.scrollY > 120;
        return now === was ? was : now; // re-render only on a real change
      });
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
    };
  }, []);

  const primaryAction = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

    if (scrolled) {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    const main = document.querySelector("main");
    const targets = main
      ? [
          ...main.querySelectorAll<HTMLElement>(
            "section, .collection, .trip, .exhibition, .project-exhibits, .polaroid-shelf, .dance-reel, .shelf"
          ),
        ]
      : [];
    const nextEl = targets.find(
      (el) => el.getBoundingClientRect().top > window.innerHeight * 0.4
    );
    if (nextEl) nextEl.scrollIntoView({ behavior, block: "start" });
    else window.scrollTo({ top: window.innerHeight * 0.85, behavior });
  };

  const step = (t: Track | undefined, dir: "prev" | "next") => {
    const glyph = dir === "prev" ? "‹" : "›";
    if (!t) {
      return (
        <button
          type="button"
          className="np-step"
          disabled
          aria-label={
            dir === "prev"
              ? "No previous section — this is the first track"
              : "No next section — this is the last track"
          }
          title={dir === "prev" ? "No previous section" : "No next section"}
        >
          <span aria-hidden="true">{glyph}</span>
        </button>
      );
    }
    return (
      <Link
        href={t.href}
        className="np-step"
        aria-label={`Go to ${dir === "prev" ? "previous" : "next"} section: ${t.name}`}
        title={`${dir === "prev" ? "Previous" : "Next"} — ${t.name}`}
      >
        <span aria-hidden="true">{glyph}</span>
      </Link>
    );
  };

  return (
    <div className="np-controls">
      {step(prev, "prev")}

      <button
        type="button"
        className="np-primary"
        onClick={primaryAction}
        data-mode={scrolled ? "top" : "begin"}
        aria-label={
          scrolled
            ? `Return to top of ${pageName} page`
            : `Begin ${pageName} page`
        }
        title={scrolled ? "Return to top" : "Begin page"}
      >
        <span className="np-primary__glyph" aria-hidden="true" />
      </button>

      {step(next, "next")}
    </div>
  );
}
