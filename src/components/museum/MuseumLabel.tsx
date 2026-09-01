export default function MuseumLabel({
  children,
  as: Tag = "span",
  className = "",
}: {
  children: React.ReactNode;
  as?: "span" | "p" | "div";
  className?: string;
}) {
  return <Tag className={`museum-label ${className}`.trim()}>{children}</Tag>;
}
