import { siteConfig } from "@/lib/site";

export function EmailSignup({ compact = false }: { compact?: boolean }) {
  const subject = encodeURIComponent("Subscribe me to occasional notes");
  const body = encodeURIComponent(
    "Hi Erwin — please add me for occasional useful notes from erwinzagala.com.\n\nMy email: ",
  );

  if (compact) {
    return (
      <div className="space-y-2">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Occasionally, I&apos;ll send you something useful.
        </p>
        <a
          href={`mailto:${siteConfig.email}?subject=${subject}&body=${body}`}
          className="text-sm font-medium text-blue-800 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Email me to subscribe →
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/60 px-5 py-6 dark:border-slate-800 dark:bg-slate-900/40 sm:px-6">
      <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-slate-50">
        Occasional notes
      </h2>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        Occasionally, I&apos;ll send you something useful — no funnel, no weekly barrage.
        For now this opens a short email; a real list comes later.
      </p>
      <a
        href={`mailto:${siteConfig.email}?subject=${subject}&body=${body}`}
        className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500"
      >
        Email me to subscribe
      </a>
    </div>
  );
}
