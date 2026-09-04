export type Thing = {
  id: string;
  title: string;
  description: string;
  kind: "book" | "course" | "tool" | "project";
  href?: string;
  status?: "available" | "coming-soon" | "draft";
};

/** Books lead; courses and drafts follow. */
export const things: Thing[] = [
  {
    id: "the-notary-not-included",
    title: "The Notary Not Included",
    description:
      "A practical companion for Philippine notarial work — what the forms leave out, and how to handle it.",
    kind: "book",
    href: "https://shopee.ph/The-Notary-Not-Included-i.1200562858.25167986088",
    status: "available",
  },
  {
    id: "the-complete-employee-discipline-system",
    title: "The Complete Employee Discipline System",
    description:
      "A clear system for employer discipline and labor process — fair, documented, and usable day to day.",
    kind: "book",
    href: "https://shopee.ph/The-Complete-Employee-Discipline-System-i.1200562858.24869192895",
    status: "available",
  },
  {
    id: "make-it-ez-notes",
    title: "Make It EZ notes",
    description:
      "A growing set of frameworks for making complicated decisions clearer.",
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
