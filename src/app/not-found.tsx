import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-stone-900 dark:text-stone-50">
        Page not found
      </h1>
      <p className="mt-3 text-stone-600 dark:text-stone-400">
        That link doesn&apos;t lead anywhere here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 hover:border-stone-400 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100"
      >
        Back home
      </Link>
    </Container>
  );
}
