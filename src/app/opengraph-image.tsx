import { ImageResponse } from "next/og";
import { site } from "../content";

export const alt = "Kate Huang — a record store of professional work and personal life";
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
          background: "#f7f2e9",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 22, letterSpacing: 6, color: "#6f6960", fontFamily: "Helvetica, sans-serif" }}>
            KATE HUANG
          </span>
          <span style={{ fontSize: 22, letterSpacing: 6, color: "#6f6960", fontFamily: "Helvetica, sans-serif" }}>
            CAT. No. 001
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 104, color: "#33322f", lineHeight: 1.05 }}>
            Two Sides, One Story.
          </span>
          <span style={{ fontSize: 30, color: "#57524a", marginTop: 22, fontFamily: "Helvetica, sans-serif" }}>
            {site.role}
          </span>
        </div>

        {/* Two sleeves, the way the homepage opens. */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 132, height: 132, background: "#2f2f2b", borderRadius: 3, display: "flex", alignItems: "flex-end", padding: 14 }}>
              <span style={{ fontSize: 17, letterSpacing: 4, color: "#e7ddce", fontFamily: "Helvetica, sans-serif" }}>SIDE A</span>
            </div>
            <div style={{ width: 132, height: 132, background: "#d9c7a8", borderRadius: 3, display: "flex", alignItems: "flex-end", padding: 14 }}>
              <span style={{ fontSize: 17, letterSpacing: 4, color: "#2b2620", fontFamily: "Helvetica, sans-serif" }}>SIDE B</span>
            </div>
          </div>
          <span style={{ fontSize: 22, letterSpacing: 5, color: "#6f6960", fontFamily: "Helvetica, sans-serif" }}>
            SELECTED WORKS · LIFE IN MOTION
          </span>
        </div>
      </div>
    ),
    size
  );
}
