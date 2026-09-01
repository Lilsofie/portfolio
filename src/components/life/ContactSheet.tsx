"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TravelEntry } from "../../content";

export default function ContactSheet({ trip }: { trip: TravelEntry }) {
  const photos = trip.photos ?? [];
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const cellRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);

  const activeRef = useRef<number | null>(null);

  const setBoth = useCallback((i: number | null) => {
    activeRef.current = i;
    setActive(i);
  }, []);

  const open = useCallback(
    (i: number) => {
      setBoth(i);
      dialogRef.current?.showModal();
    },
    [setBoth]
  );

  /**
   * deferred past the browser's own post-close focus handling. (Native
   * restoration only covers openers that were actually focused.)
   */
  const handleClose = useCallback(() => {
    const last = activeRef.current;
    if (last === null) return;
    setBoth(null);
    window.setTimeout(() => cellRefs.current[last]?.focus(), 0);
  }, [setBoth]);

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
    handleClose();
  }, [handleClose]);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (photos.length < 2 || activeRef.current === null) return;
      setBoth((activeRef.current + dir + photos.length) % photos.length);
    },
    [photos.length, setBoth]
  );

  // Native listeners cover the paths the browser initiates (Esc fires
  // cancel, then close). Attached natively — not via the synthetic event
  // system — since dialog events don't bubble.
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    dlg.addEventListener("close", handleClose);
    dlg.addEventListener("cancel", handleClose);
    return () => {
      dlg.removeEventListener("close", handleClose);
      dlg.removeEventListener("cancel", handleClose);
    };
  }, [handleClose]);

  if (photos.length === 0) {
    return (
      <div className="contact-sheet" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className="sheet-cell sheet-cell--empty">
            <span className="sheet-cell__note">awaiting photographs</span>
          </span>
        ))}
      </div>
    );
  }

  const current = active !== null ? photos[active] : null;

  return (
    <>
      <div className="contact-sheet">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            className="sheet-cell"
            ref={(el) => {
              cellRefs.current[i] = el;
            }}
            onClick={() => open(i)}
            aria-label={`Enlarge photograph ${i + 1} of ${photos.length}: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 900px) 200px, (min-width: 640px) 33vw, 50vw"
              className="sheet-cell__img"
              loading="lazy"
            />
            <span className="sheet-cell__no" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`Photograph viewer — ${trip.place}`}
        onClick={(e) => {
          // Click on the backdrop (the dialog element itself) closes.
          if (e.target === dialogRef.current) closeDialog();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {current && (
          <figure className="lightbox__figure">
            <div className="lightbox__stage">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="92vw"
                className="lightbox__img"
              />
            </div>
            <figcaption className="lightbox__caption">
              {current.caption ?? current.alt}
              {photos.length > 1 && active !== null && (
                <span className="lightbox__count">
                  {" "}
                  · {active + 1} / {photos.length}
                </span>
              )}
            </figcaption>
          </figure>
        )}

        {photos.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => step(-1)}
              aria-label="Previous photograph"
            >
              ‹
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => step(1)}
              aria-label="Next photograph"
            >
              ›
            </button>
          </>
        )}
        <button
          type="button"
          className="lightbox__close"
          onClick={closeDialog}
          aria-label="Close photograph viewer"
        >
          ✕
        </button>
      </dialog>
    </>
  );
}
