import Link from "next/link";
import { type ReactNode } from "react";

export function SectionHeading({
  title,
  description,
  href,
  linkLabel,
  children,
}: {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {description}
          </p>
        ) : null}
        {children}
      </div>
      {href ? (
        <Link
          href={href}
          className="hidden shrink-0 text-sm font-medium text-teal-800 underline-offset-4 hover:underline sm:inline dark:text-teal-300"
        >
          {linkLabel ?? "See all →"}
        </Link>
      ) : null}
    </div>
  );
}
