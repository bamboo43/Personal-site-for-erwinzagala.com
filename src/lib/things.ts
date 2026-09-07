export type Thing = {
  id: string;
  title: string;
  description: string;
  kind: "book" | "course" | "tool" | "project";
  href?: string;
  status?: "available" | "coming-soon" | "draft";
  /** Path under /public, e.g. /books/notary-not-included.jpg */
  image?: string;
};

/** Available books and courses first; coming-soon last. */
export const things: Thing[] = [
  {
    id: "the-notary-not-included",
    title: "Notary Not Included",
    description:
      "A practical companion for Philippine notarial work — what the forms leave out, and how to handle it.",
    kind: "book",
    href: "https://shopee.ph/The-Notary-Not-Included-i.1200562858.25167986088",
    status: "available",
    image: "/books/notary-not-included.jpg",
  },
  {
    id: "the-complete-employee-discipline-system",
    title: "The Complete Employee Discipline System",
    description:
      "A clear system for employer discipline and labor process — fair, documented, and usable day to day. Instant PDF on Legal Guide Offer; also on Shopee.",
    kind: "book",
    href: "https://offer.legalguide.ph/employeedisciplineebook",
    status: "available",
    image: "/books/employee-discipline-system.jpg",
  },
  {
    id: "estate-settlement-plain-filipino",
    title: "Estate Settlement, in Plain Filipino",
    description:
      "Free 4-lesson recorded video series for families who just lost a loved one — process, properties, deadlines, and how to avoid costly penalties. Start without signing up.",
    kind: "course",
    href: "https://offer.legalguide.ph/funeralhome",
    status: "available",
  },
  {
    id: "legal-guide-resource-center",
    title: "Legal Guide Resource Center",
    description:
      "Directory of Legal Guide Philippines books, free guides, and recorded workshops that are ready now.",
    kind: "project",
    href: "https://offer.legalguide.ph",
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
];

export function getThings(): Thing[] {
  return things;
}

/** Only ready downloads/enrollments — excludes coming-soon and draft. */
export function getAvailableThings(): Thing[] {
  return things.filter((t) => t.status === "available" || (!t.status && t.href));
}
