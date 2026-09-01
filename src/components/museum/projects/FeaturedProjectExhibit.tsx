import type { Project } from "../../../content";
import MuseumLabel from "../MuseumLabel";
import ExhibitNarrative from "../experience/ExhibitNarrative";
import ContributionNote from "../experience/ContributionNote";
import FocusTagList from "../experience/FocusTagList";
import ProjectThumb from "./ProjectThumb";
import ProjectLinks from "./ProjectLinks";

export default function FeaturedProjectExhibit({
  project,
}: {
  project: Project;
}) {
  return (
    <article
      id={project.id}
      className="featured-exhibit project-featured"
      aria-labelledby={`proj-${project.id}`}
    >
      <p className="featured-exhibit__flag museum-label">Featured Exhibit</p>

      <div className="featured-exhibit__body">
        <div className="featured-exhibit__artifact">
          <ProjectThumb project={project} />
        </div>

        <div>
          <div className="exhibit-meta">
            <MuseumLabel>Exhibit 01</MuseumLabel>
            <MuseumLabel className="exhibit-meta__dates">
              {project.year}
            </MuseumLabel>
          </div>
          <h2 id={`proj-${project.id}`} className="serif exhibit-title">
            {project.title}
            {project.type && (
              <span className="exhibit-title__role">{project.type}</span>
            )}
          </h2>
          {project.role && <p className="exhibit-location">{project.role}</p>}

          <ExhibitNarrative>{project.description}</ExhibitNarrative>

          <div className="contribution-row">
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

          <FocusTagList tags={project.tags} label="Technical stack" />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
