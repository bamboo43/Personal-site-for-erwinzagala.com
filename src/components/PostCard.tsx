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

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group rounded-2xl border border-stone-200/80 bg-white/70 p-5 transition hover:border-teal-700/30 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-teal-400/30">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-2 font-serif text-xl font-semibold tracking-tight text-stone-900 group-hover:text-teal-800 dark:text-stone-50 dark:group-hover:text-teal-300">
        <Link href={`/blog/${post.slug}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 rounded-sm">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {post.description}
      </p>
      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
