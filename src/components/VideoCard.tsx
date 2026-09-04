import type { Video } from "@/lib/videos";

function formatDate(date: string) {
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
  const href = video.href || (video.youtubeId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : "#");
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white/70 transition hover:border-teal-700/30 hover:shadow-sm dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-teal-400/30"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="relative aspect-video bg-gradient-to-br from-stone-200 to-stone-100 dark:from-stone-800 dark:to-stone-900">
        <div className="absolute inset-0 flex items-center justify-center">
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
          {video.source ? <span aria-hidden="true">·</span> : null}
          <time dateTime={video.date}>{formatDate(video.date)}</time>
        </div>
        <h3 className="mt-2 font-serif text-lg font-semibold tracking-tight text-stone-900 group-hover:text-teal-800 dark:text-stone-50 dark:group-hover:text-teal-300">
          {video.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {video.description}
        </p>
      </div>
    </a>
  );
}
