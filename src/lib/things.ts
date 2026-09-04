export type Thing = {
  id: string;
  title: string;
  description: string;
  kind: "book" | "course" | "tool" | "project";
  href?: string;
  status?: "available" | "coming-soon" | "draft";
};

/** Understated placeholders for books / courses / tools. */
export const things: Thing[] = [
  {
    id: "make-it-ez-notes",
    title: "Make It EZ notes",
    description:
      "A growing set of frameworks for making complicated decisions clearer — draft placeholder.",
    kind: "book",
    status: "coming-soon",
  },
  {
    id: "legal-guide-explainers",
    title: "Legal Guide explainers",
    description:
      "Practical Philippine law explainers for students and first-time clients.",
    kind: "course",
    href: "https://legalguide.ph",
    status: "available",
  },
];

export function getThings(): Thing[] {
  return things;
}
