import type { MetadataRoute } from "next";
import { profile, siteConfig } from "./data/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.title}`,
    short_name: siteConfig.shortName,
    description: profile.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#08080c",
    theme_color: "#08080c",
    icons: [
      { src: "/icon.png", sizes: "128x128", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
