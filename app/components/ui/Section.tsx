import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/** Consistent section shell: anchor id, centered heading block, container width. */
export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative z-10 mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      <Reveal className="mb-12 max-w-2xl">
        {eyebrow && (
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-accent-2">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
      </Reveal>
      {children}
    </section>
  );
}
