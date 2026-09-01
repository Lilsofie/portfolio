import type { DanceEntry, LifeSection, TravelEntry } from "./types";

export const lifeSections: LifeSection[] = [
  {
    id: "travel",
    frameNumber: "01",
    title: "Travel",
    description: "Places wandered, captured one Polaroid at a time.",
    href: "/life/travel",
    caption: "Field recordings from the road",
  },
  {
    id: "dance",
    frameNumber: "02",
    title: "Dance",
    description: "Movement, rehearsal, and the occasional stage light.",
    href: "/life/dance",
    caption: "In motion",
  },
];

export const travelEntries: TravelEntry[] = [
  {
    id: "trip-one",
    place: "Kyoto",
    country: "Japan",
    date: "Spring 2024",
    caption: "Placeholder caption — a memory from this trip.",
  },
  {
    id: "trip-two",
    place: "Lisbon",
    country: "Portugal",
    date: "Summer 2023",
    caption: "Placeholder caption — a memory from this trip.",
  },
  {
    id: "trip-three",
    place: "Banff",
    country: "Canada",
    date: "Winter 2023",
    caption: "Placeholder caption — a memory from this trip.",
  },
];

export const danceEntries: DanceEntry[] = [
  {
    id: "piece-one",
    title: "Piece One",
    style: "Contemporary",
    date: "2024",
    caption: "Placeholder caption — the story behind this piece.",
  },
  {
    id: "piece-two",
    title: "Piece Two",
    style: "Hip-Hop",
    date: "2023",
    caption: "Placeholder caption — the story behind this piece.",
  },
];

export const getLifeSection = (id: string) =>
  lifeSections.find((s) => s.id === id);
