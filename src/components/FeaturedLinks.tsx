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
          className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white/60 p-5 transition hover:border-blue-700/30 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-blue-400/30"
          {...(item.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <h3 className="font-serif text-lg font-semibold text-slate-900 group-hover:text-blue-800 dark:text-slate-50 dark:group-hover:text-blue-400">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {item.blurb}
          </p>
          <span className="mt-4 text-sm font-medium text-blue-800 dark:text-blue-400">
            Visit →
          </span>
        </a>
      ))}
    </div>
  );
}
