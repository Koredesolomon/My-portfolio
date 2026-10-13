import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f4f2ee",
          color: "#0d0d0d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#77756f" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#009767" }} />
          {site.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ fontSize: 48, color: "#009767", marginTop: 24 }}>{site.role}</div>
        </div>
        <div style={{ fontSize: 28, color: "#77756f", maxWidth: 900 }}>
          React · Next.js · JavaScript · PHP · AI-powered products
        </div>
      </div>
    ),
    size,
  );
}
