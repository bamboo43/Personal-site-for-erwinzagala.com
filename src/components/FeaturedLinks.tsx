import { siteConfig } from "@/lib/site";

const featured = [
  {
    title: "Legal Guide Philippines",
    blurb: "Practical legal explainers for Filipinos — contracts, compliance, and everyday rights.",
    href: siteConfig.links.legalGuide,
    badge: "Content",
  },
  {
    title: "Legal Access Law Offices",
    blurb: "Full-service law practice focused on clear counsel and accessible representation.",
    href: siteConfig.links.legalAccess,
    badge: "Law",
  },
  {
    title: "Project Gateway",
    blurb: "Building bridges for patients, clinics, and communities — including Patient Bridge & Dental Atlas.",
    href: siteConfig.links.projectGateway,
    badge: "Ventures",
  },
];

export function FeaturedLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {featured.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex flex-col rounded-2xl border border-stone-200/80 bg-white/80 p-5 transition hover:border-teal-700/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-teal-400/40"
          {...(item.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-800 dark:text-teal-300">
            {item.badge}
          </span>
          <h3 className="mt-2 font-serif text-lg font-semibold text-stone-900 group-hover:text-teal-800 dark:text-stone-50 dark:group-hover:text-teal-300">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {item.blurb}
          </p>
          <span className="mt-4 text-sm font-medium text-teal-800 dark:text-teal-300">
            Learn more →
          </span>
        </a>
      ))}
    </div>
  );
}
