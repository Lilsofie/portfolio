import type { Metadata } from "next";
import Link from "next/link";
import MuseumHeader from "../../../components/museum/MuseumHeader";
import { skillGroups } from "../../../content";

export const metadata: Metadata = {
  title: "Toolkit",
  description:
    "Languages, frameworks, and developer tools Kate Huang works with.",
};

export default function ToolkitPage() {
  return (
    <main
      id="main"
      className="museum" aria-labelledby="exhibition-title">
      <div className="museum__inner">
        <Link href="/professional" className="back-link back-link--inline">
          <span aria-hidden="true">←</span> Selected Works
        </Link>

        <MuseumHeader
          label="Appendix"
          title="Toolkit"
          intro="The languages, frameworks, and tools behind the work in this exhibition."
        />

        <div className="toolkit">
          {skillGroups.map((group) => (
            <section key={group.id} className="toolkit__group">
              <h2 className="museum-label">{group.label}</h2>
              <ul className="tag-row toolkit__items" role="list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
