import { ImageResponse } from "next/og";

export const alt = "Erwin Zagala — Make It EZ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "72px 80px",
          background: "linear-gradient(145deg, #0f172a 0%, #1e3a5f 55%, #1e40af 100%)",
          color: "#f8fafc",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#93c5fd",
            fontWeight: 600,
          }}
        >
          Make It EZ
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Erwin Zagala
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "#cbd5e1",
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          Ideas, essays, teaching, and tools — making complicated things easier.
        </div>
      </div>
    ),
    { ...size },
  );
}
