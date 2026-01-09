import Theme from "../components/ThemeSwitch";
import SmoothScroll from "../components/SmoothScroll";
import Reveal from "../components/Reveal";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <SmoothScroll />
      <ThemeSwitch />
      {/* HERO */}
      <section className="section-pad">
        <p className="meta">Your Name</p>

        <Reveal>
          <h1 className="serif headline mt-6 max-w-[16ch]">
            I build digital experiences that feel alive.
          </h1>
        </Reveal>

        <p className="mt-8 max-w-[60ch] text-ink/70">
          Developer • Product-minded • Toronto
        </p>
      </section>

      {/* WORK */}
      <section className="section-pad border-top">
        <h2 className="meta">Selected work</h2>

        <div className="mt-12 space-y-12">
          {[
            {
              title: "Project One",
              year: "2026",
              desc: "One-line description. Keep it short. No resume paragraphs.",
            },
            {
              title: "Project Two",
              year: "2026",
              desc: "One-line description. Keep it short. No resume paragraphs.",
            },
            {
              title: "Project Three",
              year: "2026",
              desc: "One-line description. Keep it short. No resume paragraphs.",
            },
          ].map((p) => (
            <article key={p.title} className="group">
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="serif title">{p.title}</h3>
                <span className="meta">{p.year}</span>
              </div>

              <p className="mt-3 max-w-[70ch] text-ink/60">{p.desc}</p>

              <div className="mt-6 divider" />
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-pad border-top">
        <h2 className="meta">Contact</h2>

        <p className="serif headline-sm mt-6 max-w-[18ch]">
          Let’s build something with taste.
        </p>

        <a className="link mt-10 inline-block" href="mailto:you@email.com">
          you@email.com
        </a>
      </section>
    </main>
  );
}
