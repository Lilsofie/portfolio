"use client";
import Image from "next/image";

import Link from "next/link";
import type { CSSProperties } from "react";
import type { LifeSection } from "../../content";

const TILTS = [-2.4, 2.0, -1.4, 2.6, -1.8, 1.2];
const DROPS = [0, 10, 4, -6, 8, -2];

type Props = {
  section: LifeSection;
  index: number;

  selected: boolean;

  dimmed: boolean;

  disabled: boolean;
  onSelect: (section: LifeSection) => void;

  onSettled: () => void;
};

/**
 * One instant photo on the shelf: warm paper border, square photo window
 * (real photo, or a clearly marked placeholder), and a handwritten-style
 * caption. The whole card is a single accessible link; hover/focus
 * develops the photo and straightens the tilt; activation lifts it forward
 * and then navigates.
 */
export default function PolaroidCard({
  section,
  index,
  selected,
  dimmed,
  disabled,
  onSelect,
  onSettled,
}: Props) {
  const style = {
    "--tilt": `${TILTS[index % TILTS.length]}deg`,
    "--drop": `${DROPS[index % DROPS.length]}px`,
  } as CSSProperties;

  return (
    <Link
      href={section.href}
      className="polaroidcard"
      style={style}
      data-selected={selected}
      data-dimmed={dimmed}
      aria-label={`Frame ${section.frameNumber}: ${section.title}. ${section.description}`}
      onClick={(e) => {
        // Preserve open-in-new-tab and no-JS navigation.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (disabled) return;
        onSelect(section);
      }}
      onKeyDown={(e) => {
        const isEnter = e.key === "Enter" || e.code === "Enter";
        const isSpace = e.key === " " || e.code === "Space";
        if (!isEnter && !isSpace) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (disabled) return;
        onSelect(section);
      }}
      onTransitionEnd={(e) => {
        if (selected && e.propertyName === "transform") onSettled();
      }}
    >
      <span className="polaroidcard__photo">
        {section.image ? (
          <Image
            src={section.image}
            alt={section.imageAlt ?? ""}
            fill
            sizes="(min-width: 640px) 340px, 92vw"
            className="img-cover"
          />
        ) : (
          /* Clearly marked placeholder — swapped out when real photos land. */
          <span className="polaroidcard__placeholder" aria-hidden="true">
            <span className="serif polaroidcard__placeholder-no">
              {section.frameNumber}
            </span>
            <span className="polaroidcard__placeholder-note">
              awaiting photograph
            </span>
          </span>
        )}
      </span>

      <span className="polaroidcard__caption">
        <span className="polaroidcard__meta">
          <span>Frame {section.frameNumber}</span>
          {section.date && <span>{section.date}</span>}
        </span>
        <h2 className="serif polaroidcard__title">{section.title}</h2>
        <span className="polaroidcard__hand">
          {section.caption ?? section.description}
        </span>
        <span className="polaroidcard__action">Open frame →</span>
      </span>
    </Link>
  );
}
