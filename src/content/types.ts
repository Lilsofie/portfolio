export type WorldId = "professional" | "life";

export interface Album {
  id: WorldId;

  side: string;
  title: string;

  subtitle: string;

  href: string;

  motif: "network" | "aperture" | "stack" | "route";

  portrait?: { src: string; alt: string };

  tone: "ink" | "warm";

  catalogue: string;

  dateRange: string;

  coverTagline?: string;
  theme: WorldId;
}

export interface ProfessionalSection {
  id: string;

  roomNumber: string;
  title: string;
  description: string;
  href: string;

  motif: "stack" | "route";

  collage?: string[];

  image?: string;

  imageAlt?: string;

  dateRange?: string;

  actionLabel?: string;
}

export type ExperienceCollection = "practice" | "earlier";

export interface Contribution {

  label: string;

  text: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;

  dateRange: string;
  collection: ExperienceCollection;

  featured?: boolean;

  narrative: string;

  contributions?: Contribution[];

  catalogueNotes?: string[];

  tags?: string[];

  image?: string;
  imageAlt?: string;

  link?: { label: string; href: string; external?: boolean };
}

export interface SupportingLinkItem {
  id: string;
  label: string;
  href: string;

  note?: string;

  external?: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  year: string;

  description: string;

  role?: string;

  type?: string;

  challenge?: string;

  outcome?: string;

  featured?: boolean;
  tags: string[];

  image?: string;
  imageAlt?: string;

  imageFit?: "cover" | "contain";

  href?: string;

  repo?: string;
}

export interface LifeSection {
  id: string;

  frameNumber: string;
  title: string;
  description: string;
  href: string;

  image?: string;

  imageAlt?: string;

  caption?: string;

  date?: string;
}

export interface TravelPhoto {

  src: string;

  alt: string;

  caption?: string;
}

export interface TravelEntry {
  id: string;
  place: string;
  country?: string;

  date: string;

  caption: string;

  reflection?: string;

  photos?: TravelPhoto[];
}

export interface DanceEntry {
  id: string;
  title: string;

  style: string;
  date: string;

  caption: string;

  group?: string;

  role?: string;

  reflection?: string;

  image?: string;

  imageAlt?: string;

  video?: string;
}
