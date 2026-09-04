import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl font-semibold text-slate-900 dark:text-slate-50">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        That link doesn&apos;t lead anywhere here.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
      >
        Back home
      </Link>
    </Container>
  );
}
