import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getCategories } from "@/lib/categories";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ideas",
  description:
    "Essays and reflections on clarity, law, teaching, work, and making complicated things easier.",
  openGraph: {
    title: `Ideas · ${siteConfig.name}`,
    description: "Essays, notes, and frameworks from Erwin Zagala.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <Container width="wide" className="py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
        Ideas
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
        Essays & notes
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
        Sample posts for this draft — realistic themes around Philippine law, practice,
        teaching, and the Make It EZ mindset. Treat them as placeholders until real
        publishing begins.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <a
            key={cat.slug}
            id={cat.slug}
            href={`#${cat.slug}`}
            className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-600 transition hover:border-teal-700/40 hover:text-teal-800 dark:border-stone-700 dark:text-stone-300 dark:hover:border-teal-400/40 dark:hover:text-teal-300"
          >
            {cat.label}
          </a>
        ))}
      </div>

      <div className="mt-10 divide-y divide-stone-200/70 dark:divide-stone-800">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} quiet />
        ))}
      </div>
    </Container>
  );
}
