import type { Metadata } from "next";
import ExperienceRoomHeader from "../../../components/museum/experience/ExperienceRoomHeader";
import CollectionHeader from "../../../components/museum/experience/CollectionHeader";
import FeaturedExperienceExhibit from "../../../components/museum/experience/FeaturedExperienceExhibit";
import ProfessionalExperienceExhibit from "../../../components/museum/experience/ProfessionalExperienceExhibit";
import CommunityExperiencePlaque from "../../../components/museum/experience/CommunityExperiencePlaque";
import SupportingLink from "../../../components/museum/SupportingLink";
import { experiencesByCollection, featuredExperience } from "../../../content";
import type { SupportingLinkItem } from "../../../content";
import { site } from "../../../content";

const continueLinks: SupportingLinkItem[] = [
  {
    id: "projects",
    label: "Projects",
    href: "/professional/projects",
    note: "Room 02",
  },
  { id: "resume", label: "Resume", href: site.links.resume, note: "PDF", external: true },
  { id: "store", label: "Record Store", href: "/", note: "Front of house" },
];

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Room 01. Professional practice, leadership, service, and community work.",
};

export default function ExperiencePage() {
  const featured = featuredExperience();
  const supporting = experiencesByCollection("practice").filter(
    (e) => e.id !== featured.id
  );
  const community = experiencesByCollection("earlier");

  return (
    <main
      id="main"
      className="museum" aria-labelledby="exhibition-title">
      <div className="museum__inner">
        <ExperienceRoomHeader
          intro="This room collects professional and technical practice alongside the leadership, service, and community roles that shaped how I work."
        />

        {/* ---- Collection A — the room's centrepiece ---- */}
        <section aria-labelledby="collection-a" className="collection collection--practice">
          <CollectionHeader
            id="collection-a"
            label="Collection A"
            title="Professional Practice"
          />

          <FeaturedExperienceExhibit experience={featured} />

          <div className="supporting-grid">
            {supporting.map((exp, i) => (
              <ProfessionalExperienceExhibit
                key={exp.id}
                experience={exp}
                exhibitNumber={`A-${String(i + 2).padStart(2, "0")}`}
              />
            ))}
          </div>
        </section>

        {/* ---- Collection B — lighter, supporting, never competing ---- */}
        <section aria-labelledby="collection-b" className="collection collection--earlier">
          <CollectionHeader
            id="collection-b"
            label="Collection B"
            title="Earlier Work & Community"
            note="Part-time, service, leadership, and community roles. The transferable foundations: communication, teamwork, organisation, and working under pressure."
          />

          <div className="plaque-catalogue">
            {community.map((exp) => (
              <CommunityExperiencePlaque key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* ---- Onward navigation ---- */}
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
