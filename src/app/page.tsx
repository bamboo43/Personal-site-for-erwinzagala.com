import Link from "next/link";
import { Container } from "@/components/Container";
import { EmailSignup } from "@/components/EmailSignup";
import { FeaturedLinks } from "@/components/FeaturedLinks";
import { PostCard } from "@/components/PostCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ThingCard } from "@/components/ThingCard";
import { VideoCard } from "@/components/VideoCard";
import { getCategories } from "@/lib/categories";
import { getAllPosts, getCornerstonePosts } from "@/lib/posts";
import { getThings } from "@/lib/things";
import { getFeaturedVideos } from "@/lib/videos";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const startHere = getCornerstonePosts().slice(0, 4);
  const latest = getAllPosts().slice(0, 4);
  const videos = getFeaturedVideos(4);
  const things = getThings();
  const categories = getCategories();

  return (
    <>
      <section className="border-b border-stone-200/70 dark:border-stone-800">
        <Container width="wide" className="py-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            Erwin Zagala
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            {siteConfig.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-300">
            Ideas, essays, teaching, and tools — a personal home for making complicated
            things easier to understand, decide, and do. Make It EZ.
          </p>
          <p className="mt-6">
            <Link
              href="#ask"
              className="text-sm text-stone-500 underline-offset-4 hover:text-teal-800 hover:underline dark:text-stone-400 dark:hover:text-teal-300"
            >
              Not sure where to start? Ask my AI assistant.
            </Link>
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container width="wide">
          <SectionHeading
            title="Start Here"
            description="Cornerstone pieces — deliberately chosen, not just the newest."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {startHere.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200/70 py-12 dark:border-stone-800 sm:py-14">
        <Container width="wide">
          <SectionHeading
            title="Latest Ideas"
            description="Recent essays and reflections."
            href="/blog"
            linkLabel="All ideas →"
          />
          <div className="divide-y divide-stone-200/70 dark:divide-stone-800">
            {latest.map((post) => (
              <PostCard key={post.slug} post={post} quiet />
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-6 inline-block text-sm font-medium text-teal-800 hover:underline sm:hidden dark:text-teal-300"
          >
            All ideas →
          </Link>
        </Container>
      </section>

      <section className="border-t border-stone-200/70 bg-[#f3efe8]/50 py-12 dark:border-stone-800 dark:bg-stone-950/40 sm:py-14">
        <Container width="wide">
          <SectionHeading
            title="Watch"
            description="Recent explainers from Legal Guide Philippines."
            href="/watch"
            linkLabel="All videos →"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200/70 py-12 dark:border-stone-800 sm:py-14">
        <Container width="wide">
          <SectionHeading
            title="Things I've Made"
            description="Books, courses, and tools — understated, useful when ready."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {things.map((thing) => (
              <ThingCard key={thing.id} thing={thing} />
            ))}
          </div>
          <p className="mt-6">
            <a
              href={siteConfig.links.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-teal-800 hover:underline dark:text-teal-300"
            >
              More on Shopee →
            </a>
          </p>
        </Container>
      </section>

      <section className="border-t border-stone-200/70 py-12 dark:border-stone-800 sm:py-14">
        <Container width="wide">
          <SectionHeading
            title="What I Do"
            description="Practice, teaching, and ventures — after the ideas, not instead of them."
          />
          <FeaturedLinks />
        </Container>
      </section>

      <section className="border-t border-stone-200/70 bg-[#f3efe8]/40 py-12 dark:border-stone-800 dark:bg-stone-950/30 sm:py-14">
        <Container width="wide">
          <SectionHeading
            title="Explore"
            description="A few doors into the library."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                id={cat.slug}
                href={`/blog#${cat.slug}`}
                className="rounded-2xl border border-stone-200/80 bg-white/60 px-4 py-4 transition hover:border-teal-700/30 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-teal-400/30"
              >
                <h3 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-50">
                  {cat.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {cat.blurb}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200/70 py-12 dark:border-stone-800 sm:py-14">
        <Container width="wide">
          <SectionHeading title="About" />
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
            <p>
              I&apos;m Erwin — a lawyer, teacher, and builder based in the Philippines.
              I spend my days trying to make hard things feel navigable: the law, a
              decision, a product, a next step.
            </p>
            <p>
              This site is my intellectual home — not the firm, not a résumé.
              {" "}
              <Link href="/about" className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300">
                A little more about me
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-stone-200/70 py-12 dark:border-stone-800 sm:py-14">
        <Container width="wide">
          <EmailSignup />
          <p id="ask" className="mt-8 text-sm text-stone-500 dark:text-stone-400">
            <span className="font-medium text-stone-600 dark:text-stone-300">
              Not sure where to start?
            </span>{" "}
            Ask my AI assistant — coming in a later phase. For now,{" "}
            <Link href="/blog" className="text-teal-800 underline-offset-4 hover:underline dark:text-teal-300">
              browse Ideas
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-teal-800 underline-offset-4 hover:underline dark:text-teal-300">
              say hello
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
