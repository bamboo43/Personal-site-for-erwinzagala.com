import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on Philippine law, legal practice, teaching, and building products that make hard things easier.",
  openGraph: {
    title: `Blog · ${siteConfig.name}`,
    description:
      "Sample posts on PH law, practice, and making complex topics clearer.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-14 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
        Blog
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
        Writing & notes
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
        Sample posts for this draft site — realistic themes around Philippine law, professional
        practice, and the Make It EZ mindset. Treat them as placeholders until real publishing begins.
      </p>

      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
