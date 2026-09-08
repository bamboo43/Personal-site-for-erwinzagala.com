import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/Container";
import { DiscoveryRail, ExploreMore } from "@/components/DiscoveryRail";
import { JsonLd } from "@/components/JsonLd";
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

  const canonical = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${siteConfig.url}${canonical}`,
      siteName: siteConfig.name,
      locale: "en_PH",
      authors: [siteConfig.name],
      ...(post.image
        ? { images: [{ url: post.image, alt: post.title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.image ? { images: [post.image] } : {}),
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

  const postUrl = `${siteConfig.url}/blog/${post.slug}`;
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    isAccessibleForFree: true,
    ...(post.image
      ? { image: [`${siteConfig.url}${post.image}`] }
      : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <Container width="rail" className="py-10 sm:py-14">
      <JsonLd data={blogPostingJsonLd} />
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
            {post.image ? (
              <div className="mt-6 max-w-2xl overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt=""
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : null}
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
