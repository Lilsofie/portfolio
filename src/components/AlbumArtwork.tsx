import type { Album } from "../content";
import CoverMotif from "./cover/CoverMotif";
import PortraitCover from "./cover/PortraitCover";

export default function AlbumArtwork({ album }: { album: Album }) {
  return (
    <div className={`art art--${album.motif}${album.portrait ? " art--photo" : ""}`}>
      <span className="art-deco" aria-hidden={album.portrait ? undefined : true}>
        {album.portrait ? (
          <PortraitCover src={album.portrait.src} alt={album.portrait.alt} priority />
        ) : (
          <CoverMotif motif={album.motif} />
        )}
      </span>

      <div className="art-top">
        <span>{album.catalogue}</span>
        <span>{album.dateRange}</span>
      </div>

      <div className="art-foot">
        <span className="art-side">Side {album.side}</span>
        <span className="art-title serif">{album.title}</span>
        {album.coverTagline && (
          <span className="art-tagline">{album.coverTagline}</span>
        )}
      </div>
    </div>
  );
}
