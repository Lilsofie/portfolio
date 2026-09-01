import type { Experience } from "../../../content";
import MuseumLabel from "../MuseumLabel";
import ExhibitNarrative from "./ExhibitNarrative";
import ContributionNote from "./ContributionNote";
import FocusTagList from "./FocusTagList";
import ExhibitLink from "./ExhibitLink";
import Image from "next/image";

export default function ProfessionalExperienceExhibit({
  experience,
  exhibitNumber,
}: {
  experience: Experience;
  exhibitNumber: string;
}) {
  return (
    <article
      className="supporting-exhibit"
      aria-labelledby={`exh-${experience.id}`}
    >
      {experience.image && (
        <div className="exhibit-frame supporting-exhibit__artifact">
          <Image
            src={experience.image}
            alt={experience.imageAlt ?? ""}
            fill
            sizes="(min-width: 820px) 500px, 92vw"
            className="img-cover"
          />
        </div>
      )}
      <div className="exhibit-meta">
        <MuseumLabel>Exhibit {exhibitNumber}</MuseumLabel>
        <MuseumLabel className="exhibit-meta__dates">
          {experience.dateRange}
        </MuseumLabel>
      </div>
      <h3 id={`exh-${experience.id}`} className="serif exhibit-title exhibit-title--sm">
        {experience.company}
        <span className="exhibit-title__role">{experience.role}</span>
      </h3>
      {experience.location && (
        <p className="exhibit-location">{experience.location}</p>
      )}

      <ExhibitNarrative className="exhibit-note--sm">
        {experience.narrative}
      </ExhibitNarrative>

      {experience.contributions && (
        <div className="contribution-stack">
          {experience.contributions.map((c) => (
            <ContributionNote key={c.label} contribution={c} />
          ))}
        </div>
      )}

      {experience.tags && <FocusTagList tags={experience.tags} />}

      <ExhibitLink link={experience.link} />

      {experience.catalogueNotes && (
        <details className="exhibit-more">
          <summary className="exhibit-more__summary">View full exhibit</summary>
          <ul className="exhibit-more__list" role="list">
            {experience.catalogueNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </details>
      )}
    </article>
  );
}
