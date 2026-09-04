import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { VideoCard } from "@/components/VideoCard";
import {
  getAllVideoIds,
  getRelatedVideos,
  getVideoById,
} from "@/lib/videos";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllVideoIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const video = getVideoById(id);
  if (!video) return { title: "Video not found" };

  return {
    title: video.title,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      url: `${siteConfig.url}/watch/${video.id}`,
      type: "video.other",
    },
  };
}

function formatDate(date: string) {
  if (!date) return null;
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

export default async function WatchVideoPage({ params }: PageProps) {
  const { id } = await params;
  const video = getVideoById(id);
  if (!video) notFound();

  const related = getRelatedVideos(video.id, 4);
  const dateLabel = formatDate(video.date);

  return (
    <Container width="wide" className="py-10 sm:py-14">
      <Link
        href="/watch"
        className="text-sm font-medium text-blue-800 hover:underline dark:text-blue-400"
      >
        ← All videos
      </Link>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-sm dark:border-slate-800">
        <div className="relative aspect-video w-full">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
          {video.source ? <span>{video.source}</span> : null}
          {video.duration ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{video.duration}</span>
            </>
          ) : null}
          {dateLabel ? (
            <>
              <span aria-hidden="true">·</span>
              <time dateTime={video.date}>{dateLabel}</time>
            </>
          ) : null}
        </div>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-[2.1rem] dark:text-slate-50">
          {video.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {video.description}
        </p>
        <p className="mt-5">
          <a
            href={video.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-800 underline-offset-4 hover:underline dark:text-blue-400"
          >
            Watch on YouTube →
          </a>
        </p>
      </header>

      {related.length > 0 ? (
        <section className="mt-14 border-t border-slate-200/80 pt-10 dark:border-slate-800">
          <h2 className="font-serif text-2xl font-semibold text-slate-900 dark:text-slate-50">
            More from Legal Guide
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Other explainers from the same channel — open one here, or browse the full
            library.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {related.map((item) => (
              <VideoCard key={item.id} video={item} />
            ))}
          </div>
          <Link
            href="/watch"
            className="mt-8 inline-block text-sm font-medium text-blue-800 hover:underline dark:text-blue-400"
          >
            All videos →
          </Link>
        </section>
      ) : null}
    </Container>
  );
}
