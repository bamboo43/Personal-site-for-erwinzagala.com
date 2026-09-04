import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Erwin Zagala — Filipino lawyer at Legal Access, educator behind Legal Guide Philippines, and entrepreneur building Project Gateway.",
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description:
      "Lawyer, educator, and builder based in the Philippines.",
  },
};

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
        About
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
        Warm counsel. Clear teaching. Useful builds.
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
        <div className="mx-auto w-full max-w-[220px]">
          <div
            className="aspect-[4/5] w-full rounded-2xl border border-dashed border-stone-300 bg-gradient-to-br from-stone-100 to-teal-50 dark:border-stone-700 dark:from-stone-900 dark:to-teal-950/40"
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

        <div className="space-y-6 text-base leading-relaxed text-stone-700 dark:text-stone-300">
          <p>
            I&apos;m <strong className="font-semibold text-stone-900 dark:text-stone-100">Erwin Zagala</strong>,
            a lawyer based in the Philippines and a partner at{" "}
            <strong className="font-semibold text-stone-900 dark:text-stone-100">Legal Access Law Offices</strong>.
            My practice sits at the intersection of careful counsel and plain-language advice —
            helping clients move with confidence, not confusion.
          </p>
          <p>
            Outside the firm, I create and teach through{" "}
            <strong className="font-semibold text-stone-900 dark:text-stone-100">Legal Guide Philippines</strong>:
            explainers, training, and content that demystify Philippine law for students,
            professionals, and everyday Filipinos who just need a clear answer.
          </p>
          <p>
            I also build. Through{" "}
            <strong className="font-semibold text-stone-900 dark:text-stone-100">Project Gateway</strong>{" "}
            and related ventures like Patient Bridge and Dental Atlas, I work on products that
            connect people to care and services — the same “Make It EZ” instinct applied beyond
            legal education.
          </p>
          <p>
            This site is a home base for writing, updates, and ways to reach me. If you&apos;re
            looking for representation, collaboration, or a conversation about law and building
            in the Philippines,{" "}
            <Link href="/contact" className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300">
              say hello
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
