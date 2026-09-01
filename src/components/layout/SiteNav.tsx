"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { professionalSections, site } from "../../content";

const PRIMARY = [
  { href: "/", label: "Record Store", exact: true },
  { href: "/professional", label: "Professional", exact: false },
  { href: "/life", label: "Life", exact: false },
  { href: "/contact", label: "Contact", exact: true },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Close the panel when the route changes. Adjusting state during render is
  // React's documented pattern here; an effect would cause a cascading render.
  const [menuRoute, setMenuRoute] = useState(pathname);
  if (menuRoute !== pathname) {
    setMenuRoute(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname === href;
  const isWithin = (href: string, exact: boolean) =>
    !exact && pathname.startsWith(href + "/");

  const renderLink = (
    item: { href: string; label: string; exact: boolean },
    className: string
  ) => (
    <Link
      href={item.href}
      className={className}
      aria-current={isCurrent(item.href, item.exact) ? "page" : undefined}
      data-active={
        isCurrent(item.href, item.exact) || isWithin(item.href, item.exact)
          ? "true"
          : undefined
      }
    >
      {item.label}
    </Link>
  );

  const resumeLink = (className: string) => (
    <a
      className={className}
      href={site.links.resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );

  return (
    <div className="nav-root">
      <nav className="nav-primary" aria-label="Primary">
        <ul role="list">
          {PRIMARY.map((item) => (
            <li key={item.href}>{renderLink(item, "nav-link")}</li>
          ))}
          <li>{resumeLink("nav-link")}</li>
        </ul>
      </nav>

      <button
        ref={btnRef}
        type="button"
        className="nav-menu-btn"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((o) => !o)}
      >
        Menu
      </button>

      <div id="site-menu" className="nav-panel" hidden={!open}>
        <nav aria-label="Primary">
          <ul role="list">
            <li>{renderLink(PRIMARY[0], "nav-panel__link")}</li>

            <li>
              {renderLink(PRIMARY[1], "nav-panel__link")}
              <ul role="list" className="nav-panel__sub">
                {professionalSections.map((s) => (
                  <li key={s.href}>
                    {renderLink(
                      { href: s.href, label: s.title, exact: true },
                      "nav-panel__link nav-panel__link--sub"
                    )}
                  </li>
                ))}
              </ul>
            </li>

            <li>{renderLink(PRIMARY[2], "nav-panel__link")}</li>

            <li>{renderLink(PRIMARY[3], "nav-panel__link")}</li>
            <li>{resumeLink("nav-panel__link")}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
