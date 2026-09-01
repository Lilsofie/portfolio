import type { Project } from "../../../content";
import MuseumLabel from "../MuseumLabel";
import ExhibitNarrative from "../experience/ExhibitNarrative";
import ContributionNote from "../experience/ContributionNote";
import FocusTagList from "../experience/FocusTagList";
import ProjectThumb from "./ProjectThumb";
import ProjectLinks from "./ProjectLinks";

export default function ProjectExhibit({
  project,
  exhibitNumber,
}: {
  project: Project;
  exhibitNumber: string;
}) {
  return (
    <article
      id={project.id}
      className="project-exhibit"
      aria-labelledby={`proj-${project.id}`}
    >
      <ProjectThumb project={project} />

      <div className="exhibit-meta">
        <MuseumLabel>Exhibit {exhibitNumber}</MuseumLabel>
        <MuseumLabel className="exhibit-meta__dates">{project.year}</MuseumLabel>
      </div>
      <h2
        id={`proj-${project.id}`}
        className="serif exhibit-title exhibit-title--sm"
      >
        {project.title}
        {project.type && (
          <span className="exhibit-title__role">{project.type}</span>
        )}
      </h2>
      {project.role && <p className="exhibit-location">{project.role}</p>}

      <ExhibitNarrative className="exhibit-note--sm">
        {project.description}
      </ExhibitNarrative>

      {(project.challenge || project.outcome) && (
        <div className="contribution-stack">
          {project.challenge && (
            <ContributionNote
              headingLevel={3}
                contribution={{ label: "Challenge", text: project.challenge }}
            />
          )}
          {project.outcome && (
            <ContributionNote
              headingLevel={3}
                contribution={{ label: "Status", text: project.outcome }}
            />
          )}
        </div>
      )}

      <FocusTagList tags={project.tags} label="Technical stack" />
      <ProjectLinks project={project} />
    </article>
  );
}
