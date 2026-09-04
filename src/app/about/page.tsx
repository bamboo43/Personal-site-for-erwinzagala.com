import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Erwin Zagala — lawyer, teacher, entrepreneur, and builder. Take something complicated. Understand it. Then make it easier.",
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: "A plain, personal introduction from Erwin Zagala.",
  },
};

export default function AboutPage() {
  return (
    <Container width="default" className="py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
        About
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
        About Me
      </h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-[140px_1fr] sm:gap-12">
        <div className="mx-auto w-full max-w-[140px] sm:mx-0">
          <div
            className="aspect-square w-full rounded-2xl border border-dashed border-stone-300 bg-gradient-to-br from-stone-100 to-teal-50/60 dark:border-stone-700 dark:from-stone-900 dark:to-teal-950/30"
            role="img"
            aria-label="Photo placeholder for Erwin Zagala"
          >
            <div className="flex h-full flex-col items-center justify-center gap-1 p-3 text-center">
              <span className="font-serif text-2xl text-stone-400 dark:text-stone-500">EZ</span>
              <span className="text-[10px] text-stone-500 dark:text-stone-400">Photo soon</span>
            </div>
          </div>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-stone-700 dark:text-stone-300">
          <p>
            I&apos;m{" "}
            <strong className="font-semibold text-stone-900 dark:text-stone-100">
              Erwin Zagala
            </strong>
            .
          </p>
          <p>
            I&apos;m a lawyer, teacher, entrepreneur, and builder. The through-line is
            simple: take something complicated. Understand it. Then make it easier.
          </p>
          <p>
            I do that through{" "}
            <a
              href={siteConfig.links.legalAccess}
              className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal Access Law Offices
            </a>
            ,{" "}
            <a
              href={siteConfig.links.legalGuide}
              className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal Guide Philippines
            </a>
            , and{" "}
            <a
              href={siteConfig.links.projectGateway}
              className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
              {...(siteConfig.links.projectGateway.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Project Gateway
            </a>
            . I&apos;ve written books, taught thousands of people, made videos, and built
            courses. Changing my mind is a feature, not a bug.
          </p>
          <p>
            This site is where I remember and share — essays, videos, notes, and the other
            things that belong in one place.{" "}
            <strong className="font-semibold text-stone-900 dark:text-stone-100">
              Make It EZ
            </strong>{" "}
            means removing friction, not making things simplistic. I&apos;m still figuring
            things out. Think of this place as an archive, a workshop, and a notebook.
          </p>
          <p>If you find something useful here, good.</p>
        </div>
      </div>

      <section className="mt-14 border-t border-stone-200/80 pt-10 dark:border-stone-800">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          A little more formally
        </h2>
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
          <p>
            Erwin Zagala is a Philippine lawyer, teacher, and entrepreneur. He founded{" "}
            <a
              href={siteConfig.links.legalAccess}
              className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal Access Law Offices
            </a>
            , teaches through{" "}
            <a
              href={siteConfig.links.legalGuide}
              className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal Guide Philippines
            </a>
            , and builds ventures under{" "}
            <a
              href={siteConfig.links.projectGateway}
              className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
              {...(siteConfig.links.projectGateway.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Project Gateway
            </a>
            .
          </p>
          <p>I like taking complicated things and making them easier.</p>
          <p className="pt-2">
            <Link
              href="/contact"
              className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
            >
              Say hello
            </Link>
            .
          </p>
        </div>
      </section>
    </Container>
  );
}
