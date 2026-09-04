export type Category = {
  slug: string;
  label: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    slug: "make-it-ez",
    label: "Make It EZ",
    blurb: "Frameworks for clarity, decisions, and doing the next useful thing.",
  },
  {
    slug: "work-business",
    label: "Work & Business",
    blurb: "Building, shipping, and working with people without the noise.",
  },
  {
    slug: "law-decisions",
    label: "Law & Decisions",
    blurb: "Philippine law made navigable — for when you need to decide.",
  },
  {
    slug: "ai-technology",
    label: "AI & Technology",
    blurb: "Tools, experiments, and how technology changes the work.",
  },
  {
    slug: "teaching-communication",
    label: "Teaching & Communication",
    blurb: "How to explain hard things so someone can use them tomorrow.",
  },
  {
    slug: "life",
    label: "Life",
    blurb: "Quieter notes on attention, family, and staying human.",
  },
];

export function getCategories(): Category[] {
  return categories;
}
