import Link from "next/link";
import type { SupportingLinkItem } from "../../content";

export default function SupportingLink({ item }: { item: SupportingLinkItem }) {
  const content = (
    <>
      <span className="supporting__label">{item.label}</span>
      {item.note && <span className="supporting__note">{item.note}</span>}
      <span className="supporting__arrow" aria-hidden="true">
        →
      </span>
    </>
  );

  if (item.external) {
    return (
      <a
        className="supporting"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link className="supporting" href={item.href}>
      {content}
    </Link>
  );
}
