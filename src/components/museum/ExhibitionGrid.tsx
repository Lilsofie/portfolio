export default function ExhibitionGrid({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <ul className="exhibition" role="list" aria-label={label}>
      {children}
    </ul>
  );
}
