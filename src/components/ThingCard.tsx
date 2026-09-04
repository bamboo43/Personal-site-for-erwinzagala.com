import type { Thing } from "@/lib/things";

const kindLabel: Record<Thing["kind"], string> = {
  book: "Book",
  course: "Course",
  tool: "Tool",
  project: "Project",
};

export function ThingCard({ thing }: { thing: Thing }) {
  const inner = (
    <>
      <span className="text-xs font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400">
        {kindLabel[thing.kind]}
        {thing.status === "coming-soon" ? " · Coming soon" : ""}
      </span>
      <h3 className="mt-2 font-serif text-lg font-semibold text-stone-900 dark:text-stone-50">
        {thing.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {thing.description}
      </p>
    </>
  );

  const className =
    "block rounded-2xl border border-stone-200/80 bg-white/60 p-5 transition hover:border-teal-700/30 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-teal-400/30";

  if (thing.href) {
    const external = thing.href.startsWith("http");
    return (
      <a
        href={thing.href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}
