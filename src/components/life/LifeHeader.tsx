import FilmCounter from "./FilmCounter";

export default function LifeHeader({
  eyebrow = "Side B",
  title,
  intro,
  exposures,
  id = "life-title",
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;

  exposures?: number;
  id?: string;
}) {
  return (
    <header className="life-header">
      <div className="life-header__meta">
        <p className="museum-label">{eyebrow}</p>
        {typeof exposures === "number" && <FilmCounter count={exposures} />}
      </div>
      <h1 id={id} className="serif life-header__title">
        {title}
      </h1>
      {intro && <p className="life-header__intro">{intro}</p>}
    </header>
  );
}
