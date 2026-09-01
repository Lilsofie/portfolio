import type { Experience } from "../../../content";
import ExhibitNarrative from "./ExhibitNarrative";
import FocusTagList from "./FocusTagList";

export default function CommunityExperiencePlaque({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="plaque-entry" aria-labelledby={`exh-${experience.id}`}>
      <h3 id={`exh-${experience.id}`} className="plaque-entry__heading">
        <span className="serif plaque-entry__org">{experience.company}</span>
        <span className="plaque-entry__roleline">
          {experience.role} · {experience.dateRange}
        </span>
      </h3>

      <ExhibitNarrative className="exhibit-note--plaque">
        {experience.narrative}
      </ExhibitNarrative>

      {experience.tags && (
        <FocusTagList tags={experience.tags} label="Transferable skills" />
      )}
    </article>
  );
}
