import Link from "next/link";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#faf8f5]/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-stone-900 transition hover:text-teal-800 dark:text-stone-50 dark:hover:text-teal-300"
        >
          Erwin Zagala
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Primary" className="flex items-center gap-0.5 sm:gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
