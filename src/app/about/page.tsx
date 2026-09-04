import type { Metadata } from "next";
import type { ReactNode } from "react";
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
        <p>I&apos;m Erwin Zagala.</p>

        <p>
          I&apos;m a lawyer, teacher, entrepreneur, and builder of things that I think
          should work better.
        </p>

        <p>A lot of what I do comes back to the same instinct:</p>

        <p>Take something complicated. Understand it. Then make it easier.</p>

        <p>That&apos;s how I approach law.</p>

        <p>It&apos;s how I teach.</p>

        <p>
          It&apos;s how I think about business, technology, systems, and increasingly,
          life.
        </p>

        <p>
          I practice law through{" "}
          <ExternalOrPlain href={siteConfig.links.legalAccess}>
            Legal Access Law Offices
          </ExternalOrPlain>
          .
        </p>

        <p>
          I teach and create through{" "}
          <ExternalOrPlain href={siteConfig.links.legalGuide}>
            Legal Guide Philippines
          </ExternalOrPlain>
          , where I try to explain the law in a way normal people can actually use.
        </p>

        <p>
          I also build businesses and experiments, including{" "}
          <ExternalOrPlain href={siteConfig.links.projectGateway}>
            Project Gateway
          </ExternalOrPlain>
          , where I&apos;m exploring how AI and better systems can solve very ordinary
          business problems.
        </p>

        <p>
          Over the years, I&apos;ve written books, taught thousands of people, made
          videos, built courses, advised companies, represented clients, started
          projects, abandoned projects, and changed my mind more than a few times.
        </p>

        <p>I consider that a feature.</p>

        <p>
          This website is where I keep the things I want to remember and the things I
          think are worth sharing.
        </p>

        <p>
          You&apos;ll find essays, videos, notes, lessons, books, projects, tools, and
          ideas I&apos;m still working through.
        </p>

        <p>Some are about law.</p>

        <p>Some are about business.</p>

        <p>Some are about AI, leadership, decision-making, or productivity.</p>

        <p>And some are simply things I noticed and didn&apos;t want to forget.</p>

        <p>
          The thread connecting most of them is something I call{" "}
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            Make It EZ
          </strong>
          .
        </p>

        <p>It doesn&apos;t mean making everything simplistic.</p>

        <p>It means removing unnecessary friction.</p>

        <p>Finding the essential thing.</p>

        <p>
          Explaining it clearly enough that someone can actually do something with it.
        </p>

        <p>I&apos;m still figuring a lot of this out.</p>

        <p>This site is part archive, part workshop, and part notebook.</p>

        <p>If you find something useful here, good.</p>

        <p>That&apos;s what it&apos;s for.</p>
      </div>

      <section className="mt-14 border-t border-slate-200/80 pt-10 dark:border-slate-800">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          A little more formally
        </h2>
        <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
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
      </section>
    </Container>
  );
}
