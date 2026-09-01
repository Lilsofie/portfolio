import type { DanceEntry } from "../../content";
import Image from "next/image";

export default function DanceEntryCard({
  entry,
  take,
}: {
  entry: DanceEntry;
  take: number;
}) {
  const takeNo = String(take).padStart(2, "0");

  return (
    <article className="dance-entry" aria-labelledby={`dance-${entry.id}`}>
      <div className="dance-entry__photo">
        {entry.image ? (
          <Image
            src={entry.image}
            alt={entry.imageAlt ?? ""}
            fill
            sizes="(min-width: 640px) 260px, 92vw"
            className="img-cover"
          />
        ) : (
          <span className="dance-entry__placeholder" aria-hidden="true">
            <span className="serif dance-entry__take">Take {takeNo}</span>
            <span className="dance-entry__note">awaiting photograph</span>
          </span>
        )}
      </div>

      <div className="dance-entry__body">
        <p className="dance-entry__meta">
          <span>{entry.style}</span>
          <span>{entry.date}</span>
        </p>
        <h2 id={`dance-${entry.id}`} className="serif dance-entry__title">
          {entry.title}
        </h2>
        {entry.group && <p className="dance-entry__group">{entry.group}</p>}
        {entry.role && (
          <p className="dance-entry__role museum-label">{entry.role}</p>
        )}
        <p className="dance-entry__hand">{entry.caption}</p>
        {entry.reflection && (
          <p className="dance-entry__reflection">{entry.reflection}</p>
        )}
        {entry.video && (
          <a
            className="exhibit-link"
            href={entry.video}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the piece <span aria-hidden="true">→</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}
