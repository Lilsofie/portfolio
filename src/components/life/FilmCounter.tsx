export default function FilmCounter({
  count,
  label = "exposures",
}: {
  count: number;
  label?: string;
}) {
  return (
    <span className="film-counter" aria-label={`${count} ${label} on this roll`}>
      <span className="film-counter__dial" aria-hidden="true">
        {String(count).padStart(2, "0")}
      </span>
      <span className="film-counter__label" aria-hidden="true">
        {label}
      </span>
    </span>
  );
}
