import type { MetadataRoute } from "next";
import { site, tracklist, asideTracks } from "../content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [...tracklist, ...asideTracks].map((t) => t.href);

  return routes.map((href) => ({
    url: `${site.url}${href === "/" ? "" : href}`,
    lastModified: now,
    changeFrequency: href === "/" ? ("monthly" as const) : ("yearly" as const),
    priority: href === "/" ? 1 : href.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
