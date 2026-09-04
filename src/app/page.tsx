import Link from "next/link";
import { Container } from "@/components/Container";
import { FeaturedLinks } from "@/components/FeaturedLinks";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const latest = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200/70 dark:border-stone-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(15,118,110,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(180,83,9,0.08),_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,_rgba(45,212,191,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(251,191,36,0.06),_transparent_50%)]"
        />
        <Container className="relative py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
            Lawyer · Educator · Builder
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
            Hi, I&apos;m {siteConfig.name}.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
            I&apos;m a Filipino attorney who makes the law clearer, trains the next generation of
            practitioners, and builds tools that close gaps in access — from legal education to
            patient care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:bg-teal-600 dark:hover:bg-teal-500"
            >
              Read the blog
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/70 px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:border-stone-600 dark:bg-stone-900/70 dark:text-stone-100 dark:hover:border-stone-500"
            >
              About me
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-teal-800 transition hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:text-teal-300 dark:hover:bg-teal-950/40"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Where I work & build
              </h2>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                Practice, teaching, and ventures — links may update as projects grow.
              </p>
            </div>
          </div>
          <FeaturedLinks />
        </Container>
      </section>

      <section className="border-t border-stone-200/70 bg-[#f3efe8]/60 py-14 dark:border-stone-800 dark:bg-stone-950/40 sm:py-16">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-stone-900 dark:text-stone-50">
                From the desk
              </h2>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
                Sample notes on Philippine law, practice, and making hard things easier.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-semibold text-teal-800 hover:underline sm:inline dark:text-teal-300"
            >
              All posts →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-6 inline-block text-sm font-semibold text-teal-800 hover:underline sm:hidden dark:text-teal-300"
          >
            All posts →
          </Link>
        </Container>
      </section>
    </>
  );
}
