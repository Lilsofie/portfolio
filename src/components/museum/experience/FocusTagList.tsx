export default function FocusTagList({
  tags,
  label = "Focus areas",
}: {
  tags: string[];
  label?: string;
}) {
  if (tags.length === 0) return null;
  return (
    <ul className="tag-row" role="list" aria-label={label}>
      {tags.map((t) => (
        <li key={t} className="tag">
          {t}
        </li>
      ))}
    </ul>
  );
}
