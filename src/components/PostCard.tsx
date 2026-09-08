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

function Thumb({ src, quiet }: { src: string; quiet?: boolean }) {
  return (
    <div
      className={
        quiet
          ? "relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200/80 dark:bg-slate-800 dark:ring-slate-700 sm:h-24 sm:w-24"
          : "relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80 dark:bg-slate-800 dark:ring-slate-700"
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
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
      <article className="group border-b border-slate-200/70 py-5 last:border-b-0 dark:border-slate-800">
        <div className="flex gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
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
            <h3 className="mt-1.5 font-serif text-xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-800 dark:text-slate-50 dark:group-hover:text-blue-400">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {post.description}
            </p>
          </div>
          {post.image ? <Thumb src={post.image} quiet /> : null}
        </div>
      </article>
    );
  }

  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white/60 p-5 transition hover:border-blue-700/25 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-blue-400/25">
      {post.image ? <Thumb src={post.image} /> : null}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-800 dark:text-slate-50 dark:group-hover:text-blue-400">
        <Link
          href={`/blog/${post.slug}`}
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {post.description}
      </p>
    </article>
  );
}
