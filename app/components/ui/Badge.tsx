import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

/** Small pill used for skills, tech tags, etc. */
export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border-soft bg-card px-3 py-1 text-sm text-foreground/80 backdrop-blur transition-colors duration-300 hover:border-accent-1 hover:text-foreground ${className}`}
    >
      {children}
    </span>
  );
}
