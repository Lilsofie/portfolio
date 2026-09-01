import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import AlbumShelf from "../components/AlbumShelf";
import { albums } from "../content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="store bg-canvas text-ink">
        <section className="store__inner" aria-labelledby="store-title">
          <p className="meta store__eyebrow">Featured</p>
          <h1 id="store-title" className="serif headline store__title">
            Two Sides, One Story
          </h1>
          <p className="store__lede">Different sides of me </p>

          <AlbumShelf albums={albums} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
