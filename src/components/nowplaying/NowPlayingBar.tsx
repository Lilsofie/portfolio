"use client";

import { usePathname } from "next/navigation";
import { tracklist, trackFor, trackIndex } from "../../content";
import PlaybackControls from "./PlaybackControls";
import PlaybackProgress from "./PlaybackProgress";
import MusicPlayer from "./MusicPlayer";

export default function NowPlayingBar() {
  const pathname = usePathname();
  const track = trackFor(pathname);
  if (!track) return null;

  const i = trackIndex(pathname);
  const inSequence = i >= 0;
  const prev = i > 0 ? tracklist[i - 1] : undefined;
  const next = inSequence && i < tracklist.length - 1 ? tracklist[i + 1] : undefined;

  const position = inSequence
    ? `${String(i + 1).padStart(2, "0")} / ${String(tracklist.length).padStart(2, "0")}`
    : null;

  return (
    <div className="np">
      {/* corner brackets: two per pseudo-host, decorative */}
      <span className="np__frame" aria-hidden="true" />

      <div className="np__inner" key={pathname}>
        <p className="np__eyebrow">Now Playing</p>

        <div className="np__title-row">
          <span className="np__name">{track.name}</span>
          <span className="np__side">{track.side}</span>
        </div>

        <PlaybackProgress />

        <div className="np__deck">
          <PlaybackControls prev={prev} next={next} pageName={track.name} />
          <MusicPlayer />
          <p className="np__index">
            {track.slot && <span className="np__slot">{track.slot}</span>}
            {position && (
              <span className="np__position">
                <span className="sr-only">Track </span>
                {position}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
