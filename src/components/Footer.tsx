import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-[#f1f5f9]/80 dark:border-slate-800 dark:bg-slate-950">
      <Container width="wide" className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg text-slate-900 dark:text-slate-50">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {siteConfig.tagline} Make It EZ.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 sm:items-end">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/blog" className="hover:text-blue-800 dark:hover:text-blue-400">
              Ideas
            </Link>
            <Link href="/watch" className="hover:text-blue-800 dark:hover:text-blue-400">
              Watch
            </Link>
            <Link href="/about" className="hover:text-blue-800 dark:hover:text-blue-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-800 dark:hover:text-blue-400">
              Contact
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-blue-800 dark:hover:text-blue-400"
            >
              Email
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
