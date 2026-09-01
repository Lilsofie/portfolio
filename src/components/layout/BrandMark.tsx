import Link from "next/link";
import { site } from "../../content";

export default function BrandMark() {
  return (
    <Link
      href="/"
      className="brandmark"
      aria-label={`${site.name} — return to the record store`}
    >
      <span className="brandmark__sleeve" aria-hidden="true" />
      <span className="brandmark__disc" aria-hidden="true" />
      <span className="brandmark__name">{site.name}</span>
      <span className="brandmark__tip" aria-hidden="true">
        Return to Record Store
      </span>
    </Link>
  );
}
