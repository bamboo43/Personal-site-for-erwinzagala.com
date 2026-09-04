import { siteConfig } from "@/lib/site";

const featured = [
  {
    title: "Legal Access",
    blurb: "Law practice — clear counsel when you need representation.",
    href: siteConfig.links.legalAccess,
  },
  {
    title: "Legal Guide",
    blurb: "Teaching and explainers that demystify Philippine law.",
    href: siteConfig.links.legalGuide,
  },
  {
    title: "Project Gateway",
    blurb: "Ventures that connect people to care and useful pathways.",
    href: siteConfig.links.projectGateway,
  },
];

export function FeaturedLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {featured.map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="group flex flex-col rounded-2xl border border-stone-200/80 bg-white/60 p-5 transition hover:border-teal-700/30 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-teal-400/30"
          {...(item.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-teal-800 dark:text-stone-50 dark:group-hover:text-teal-300">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {item.blurb}
          </p>
          <span className="mt-4 text-sm font-medium text-teal-800 dark:text-teal-300">
            Visit →
          </span>
        </a>
      ))}
    </div>
  );
}
