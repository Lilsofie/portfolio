import Link from "next/link";
import type { Experience } from "../../../content";

export default function ExhibitLink({
  link,
}: {
  link: Experience["link"];
}) {
  if (!link) return null;

  if (link.external) {
    return (
      <a
        className="exhibit-link"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label} <span aria-hidden="true">→</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link className="exhibit-link" href={link.href}>
      {link.label} <span aria-hidden="true">→</span>
    </Link>
  );
}
