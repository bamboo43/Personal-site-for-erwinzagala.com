import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Erwin Zagala — Filipino lawyer, teacher, and builder. Partner at Legal Access; Legal Guide Philippines.",
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: "A plain, formal introduction from Erwin Zagala.",
  },
};

const linkClass =
  "font-medium text-blue-800 underline-offset-4 hover:underline dark:text-blue-400";

function ExternalOrPlain({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  if (!href || href === "#") {
    return (
      <span className="font-medium text-slate-900 dark:text-slate-100">
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      className={linkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function AboutPage() {
  return (
    <Container width="narrow" className="py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        About
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
        About Me
      </h1>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <p>
          I&apos;m a Filipino lawyer and partner at{" "}
          <ExternalOrPlain href={siteConfig.links.legalAccess}>
            Legal Access Law Offices
          </ExternalOrPlain>
          .
        </p>

        <p>
          I also lead training and educational work through{" "}
          <ExternalOrPlain href={siteConfig.links.legalGuide}>
            Legal Guide Philippines
          </ExternalOrPlain>
          , where I create videos, courses, books, and programs focused on making law
          easier to understand and apply.
        </p>

        <p>
          My work has expanded over the years into business, leadership, technology,
          AI, systems design, and entrepreneurship.
        </p>

        <p>I speak, teach, write, advise, and build.</p>

        <p>
          But if I had to reduce all of that to one sentence, it would probably be
          this:
        </p>

        <p>I like taking complicated things and making them easier.</p>

        <p className="pt-4 text-sm text-slate-500 dark:text-slate-400">
          <Link
            href="/contact"
            className="font-medium text-blue-800 underline-offset-4 hover:underline dark:text-blue-400"
          >
            Say hello
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
