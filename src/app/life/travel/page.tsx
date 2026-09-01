import type { Metadata } from "next";
import Link from "next/link";
import TripSection from "../../../components/life/TripSection";
import SupportingLink from "../../../components/museum/SupportingLink";
import { travelEntries } from "../../../content";
import type { SupportingLinkItem } from "../../../content";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Travel Log",
  description:
    "Frame 01 — a travel contact sheet: places, dates, and the photographs worth keeping.",
};

const continueLinks: SupportingLinkItem[] = [
  { id: "life", label: "Life in Motion", href: "/life", note: "Side B" },
  { id: "dance", label: "Dance", href: "/life/dance", note: "Frame 02" },
  { id: "store", label: "Record Store", href: "/", note: "Front of house" },
];

export default function TravelPage() {
  return (
    <main
      id="main"
      className="life" aria-labelledby="travel-title">
      <div className="life__inner">
        <Link href="/life" className="back-link back-link--inline">
          <span aria-hidden="true">←</span> Life in Motion
        </Link>

        <header className="life-header">
          <p className="museum-label">Frame 01</p>
          <h1 id="travel-title" className="serif life-header__title">
            Travel Log
          </h1>
          <p className="life-header__intro">
            A contact sheet of places — printed as the film comes back.
          </p>
        </header>

        <div className="trip-list">
          {travelEntries.map((trip) => (
            <TripSection key={trip.id} trip={trip} />
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
