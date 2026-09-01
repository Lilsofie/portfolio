import type { Album } from "./types";

export const albums: Album[] = [
  {
    id: "professional",
    side: "A",
    title: "Selected Works",
    subtitle: "Experience, projects, and things I have built",
    href: "/professional",
    motif: "network",
    portrait: {
      src: "/portraits/selected-work.jpg",
      alt: "Kate Huang in a grey button-up shirt wearing a Microsoft AI Tour badge",
    },
    tone: "ink",
    catalogue: "CAT. No. 001",
    dateRange: "2021 – 2026",
    theme: "professional",
  },
  {
    id: "life",
    side: "B",
    title: "Life in Motion",
    subtitle: "Travel, dance, and life outside the screen",
    href: "/life",
    motif: "aperture",
    portrait: {
      src: "/portraits/life-in-motion.jpg",
      alt: "Kate Huang in a beret and dark coat, framed by gig posters on a pink brick wall",
    },
    coverTagline: "Travel · Dance · Moments",
    tone: "warm",
    catalogue: "ISSUE 02",
    dateRange: "ONGOING",
    theme: "life",
  },
];

export const getAlbum = (id: string): Album | undefined =>
  albums.find((a) => a.id === id);
