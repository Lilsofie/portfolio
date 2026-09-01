"use client";

import Link from "next/link";
import type { Album } from "../content";
import AlbumArtwork from "./AlbumArtwork";
import CoverMotif from "./cover/CoverMotif";
import Image from "next/image";
import { startVinyl } from "../lib/vinylTransition";

type Props = {
  album: Album;

  selected: boolean;

  dimmed: boolean;

  disabled: boolean;

  onSelect: (album: Album) => void;
};

export default function AlbumCard({
  album,
  selected,
  dimmed,
  disabled,
  onSelect,
}: Props) {
  const trigger = (card: HTMLElement) => {
    const vinyl = card.querySelector<HTMLElement>(".vinyl");
    const r = (vinyl ?? card).getBoundingClientRect();
    startVinyl({
      rect: { left: r.left, top: r.top, width: r.width, height: r.height },
      label: album.side,
      href: album.href,
    });
    onSelect(album);
  };

  return (
    <Link
      href={album.href}
      className={`albumcard albumcard--${album.tone}`}
      data-selected={selected}
      data-dimmed={dimmed}
      aria-label={`Play Side ${album.side}. ${album.title}: ${album.subtitle}`}
      onClick={(e) => {
        // Let the browser handle new-tab / new-window intents natively.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (disabled) return;
        trigger(e.currentTarget);
      }}
      onKeyDown={(e) => {
        // Anchors fire a native click on Enter, but handle it explicitly so
        // activation never depends on that implicit behaviour; Space is added
        // for parity with button semantics (and to stop it scrolling the
        // page). A duplicate activation is harmless — the shelf ignores
        // anything that arrives once the phase has left "idle".
        const isEnter = e.key === "Enter" || e.code === "Enter";
        const isSpace = e.key === " " || e.code === "Space";
        if (!isEnter && !isSpace) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (disabled) return;
        trigger(e.currentTarget);
      }}
    >
      <div className="albumcard__stage">
        <span className="vinyl" aria-hidden="true">
          <span className="vinyl__disc">
            <span className="vinyl__label" data-motif={album.motif}>
            {album.portrait ? (
              <Image
                src={album.portrait.src}
                alt=""
                fill
                sizes="72px"
                className="vinyl__label-photo"
              />
            ) : (
              <CoverMotif motif={album.motif} detail="label" className="vinyl__label-art" />
            )}
            <span className="vinyl__label-side">{album.side}</span>
          </span>
          </span>
        </span>
        <span className="albumcard__sleeve">
          <AlbumArtwork album={album} />
        </span>
      </div>

      <div className="albumcard__info">
        <span className="albumcard__side meta">Side {album.side}</span>
        <h2 className="serif albumcard__title">{album.title}</h2>
        <p className="albumcard__subtitle">{album.subtitle}</p>
        <span className="albumcard__action">
          <span className="albumcard__action-dot" aria-hidden="true" />
          Play Side {album.side}
        </span>
      </div>
    </Link>
  );
}
