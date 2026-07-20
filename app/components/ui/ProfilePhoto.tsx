"use client";

import Image from "next/image";
import { useState } from "react";

type ProfilePhotoProps = {
  src: string;
  alt: string;
};

/**
 * Renders the profile photo, falling back to a styled placeholder if the
 * image file doesn't exist yet. Drop a file at `src` (e.g. /public/rahul-rajan.png)
 * and it appears automatically — no code change needed.
 */
export default function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative aspect-[4/5] w-full">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent-1 via-accent-2 to-accent-3 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" />
      {/* Frame — always dark so a portrait with a dark/black background
          blends seamlessly in both light and dark themes. */}
      <div className="gradient-border relative h-full w-full overflow-hidden rounded-[2rem] border border-border-soft bg-gradient-to-b from-[#12121a] to-[#05050a]">
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 320px, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-1/15 via-transparent to-accent-3/15 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full border border-dashed border-foreground/30 text-3xl">
              📸
            </div>
            <p className="px-6 text-sm text-muted">
              Add your photo at{" "}
              <code className="rounded bg-card px-1.5 py-0.5 font-mono text-xs text-foreground">
                /public/rahul-rajan.png
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
