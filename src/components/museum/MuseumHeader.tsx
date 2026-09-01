import MuseumLabel from "./MuseumLabel";

export default function MuseumHeader({
  label,
  title,
  intro,
  id = "exhibition-title",
}: {
  label: string;
  title: string;
  intro?: React.ReactNode;

  id?: string;
}) {
  return (
    <header className="museum-header">
      <MuseumLabel as="p">{label}</MuseumLabel>
      <h1 id={id} className="serif museum-header__title">
        {title}
      </h1>
      {intro && <p className="museum-header__intro">{intro}</p>}
      <span className="museum-header__rule" aria-hidden="true" />
    </header>
  );
}
