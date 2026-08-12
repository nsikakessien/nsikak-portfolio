import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#020617", // slate-950
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 600,
          color: "#22d3ee", // cyan-400
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "20px",
        }}
      >
        Full-Stack Software Engineer
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 800,
          color: "#f8fafc",
          lineHeight: 1.1,
          marginBottom: "20px",
        }}
      >
        Building scalable, high-performance web applications.
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#94a3b8", // slate-400
        }}
      >
        Next.js • TypeScript • Node.js • PostgreSQL
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
