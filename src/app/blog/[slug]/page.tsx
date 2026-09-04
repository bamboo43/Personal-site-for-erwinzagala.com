import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/Container";
import { DiscoveryRail, ExploreMore } from "@/components/DiscoveryRail";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

function formatDate(date: string) {
  try {
    return new Intl.DateTimeFormat("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <Container width="rail" className="py-10 sm:py-14">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_260px] xl:gap-16">
        <div>
          <Link
            href="/blog"
            className="text-sm font-medium text-blue-800 hover:underline dark:text-blue-400"
          >
            ← Ideas
          </Link>

          <header className="mt-6 max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime}</span>
              {post.category ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{post.category}</span>
                </>
              ) : null}
            </div>
            <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.25rem] dark:text-slate-50">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {post.description}
            </p>
            {post.tags.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </header>

          <article className="prose prose-ez prose-stone mt-10 max-w-2xl dark:prose-invert prose-headings:font-serif prose-headings:font-semibold prose-p:leading-[1.75] prose-li:leading-relaxed prose-a:font-medium">
            <MDXRemote source={post.content} />
          </article>

          {post.sample !== false && (
            <p className="mt-12 max-w-2xl rounded-xl border border-amber-200/80 bg-amber-50/70 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100">
              <strong className="font-semibold">Sample content.</strong> This post is
              placeholder material for the site draft and is not formal legal advice.
            </p>
          )}

          <ExploreMore excludeSlug={post.slug} />
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <DiscoveryRail excludeSlug={post.slug} />
          </div>
        </div>
      </div>
    </Container>
  );
}
