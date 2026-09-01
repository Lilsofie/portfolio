import type { Project } from "../../../content";
import ExhibitPhoto from "../../cover/ExhibitPhoto";
import ProjectCover, { hasProjectCover } from "../../cover/ProjectCover";

export default function ProjectThumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="exhibit-frame">
        <ExhibitPhoto
          src={project.image}
          alt={project.imageAlt ?? `${project.title} screenshot`}
          sizes="(min-width: 820px) 540px, 92vw"
          fit={project.imageFit}
        />
      </div>
    );
  }

  return (
    <div className="exhibit-frame" aria-hidden="true">
      {hasProjectCover(project.id) ? (
        <ProjectCover id={project.id} />
      ) : (
        /* Last resort for a project added without artwork. */
        <div className="artwork artwork--technical">
          <span className="ui-bar">
            <i /> <i /> <i />
          </span>
          <span className="ui-body">
            <span className="ui-side">
              <i /> <i /> <i /> <i />
            </span>
            <span className="ui-main">
              <span className="ui-block" />
              <span className="ui-row" />
              <span className="ui-row ui-row--short" />
            </span>
          </span>
        </div>
      )}
    </div>
  );
}
