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
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        Ideas
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
        Essays & notes
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
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
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-blue-700/40 hover:text-blue-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400/40 dark:hover:text-blue-400"
          >
            {cat.label}
          </a>
        ))}
      </div>

      <div className="mt-10 divide-y divide-slate-200/70 dark:divide-slate-800">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} quiet />
        ))}
      </div>
    </Container>
  );
}
