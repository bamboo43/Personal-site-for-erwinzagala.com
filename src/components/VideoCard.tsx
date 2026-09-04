import Link from "next/link";
import type { Video } from "@/lib/videos";

function formatDate(date: string) {
  if (!date) return null;
  try {
    return new Intl.DateTimeFormat("en-PH", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export function VideoCard({ video }: { video: Video }) {
  const href = `/watch/${video.id}`;
  const thumb = video.youtubeId
    ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
    : null;
  const dateLabel = formatDate(video.date);

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white/70 transition hover:border-teal-700/30 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-teal-400/30"
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-stone-200 to-stone-100 dark:from-stone-800 dark:to-stone-900">
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center bg-stone-900/10 transition group-hover:bg-stone-900/20">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-stone-900/80 text-white shadow-md transition group-hover:scale-105 dark:bg-stone-100/90 dark:text-stone-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          </span>
        </div>
        {video.duration ? (
          <span className="absolute bottom-2 right-2 rounded bg-stone-900/80 px-1.5 py-0.5 text-[10px] font-medium text-white">
            {video.duration}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
          {video.source ? <span>{video.source}</span> : null}
          {video.source && dateLabel ? <span aria-hidden="true">·</span> : null}
          {dateLabel ? <time dateTime={video.date}>{dateLabel}</time> : null}
        </div>
        <h3 className="mt-2 font-serif text-lg font-semibold tracking-tight text-stone-900 group-hover:text-teal-800 dark:text-stone-50 dark:group-hover:text-teal-300">
          {video.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {video.description}
        </p>
      </div>
    </Link>
  );
}
