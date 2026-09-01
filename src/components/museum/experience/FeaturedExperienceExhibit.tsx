import type { Experience } from "../../../content";
import MuseumLabel from "../MuseumLabel";
import ExhibitNarrative from "./ExhibitNarrative";
import ContributionNote from "./ContributionNote";
import FocusTagList from "./FocusTagList";
import ExhibitLink from "./ExhibitLink";
import ExhibitPhoto from "../../cover/ExhibitPhoto";

export default function FeaturedExperienceExhibit({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="featured-exhibit" aria-labelledby={`exh-${experience.id}`}>
      <p className="featured-exhibit__flag museum-label">Featured Exhibit</p>

      <div className="featured-exhibit__body">
        <div className="featured-exhibit__artifact">
          {experience.image ? (
            <div className="exhibit-frame">
              <ExhibitPhoto
                src={experience.image}
                alt={experience.imageAlt ?? ""}
                sizes="(min-width: 900px) 460px, 92vw"
                priority
              />
            </div>
          ) : (
            /* CSS-composed archive artifact — decorative */
            <div className="exhibit-frame" aria-hidden="true">
              <div className="artwork artwork--archive">
                <span className="rec rec--a">
                  <i /> <i /> <i />
                </span>
                <span className="rec rec--b">
                  <i /> <i /> <i />
                </span>
                <span className="rec rec--c">
                  <i /> <i />
                </span>
                <span className="stamp" />
              </div>
            </div>
          )}
        </div>

        <div className="featured-exhibit__content">
          <div className="exhibit-meta">
            <MuseumLabel>Exhibit A-01</MuseumLabel>
            <MuseumLabel className="exhibit-meta__dates">
              {experience.dateRange}
            </MuseumLabel>
          </div>
          <h3 id={`exh-${experience.id}`} className="serif exhibit-title">
            {experience.company}
            <span className="exhibit-title__role">{experience.role}</span>
          </h3>
          {experience.location && (
            <p className="exhibit-location">{experience.location}</p>
          )}

          <ExhibitNarrative>{experience.narrative}</ExhibitNarrative>

          {experience.contributions && (
            <div className="contribution-row">
              {experience.contributions.map((c) => (
                <ContributionNote key={c.label} contribution={c} />
              ))}
            </div>
          )}

          {experience.tags && <FocusTagList tags={experience.tags} />}

          <ExhibitLink link={experience.link} />

          {experience.catalogueNotes && (
            <details className="exhibit-more">
              <summary className="exhibit-more__summary">
                View full exhibit
              </summary>
              <ul className="exhibit-more__list" role="list">
                {experience.catalogueNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
    </article>
  );
}
