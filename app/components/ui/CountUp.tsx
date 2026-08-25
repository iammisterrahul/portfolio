"use client";

import { useEffect, useMemo, useRef } from "react";

type CountUpProps = {
  /** Display value, optionally wrapped in affixes — "5+", "25%", "6". */
  value: string;
  /** Animation length in ms. */
  durationMs?: number;
  /** Hold off this long after scrolling into view. Match the wrapping
   *  <Reveal delay> so the digits don't climb while still faded out. */
  delay?: number;
  className?: string;
};

type Parsed = {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
};

/** Splits "25%" into prefix "", target 25, suffix "%". Null if there's no number. */
function parseValue(value: string): Parsed | null {
  const match = /^(\D*)(\d+(?:\.\d+)?)(.*)$/.exec(value);
  if (!match) return null;

  const [, prefix, digits, suffix] = match;
  const dot = digits.indexOf(".");

  return {
    prefix,
    suffix,
    target: Number(digits),
    decimals: dot === -1 ? 0 : digits.length - dot - 1,
  };
}

/** Cubic ease-out, so the number decelerates into its final value. */
const easeOut = (t: number) => 1 - (1 - t) ** 3;

/* ------------------------------------------------------------------ *
 * Shared driver: one rAF loop and one IntersectionObserver serve every
 * instance on the page, instead of each stat spinning up its own pair.
 * ------------------------------------------------------------------ */

type Job = {
  el: HTMLElement;
  parsed: Parsed;
  duration: number;
  start: number | null;
  last: string;
};

const jobs = new Set<Job>();
let rafId = 0;

function frame(now: number) {
  for (const job of jobs) {
    const { prefix, suffix, target, decimals } = job.parsed;
    job.start ??= now;

    const t =
      job.duration <= 0 ? 1 : Math.min((now - job.start) / job.duration, 1);
    const next = `${prefix}${(target * easeOut(t)).toFixed(decimals)}${suffix}`;

    // Most frames round to the string already on screen — "6" only has seven
    // distinct states across the whole animation, so ~90% of writes would be
    // no-ops that still dirty the DOM. Only write when the text changes.
    if (next !== job.last) {
      job.last = next;
      job.el.textContent = next;
    }

    if (t >= 1) jobs.delete(job);
  }

  rafId = jobs.size > 0 ? requestAnimationFrame(frame) : 0;
}

function startJob(job: Job) {
  jobs.add(job);
  if (rafId === 0) rafId = requestAnimationFrame(frame);
}

const pending = new Map<Element, () => void>();
let observer: IntersectionObserver | null = null;

/** Runs `onEnter` the first time `el` scrolls into view. Returns a detach fn. */
function observeOnce(el: Element, onEnter: () => void) {
  pending.set(el, onEnter);

  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const fn = pending.get(entry.target);
        pending.delete(entry.target);
        observer?.unobserve(entry.target);
        fn?.();
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  observer.observe(el);

  return () => {
    pending.delete(el);
    observer?.unobserve(el);
  };
}

/**
 * Counts a stat up from zero the first time it scrolls into view. Animates
 * once — scrolling back past it doesn't restart the count. Frames are written
 * straight to the text node, so the animation causes no React renders.
 */
export default function CountUp({
  value,
  durationMs = 1400,
  delay = 0,
  className = "",
}: CountUpProps) {
  const parsed = useMemo(() => parseValue(value), [value]);
  const digitsRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = digitsRef.current;
    if (!el || !parsed) return;

    // Reduced motion collapses the duration to zero, which lands on the final
    // value on the first frame — same code path, no animation.
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? 0
      : durationMs;

    let job: Job | null = null;
    let timer = 0;

    const detach = observeOnce(el, () => {
      timer = window.setTimeout(() => {
        job = {
          el,
          parsed,
          duration,
          start: null,
          last: el.textContent ?? "",
        };
        startJob(job);
      }, delay);
    });

    return () => {
      detach();
      clearTimeout(timer);
      if (job) jobs.delete(job);
    };
  }, [parsed, durationMs, delay]);

  // Nothing numeric to animate (or a format we don't recognise) — render as-is.
  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <>
      {/* The ticking digits are hidden from assistive tech: a screen reader
          would otherwise announce every intermediate frame. `tabular-nums`
          keeps glyph widths fixed so the box doesn't jitter while counting. */}
      <span
        ref={digitsRef}
        aria-hidden="true"
        className={`tabular-nums ${className}`}
      >
        {`${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}`}
      </span>
      {/* The real value, announced once. */}
      <span className="sr-only">{value}</span>
    </>
  );
}
