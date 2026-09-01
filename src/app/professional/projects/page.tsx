import type { Metadata } from "next";
import Link from "next/link";
import MuseumHeader from "../../../components/museum/MuseumHeader";
import FeaturedProjectExhibit from "../../../components/museum/projects/FeaturedProjectExhibit";
import ProjectExhibit from "../../../components/museum/projects/ProjectExhibit";
import SupportingLink from "../../../components/museum/SupportingLink";
import { featuredProject, projects } from "../../../content";
import type { SupportingLinkItem } from "../../../content";
import { site } from "../../../content";

export const metadata: Metadata = {
  title: "Selected Projects",
  description:
    "Exhibition 02. Selected software, product, and collaborative technical work.",
};

const continueLinks: SupportingLinkItem[] = [
  {
    id: "experience",
    label: "Experience",
    href: "/professional/experience",
    note: "Room 01",
  },
  { id: "resume", label: "Resume", href: site.links.resume, note: "PDF", external: true },
  { id: "store", label: "Record Store", href: "/", note: "Front of house" },
];

export default function ProjectsPage() {
  const featured = featuredProject();
  const supporting = projects.filter((p) => p.id !== featured.id);

  return (
    <main
      id="main"
      className="museum" aria-labelledby="exhibition-title">
      <div className="museum__inner">
        <Link href="/professional" className="back-link back-link--inline">
          <span aria-hidden="true">←</span> Selected Works
        </Link>

        <MuseumHeader
          label="Exhibition 02"
          title="Selected Projects"
          intro="Software, product, and collaborative technical work, each piece catalogued with its stack, challenge, and status."
        />

        <FeaturedProjectExhibit project={featured} />

        <ul className="project-exhibits" role="list" aria-label="Supporting exhibits">
          {supporting.map((p, i) => (
            <li key={p.id}>
              <ProjectExhibit
                project={p}
                exhibitNumber={String(i + 2).padStart(2, "0")}
              />
            </li>
          ))}
        </ul>

        <nav className="supporting-row" aria-labelledby="continue-title">
          <h2 id="continue-title" className="museum-label">
            Continue the exhibition
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
