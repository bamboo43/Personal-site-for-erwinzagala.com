import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { VideoCard } from "@/components/VideoCard";
import { getVideos } from "@/lib/videos";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Watch",
  description:
    "Videos and explainers from Erwin Zagala and Legal Guide Philippines — teaching made clearer.",
  openGraph: {
    title: `Watch · ${siteConfig.name}`,
    description: "Full Legal Guide Philippines video library on erwinzagala.com.",
  },
};

export default function WatchPage() {
  const videos = getVideos();

  return (
    <Container width="wide" className="py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
        Watch
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
        Teaching & explainers
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
        {videos.length} videos from{" "}
        <a
          href={siteConfig.links.legalGuide}
          className="font-medium text-teal-800 underline-offset-4 hover:underline dark:text-teal-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Legal Guide Philippines
        </a>
        — plain-language law explainers. Open one here, or watch on YouTube.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </Container>
  );
}
