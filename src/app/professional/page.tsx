import MuseumHeader from "../../components/museum/MuseumHeader";
import ExhibitionGrid from "../../components/museum/ExhibitionGrid";
import ExhibitCard from "../../components/museum/ExhibitCard";
import SupportingLink from "../../components/museum/SupportingLink";
import { professionalSections, supportingLinks } from "../../content";

export default function ProfessionalLanding() {
  return (
    <main
      id="main"
      className="museum" aria-labelledby="exhibition-title">
      <div className="museum__inner">
        <MuseumHeader
          label="Exhibition 01"
          title="Selected Works"
          intro="A collection of professional experience, technical projects, and collaborative work."
        />

        <ExhibitionGrid label="Exhibition rooms">
          {professionalSections.map((section) => (
            <li key={section.id} className="exhibition__item">
              <ExhibitCard section={section} />
            </li>
          ))}
        </ExhibitionGrid>

        <section className="supporting-row" aria-labelledby="supporting-title">
          <h2 id="supporting-title" className="museum-label">
            Also in this exhibition
          </h2>
          <div className="supporting-row__links">
            {supportingLinks.map((item) => (
              <SupportingLink key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
