import MuseumLabel from "../MuseumLabel";

export default function CollectionHeader({
  label,
  title,
  note,
  id,
}: {
  label: string;
  title: string;
  note?: string;
  id?: string;
}) {
  return (
    <header className="collection-header">
      <MuseumLabel as="p">{label}</MuseumLabel>
      <h2 id={id} className="serif collection-header__title">
        {title}
      </h2>
      {note && <p className="collection-header__note">{note}</p>}
      <span className="collection-header__rule" aria-hidden="true" />
    </header>
  );
}
