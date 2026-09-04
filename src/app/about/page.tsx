import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Erwin Zagala — lawyer, teacher, and builder. Make It EZ: making complicated things easier.",
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: "A short human intro — not a credential dump.",
  },
};

export default function AboutPage() {
  return (
    <Container width="default" className="py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
        About
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
        Making complicated things easier.
      </h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-[180px_1fr] sm:gap-12">
        <div className="mx-auto w-full max-w-[180px] sm:mx-0">
          <div
            className="aspect-[4/5] w-full rounded-2xl border border-dashed border-stone-300 bg-gradient-to-br from-stone-100 to-teal-50/60 dark:border-stone-700 dark:from-stone-900 dark:to-teal-950/30"
            role="img"
            aria-label="Photo placeholder for Erwin Zagala"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
              <span className="font-serif text-3xl text-stone-400 dark:text-stone-500">EZ</span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                Photo coming soon
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-stone-700 dark:text-stone-300">
          <p>
            I&apos;m <strong className="font-semibold text-stone-900 dark:text-stone-100">Erwin Zagala</strong>.
            I practice law, teach, and build — usually toward the same instinct: help someone
            understand, decide, and do the next useful thing.
          </p>
          <p>
            Through Legal Access I counsel clients. Through Legal Guide I teach Philippine law
            in plain language. Through Project Gateway and related work I try to open pathways
            beyond the courtroom. Make It EZ is the lens that ties it together — not a separate brand.
          </p>
          <p>
            This site is my intellectual home: essays, frameworks, videos, experiments, and
            things I&apos;ve made. It is not the firm site, not a résumé, and not a sales funnel.
          </p>
          <p>
            If you want to collaborate, speak, or just say hello,{" "}
            <Link href="/contact" className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300">
              reach out
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
