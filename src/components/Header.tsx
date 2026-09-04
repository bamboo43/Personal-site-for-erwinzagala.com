import Link from "next/link";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Ideas" },
  { href: "/watch", label: "Watch" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#faf8f5]/85 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/85">
      <Container width="wide" className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link
          href="/"
          className="font-serif text-base font-semibold tracking-tight text-stone-900 transition hover:text-teal-800 sm:text-lg dark:text-stone-50 dark:hover:text-teal-300"
        >
          Erwin Zagala
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          <nav aria-label="Primary" className="flex items-center gap-0.5 overflow-x-auto sm:gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 sm:px-3 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-white"
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
