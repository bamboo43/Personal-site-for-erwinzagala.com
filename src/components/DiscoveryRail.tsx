import Link from "next/link";
import { type ReactNode } from "react";
import { EmailSignup } from "@/components/EmailSignup";
import { getCategories } from "@/lib/categories";
import { getCornerstonePosts, getRecentPosts, type PostMeta } from "@/lib/posts";
import { getThings } from "@/lib/things";
import { getFeaturedVideos } from "@/lib/videos";
import { siteConfig } from "@/lib/site";

function RailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-slate-200/80 pt-5 first:border-t-0 first:pt-0 dark:border-slate-800">
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function PostLinks({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className="space-y-2.5">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm leading-snug text-slate-700 transition hover:text-blue-800 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function DiscoveryRail({ excludeSlug }: { excludeSlug?: string }) {
  const startHere = getCornerstonePosts().slice(0, 3);
  const recent = getRecentPosts(4, excludeSlug);
  const things = getThings().slice(0, 2);
  const categories = getCategories().slice(0, 6);
  const video = getFeaturedVideos(1)[0];

  return (
    <aside className="space-y-6 text-sm">
      <RailBlock title="About Erwin">
        <p className="leading-relaxed text-slate-600 dark:text-slate-400">
          I write and teach to make complicated things easier to understand, decide, and do.
          {" "}
          <Link href="/about" className="font-medium text-blue-800 hover:underline dark:text-blue-400">
            More
          </Link>
        </p>
      </RailBlock>

      <RailBlock title="Start Here">
        <PostLinks posts={startHere} />
      </RailBlock>

      <RailBlock title={"Things I've Made"}>
        <ul className="space-y-2.5">
          {things.map((thing) => (
            <li key={thing.id}>
              {thing.href ? (
                <a
                  href={thing.href}
                  className="text-sm text-slate-700 hover:text-blue-800 dark:text-slate-300 dark:hover:text-blue-400"
                  {...(thing.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {thing.title}
                </a>
              ) : (
                <span className="text-slate-700 dark:text-slate-300">{thing.title}</span>
              )}
            </li>
          ))}
        </ul>
      </RailBlock>

      <RailBlock title="Recent">
        <PostLinks posts={recent} />
      </RailBlock>

      <RailBlock title="Explore">
        <ul className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/blog#${cat.slug}`}
                className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-600 transition hover:border-blue-700/40 hover:text-blue-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
              >
                {cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </RailBlock>

      {video ? (
        <RailBlock title="Watch">
          <Link
            href={`/watch/${video.id}`}
            className="block text-sm leading-snug text-slate-700 hover:text-blue-800 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {video.title}
          </Link>
          <Link
            href="/watch"
            className="mt-2 inline-block text-xs font-medium text-blue-800 hover:underline dark:text-blue-400"
          >
            All videos →
          </Link>
        </RailBlock>
      ) : null}

      <RailBlock title="Email">
        <EmailSignup compact />
      </RailBlock>

      <p className="pt-2 text-xs text-slate-400 dark:text-slate-500">
        {siteConfig.tagline}
      </p>
    </aside>
  );
}

export function ExploreMore({ excludeSlug }: { excludeSlug?: string }) {
  return (
    <div className="mt-14 border-t border-slate-200/80 pt-10 dark:border-slate-800 lg:hidden">
      <h2 className="font-serif text-2xl font-semibold text-slate-900 dark:text-slate-50">
        Explore More
      </h2>
      <div className="mt-6">
        <DiscoveryRail excludeSlug={excludeSlug} />
      </div>
    </div>
  );
}
