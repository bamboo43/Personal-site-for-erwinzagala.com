import { type ReactNode } from "react";

const widths = {
  narrow: "max-w-2xl",
  default: "max-w-3xl",
  wide: "max-w-5xl",
  rail: "max-w-6xl",
} as const;

export function Container({
  children,
  className = "",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: keyof typeof widths;
}) {
  return (
    <div className={`mx-auto w-full ${widths[width]} px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
