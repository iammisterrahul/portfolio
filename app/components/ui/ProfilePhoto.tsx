"use client";

import Image from "next/image";
import { useState } from "react";
import { CameraIcon } from "./Icons";

type ProfilePhotoProps = {
  /** Portrait for the dark theme (dark background). */
  src: string;
  /** Portrait for the light theme (light background). */
  srcLight: string;
  alt: string;
};

/**
 * Renders the profile photo, falling back to a styled placeholder if the
 * image file doesn't exist yet. Drop a file at `src` (e.g. /public/rahul-rajan.png)
 * and it appears automatically — no code change needed.
 */
export default function ProfilePhoto({
  src,
  srcLight,
  alt,
}: ProfilePhotoProps) {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  // One portrait per theme, swapped in CSS rather than in React. The `dark`
  // class lands on <html> before first paint, so a CSS swap avoids both a
  // theme flash and a hydration mismatch on what is the page's LCP element.
  //
  // A CSS-hidden <img> is still fetched, so both portraits download. Only the
  // pre-paint default (dark) gets `priority` — preloading both would put a
  // guaranteed-unused image on the critical path of the LCP element.
  // `showBox` is not just `show`: the placeholder is a flex column, and a
  // `dark:block` utility on the same element would override that `flex`.
  const variants = [
    {
      key: "dark",
      src,
      show: "hidden dark:block",
      showBox: "hidden dark:flex",
      preload: true,
    },
    {
      key: "light",
      src: srcLight,
      show: "dark:hidden",
      showBox: "dark:hidden",
      preload: false,
    },
  ];

  return (
    <div className="group relative aspect-[4/5] w-full">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent-1 via-accent-2 to-accent-3 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
      {/* Frame — tinted per theme so each portrait's own background blends
          into it while the image loads and at the rounded corners. */}
      <div className="gradient-border relative h-full w-full overflow-hidden rounded-[2rem] border border-border-soft bg-gradient-to-b from-white to-[#f1f0f6] dark:from-[#12121a] dark:to-[#05050a]">
        {variants.map(({ key, src: variantSrc, show, showBox, preload }) =>
          failed[variantSrc] ? (
            <div
              key={key}
              className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-1/15 via-transparent to-accent-3/15 text-center ${showBox}`}
            >
              <div className="grid h-20 w-20 place-items-center rounded-full border border-dashed border-foreground/30 text-muted">
                <CameraIcon width={30} height={30} />
              </div>
              <p className="px-6 text-sm text-muted">
                Add your photo at{" "}
                <code className="rounded bg-card px-1.5 py-0.5 font-mono text-xs text-foreground">
                  /public{variantSrc}
                </code>
              </p>
            </div>
          ) : (
            <Image
              key={key}
              src={variantSrc}
              alt={alt}
              fill
              // `loading="eager"` still emits a preload in Next 16, so the
              // non-default variant is left on the default lazy path. It sits
              // in the viewport for whoever is in that theme, so it still
              // loads straight away — just without a preload hint competing
              // with the portrait most visitors will actually see.
              {...(preload ? { priority: true } : {})}
              sizes="(max-width: 1024px) 320px, 400px"
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${show}`}
              onError={() =>
                setFailed((prev) => ({ ...prev, [variantSrc]: true }))
              }
            />
          )
        )}
      </div>
    </div>
  );
}
