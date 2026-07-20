import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

/** Glass card with an animated gradient border on hover. */
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`gradient-border glass group relative overflow-hidden rounded-2xl border border-border-soft p-6 transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
