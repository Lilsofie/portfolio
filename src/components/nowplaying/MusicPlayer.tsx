"use client";

import { useState } from "react";
import { site } from "../../content";

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);
  const id = site.spotifyPlaylistId;

  if (!id) return null;

  return (
    <div className="np-music">
      <button
        type="button"
        className="np-music__toggle"
        aria-expanded={open}
        aria-controls="np-music-panel"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Hide player" : "Play the shop"}
      </button>

      <div id="np-music-panel" className="np-music__panel" hidden={!open}>
        {/* Only mounted once opened, so nothing loads or plays on arrival. */}
        {open && (
          <iframe
            title="Record store playlist"
            src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`}
            width="100%"
            height="80"
            frameBorder="0"
            loading="lazy"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        )}
      </div>
    </div>
  );
}
