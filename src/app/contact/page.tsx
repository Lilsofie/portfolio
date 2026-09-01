import type { Metadata } from "next";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import MuseumHeader from "../../components/museum/MuseumHeader";
import { site } from "../../content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bonus track — get in touch with Kate Huang about collaborations, opportunities, or questions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${site.name}`,
    description:
      "Bonus track — get in touch about collaborations, opportunities, or questions.",
    url: `${site.url}/contact`,
    type: "website",
  },
};

const channels = [
  {
    id: "linkedin",
    label: "LinkedIn",
    note: "linkedin.com/in/katehuang-",
    href: site.links.linkedin,
  },
  {
    id: "github",
    label: "GitHub",
    note: "github.com/Lilsofie",
    href: site.links.github,
  },
  {
    id: "resume",
    label: "Resume",
    note: "Opens in Google Drive",
    href: site.links.resume,
  },
];

export default function ContactPage() {
  const subject = encodeURIComponent("Hello from your portfolio");
  const mailto = `mailto:${site.links.email}?subject=${subject}`;

  return (
    <>
      <SiteHeader />
      <main id="main" className="museum" aria-labelledby="contact-title">
        <div className="museum__inner contact">
          <MuseumHeader
            label="Bonus Track"
            title="Let's Talk"
            intro="A final track for collaborations, opportunities, questions, or just saying hello."
            id="contact-title"
          />

          {/* Primary action — a mail-client composer, not a fake form. */}
          <section className="contact__primary" aria-labelledby="contact-email">
            <h2 id="contact-email" className="museum-label">
              Primary channel
            </h2>
            <a className="contact__email" href={mailto}>
              <span className="serif contact__email-address">
                {site.links.email}
              </span>
              <span className="contact__email-action">
                Email me <span aria-hidden="true">→</span>
              </span>
            </a>
            <p className="contact__note">
              Opens your mail app with a message started. Prefer to copy the
              address? It&rsquo;s written out above.
            </p>
          </section>

          <section className="contact__channels" aria-labelledby="contact-elsewhere">
            <h2 id="contact-elsewhere" className="museum-label">
              Elsewhere on the shelf
            </h2>
            <ul className="contact__list" role="list">
              {channels.map((c) => (
                <li key={c.id}>
                  <a
                    className="contact__row"
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="serif contact__row-label">{c.label}</span>
                    <span className="contact__row-note">{c.note}</span>
                    <span className="contact__row-arrow" aria-hidden="true">
                      →
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <p className="contact__liner">
            Liner note: this site has no server-side form, so messages travel by
            email rather than disappearing into a contact box.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
