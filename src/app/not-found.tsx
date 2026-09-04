import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800 dark:text-teal-300">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-stone-900 dark:text-stone-50">
        Page not found
      </h1>
      <p className="mt-3 text-stone-600 dark:text-stone-400">
        That link doesn&apos;t lead anywhere on this draft site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 dark:bg-teal-600"
      >
        Back home
      </Link>
    </Container>
  );
}
