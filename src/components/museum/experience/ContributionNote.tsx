import type { Contribution } from "../../../content";

export default function ContributionNote({
  contribution,

  headingLevel = 4,
}: {
  contribution: Contribution;
  headingLevel?: 3 | 4;
}) {
  const H = (headingLevel === 3 ? "h3" : "h4") as "h3" | "h4";
  return (
    <div className="contribution">
      <H className="contribution__label">{contribution.label}</H>
      <p className="contribution__text">{contribution.text}</p>
    </div>
  );
}
