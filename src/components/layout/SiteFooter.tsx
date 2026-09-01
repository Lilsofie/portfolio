import Link from "next/link";
import { site } from "../../content";

export default function SiteFooter() {
  return (
    <footer className="site-footer border-top">
      <div className="footer-inner">
        <p className="serif footer-tagline">Let&rsquo;s build something with taste.</p>
        <nav className="footer-links" aria-label="Contact and navigation">
          <a href={site.links.linkedin} className="link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.links.email}`} className="link">
            Email
          </a>
          <Link href="/" className="link">
            Record Store
          </Link>
        </nav>
      </div>
      <p className="meta footer-colophon">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
