import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-stone-200/80 bg-[#f3efe8] dark:border-stone-800 dark:bg-stone-950">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg text-stone-900 dark:text-stone-50">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-sm text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            Lawyer · Educator · Builder — based in the Philippines.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-stone-600 dark:text-stone-400 sm:items-end">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/about" className="hover:text-teal-800 dark:hover:text-teal-300">
              About
            </Link>
            <Link href="/blog" className="hover:text-teal-800 dark:hover:text-teal-300">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-teal-800 dark:hover:text-teal-300">
              Contact
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-teal-800 dark:hover:text-teal-300"
            >
              Email
            </a>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-500">
            © {year} {siteConfig.name}. Draft site for {siteConfig.url.replace("https://", "")}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
