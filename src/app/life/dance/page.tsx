import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../../../components/Reveal";
import DanceEntryCard from "../../../components/life/DanceEntryCard";
import SupportingLink from "../../../components/museum/SupportingLink";
import { danceEntries } from "../../../content";
import type { SupportingLinkItem } from "../../../content";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Dance Floor",
  description: "Frame 02 — movement, performance, and community.",
};

const continueLinks: SupportingLinkItem[] = [
  { id: "life", label: "Life in Motion", href: "/life", note: "Side B" },
  { id: "travel", label: "Travel Log", href: "/life/travel", note: "Frame 01" },
  { id: "store", label: "Record Store", href: "/", note: "Front of house" },
];

export default function DancePage() {
  return (
    <main
      id="main"
      className="life" aria-labelledby="dance-title">
      <div className="life__inner">
        <Link href="/life" className="back-link back-link--inline">
          <span aria-hidden="true">←</span> Life in Motion
        </Link>

        <header className="life-header">
          <p className="museum-label">Frame 02</p>
          <h1 id="dance-title" className="serif life-header__title">
            Dance Floor
          </h1>
          <p className="life-header__intro">
            Movement, performance, and community.
          </p>
        </header>

        {/* The reel: asymmetric sequence of pieces, film-strip divided. */}
        <div className="dance-reel">
          {danceEntries.map((entry, i) => (
            <Reveal key={entry.id} className="dance-reel__item">
              <DanceEntryCard entry={entry} take={i + 1} />
            </Reveal>
          ))}
        </div>

        <nav className="supporting-row" aria-labelledby="continue-title">
          <h2 id="continue-title" className="museum-label">
            Keep the roll going
          </h2>
          <div className="supporting-row__links">
            {continueLinks.map((item) => (
              <SupportingLink key={item.id} item={item} />
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
