export interface Track {
  href: string;

  name: string;

  side: string;

  slot?: string;
}

export const tracklist: Track[] = [
  {
    href: "/",
    name: "Two Sides, One Story",
    side: "Record Store",
  },
  {
    href: "/professional",
    name: "Exhibition Entrance",
    side: "Side A · Selected Works",
  },
  {
    href: "/professional/experience",
    name: "Experience",
    side: "Side A · Selected Works",
    slot: "Room 01",
  },
  {
    href: "/professional/projects",
    name: "Projects",
    side: "Side A · Selected Works",
    slot: "Room 02",
  },
  {
    href: "/life",
    name: "The story continues…",
    side: "Side B · Life in Motion",
    slot: "Unreleased",
  },
  {
    href: "/contact",
    name: "Contact",
    side: "Bonus Track",
  },
];

export const asides: Record<string, Track> = {
  "/life/travel": {
    href: "/life/travel",
    name: "Travel",
    side: "Side B · Life in Motion",
    slot: "Frame 01",
  },
  "/life/dance": {
    href: "/life/dance",
    name: "Dance",
    side: "Side B · Life in Motion",
    slot: "Frame 02",
  },
  "/professional/toolkit": {
    href: "/professional/toolkit",
    name: "Toolkit",
    side: "Side A · Selected Works",
    slot: "Appendix",
  },
};

export const trackIndex = (pathname: string) =>
  tracklist.findIndex((t) => t.href === pathname);

export const trackFor = (pathname: string): Track | undefined =>
  tracklist.find((t) => t.href === pathname) ?? asides[pathname];

export const asideTracks: Track[] = Object.values(asides);
