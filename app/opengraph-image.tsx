import { ImageResponse } from "next/og";
import { profile, siteConfig } from "./data/resume";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          background:
            "radial-gradient(1000px 500px at 15% -10%, #2a1758 0%, transparent 60%), radial-gradient(900px 600px at 100% 120%, #0b3b45 0%, transparent 55%), #08080c",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
              color: "#08080c",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            RR
          </div>
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "6px",
              color: "#9b9baa",
            }}
          >
            PORTFOLIO
          </div>
        </div>

        {/* Middle: name + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 800,
              lineHeight: 1.05,
              backgroundImage: "linear-gradient(120deg, #a78bfa, #f472b6, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: "42px", fontWeight: 600, marginTop: "18px" }}>
            {profile.title}
          </div>
          <div style={{ fontSize: "30px", color: "#9b9baa", marginTop: "10px" }}>
            {profile.stack}
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "26px",
            color: "#9b9baa",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "999px",
              background: "#22d3ee",
            }}
          />
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
