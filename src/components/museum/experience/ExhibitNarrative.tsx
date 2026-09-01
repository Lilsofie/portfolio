export default function ExhibitNarrative({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`exhibit-note ${className}`.trim()}>{children}</p>;
}
