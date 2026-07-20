/** Fixed decorative background: floating gradient blobs + subtle grid. */
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      {/* Blobs */}
      <div className="animate-blob-1 absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent-1/30 blur-[100px] sm:h-96 sm:w-96" />
      <div className="animate-blob-2 absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent-3/25 blur-[100px] sm:h-96 sm:w-96" />
      <div className="animate-blob-1 absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-2/20 blur-[110px] sm:h-96 sm:w-96" />
    </div>
  );
}
