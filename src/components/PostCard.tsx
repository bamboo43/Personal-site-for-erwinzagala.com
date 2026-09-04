import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

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

export function PostCard({
  post,
  quiet = false,
}: {
  post: PostMeta;
  quiet?: boolean;
}) {
  if (quiet) {
    return (
      <article className="group border-b border-stone-200/70 py-5 last:border-b-0 dark:border-stone-800">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
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
        <h3 className="mt-1.5 font-serif text-xl font-semibold tracking-tight text-stone-900 group-hover:text-teal-800 dark:text-stone-50 dark:group-hover:text-teal-300">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {post.description}
        </p>
      </article>
    );
  }

  return (
    <article className="group rounded-2xl border border-stone-200/80 bg-white/60 p-5 transition hover:border-teal-700/25 dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-teal-400/25">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-stone-900 group-hover:text-teal-800 dark:text-stone-50 dark:group-hover:text-teal-300">
        <Link
          href={`/blog/${post.slug}`}
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {post.description}
      </p>
    </article>
  );
}
