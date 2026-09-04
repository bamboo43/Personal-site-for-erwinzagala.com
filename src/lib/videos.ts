export type Video = {
  id: string;
  title: string;
  description: string;
  date: string;
  /** Placeholder YouTube id or empty for stub */
  youtubeId?: string;
  href?: string;
  duration?: string;
  source?: string;
};

/** Stub Legal Guide / teaching videos — replace with real embeds later. */
export const videos: Video[] = [
  {
    id: "contracts-basics-ph",
    title: "Contracts without the fog (sample)",
    description:
      "A short Legal Guide–style walkthrough of reading everyday agreements — placeholder for a real episode.",
    date: "2026-06-01",
    youtubeId: "",
    href: "https://legalguide.ph",
    duration: "12:00",
    source: "Legal Guide Philippines",
  },
  {
    id: "make-it-ez-teaching",
    title: "Make It EZ: teaching law so people can use it",
    description:
      "Notes on clarity, examples, and respect for the audience — sample video card for this site draft.",
    date: "2026-04-15",
    youtubeId: "",
    href: "https://legalguide.ph",
    duration: "18:00",
    source: "Legal Guide Philippines",
  },
];

export function getVideos(): Video[] {
  return [...videos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedVideos(limit = 2): Video[] {
  return getVideos().slice(0, limit);
}
