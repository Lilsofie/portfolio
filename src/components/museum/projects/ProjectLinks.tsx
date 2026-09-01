import type { Project } from "../../../content";

export default function ProjectLinks({ project }: { project: Project }) {
  if (!project.href && !project.repo) return null;

  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const newTab = <span className="sr-only"> (opens in a new tab)</span>;

  return (
    <div className="project-links">
      {project.href && (
        <a className="exhibit-link project-links__primary" href={project.href} {...ext}>
          View project <span aria-hidden="true">→</span>
          {newTab}
        </a>
      )}
      {project.repo && (
        <a className="exhibit-link" href={project.repo} {...ext}>
          Source <span aria-hidden="true">→</span>
          {newTab}
        </a>
      )}
    </div>
  );
}
