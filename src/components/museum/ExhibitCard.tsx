import Link from "next/link";
import type { ProfessionalSection } from "../../content";
import ExhibitFrame from "./ExhibitFrame";
import MuseumLabel from "./MuseumLabel";

export default function ExhibitCard({
  section,
}: {
  section: ProfessionalSection;
}) {
  return (
    <Link
      href={section.href}
      className="exhibit"
      data-motif={section.motif}
      /* Concise name; without it the whole plaque is read out as one run-on
         string ("Room 012021 — PresentExperience..."). */
      aria-label={`Room ${section.roomNumber}: ${section.title}`}
    >
      <ExhibitFrame section={section} />

      <div className="plaque">
        <div className="plaque__meta">
          <MuseumLabel>Room {section.roomNumber}</MuseumLabel>
          {section.dateRange && (
            <MuseumLabel className="plaque__dates">
              {section.dateRange}
            </MuseumLabel>
          )}
        </div>
        <h2 className="serif plaque__title">{section.title}</h2>
        <p className="plaque__desc">{section.description}</p>
        <span className="plaque__action">
          {section.actionLabel ?? "Enter Room"}
          <span aria-hidden="true"> →</span>
        </span>
      </div>
    </Link>
  );
}
