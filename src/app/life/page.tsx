import LifeHeader from "../../components/life/LifeHeader";

export default function LifeLanding() {
  return (
    <main id="main" className="life" aria-labelledby="life-title">
      <div className="life__inner life__teaser">
        <LifeHeader
          title="The story continues…"
          intro="Side B is still being recorded. Travel, dance, and the moments in between are on their way — for now, the work lives on Side A."
        />

        <div className="teaser">
          <span className="teaser__reel" aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
          </span>
          <p className="teaser__note">
            Frames 01 and 02 — Travel and Dance — are in development.
          </p>
        </div>
      </div>
    </main>
  );
}
