import Image from "next/image";
import type { ProfessionalSection } from "../../content";
import CoverMotif from "../cover/CoverMotif";
import Constellation from "../cover/Constellation";

export default function ExhibitFrame({
  section,
}: {
  section: ProfessionalSection;
}) {
  if (section.image) {
    return (
      <div className="exhibit-frame">
        <Image
          src={section.image}
          alt={section.imageAlt ?? ""}
          fill
          sizes="(min-width: 820px) 540px, 92vw"
          className="img-cover"
        />
      </div>
    );
  }

  return (
    <div className="exhibit-frame" aria-hidden="true">
      {section.collage ? (
        <Constellation
          items={section.collage}
          layout={section.motif === "route" ? "route" : "grid"}
        />
      ) : (
        <CoverMotif motif={section.motif} className="exhibit-frame__motif" />
      )}
    </div>
  );
}
