import SiteNav from "./SiteNav";
import BrandMark from "./BrandMark";
import StickyCompact from "./StickyCompact";
import NowPlayingBar from "../nowplaying/NowPlayingBar";

export default function SiteHeader() {
  return (
    <header className="site-head">
      <StickyCompact />
      <div className="header-bar">
        <BrandMark />
        <SiteNav />
      </div>
      <NowPlayingBar />
    </header>
  );
}
