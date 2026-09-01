"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { onVinylStart, type VinylStart } from "../../lib/vinylTransition";

const NAVIGATE_AT = 620;

const TRAVEL_MS = 780;

const MAX_MS = 2000;

export default function VinylTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const [start, setStart] = useState<VinylStart | null>(null);
  const [stage, setStage] = useState<"travel" | "exit">("travel");

  const navigated = useRef(false);
  const originPath = useRef<string | null>(null);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const finish = useCallback(() => {
    clearTimers();
    setStart(null);
    setStage("travel");
    navigated.current = false;
    originPath.current = null;
  }, []);

  useEffect(() => {
    return onVinylStart((s) => {
      if (typeof window === "undefined") return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(s.href);
        return;
      }

      clearTimers();
      navigated.current = false;
      originPath.current = window.location.pathname;
      setStage("travel");
      setStart(s);

      timers.current.push(
        window.setTimeout(() => {
          if (navigated.current) return;
          navigated.current = true;
          router.push(s.href);
        }, NAVIGATE_AT),
        window.setTimeout(finish, MAX_MS)
      );
    });
  }, [router, finish]);

  // The new route has painted underneath — uncover it.
  useEffect(() => {
    if (!start || !originPath.current) return;
    if (pathname === originPath.current) return;

    const held = Math.max(0, TRAVEL_MS - NAVIGATE_AT);
    timers.current.push(
      window.setTimeout(() => setStage("exit"), held),
      window.setTimeout(finish, held + 520)
    );
  }, [pathname, start, finish]);

  useEffect(() => clearTimers, []);

  if (!start) return null;

  const { rect, label } = start;
  const vw = window.innerWidth || 1024;
  const vh = window.innerHeight || 768;
  const size = rect.width || 1;
  const cover = (Math.hypot(vw, vh) / size) * 1.35;

  return (
    <div
      className="vinyltx"
      data-stage={stage}
      aria-hidden="true"
      style={
        {
          left: `${rect.left}px`,
          top: `${rect.top}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          "--dx": `${vw / 2 - (rect.left + rect.width / 2)}px`,
          "--dy": `${vh / 2 - (rect.top + rect.height / 2)}px`,
          "--s": String(Math.max(8, cover)),
        } as React.CSSProperties
      }
    >
      <span className="vinyltx__disc">
        <span className="vinyl__label">{label}</span>
      </span>
    </div>
  );
}
