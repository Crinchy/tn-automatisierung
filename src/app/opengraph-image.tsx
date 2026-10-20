import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "TN Automatisierung: Gute Logik. Starke Maschinen. Tommy Nestmann, Industrieautomatisierung.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SIGNAL = "#3572c2";
const SIGNAL_LIGHT = "#c3dafa";
const LIME = "#e7edb2";

const FOCUS_AREAS = [
  "TIA Portal / Programmarchitektur",
  "Sondermaschinenbau",
  "Selbstständig seit 2015",
];

export default async function OpengraphImage() {
  const [archivoBlack, archivoSemiBold, watermark] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/archivo-900.woff")),
    readFile(join(process.cwd(), "src/assets/fonts/archivo-600.woff")),
    readFile(join(process.cwd(), "public/tn-wasserzeichen.svg"), "base64"),
  ]);

  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 72px 56px",
        backgroundColor: SIGNAL,
        color: "white",
        fontFamily: "Archivo",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse renders plain img elements */}
      <img
        src={`data:image/svg+xml;base64,${watermark}`}
        alt=""
        width={700}
        height={303}
        style={{ position: "absolute", top: 150, right: -70, opacity: 0.13 }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Tommy Nestmann / Industrieautomatisierung
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 36,
            fontSize: 124,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.04em",
          }}
        >
          <span>GUTE LOGIK.</span>
          <span>STARKE</span>
          <span style={{ color: SIGNAL_LIGHT }}>MASCHINEN.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 32,
          paddingTop: 28,
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          color: SIGNAL_LIGHT,
          fontSize: 16,
          whiteSpace: "nowrap",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {FOCUS_AREAS.map((area) => (
          <div
            key={area}
            style={{
              display: "flex",
              flexShrink: 0,
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ width: 9, height: 9, backgroundColor: LIME }} />
            {area}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivoBlack, weight: 900, style: "normal" },
        {
          name: "Archivo",
          data: archivoSemiBold,
          weight: 600,
          style: "normal",
        },
      ],
    },
  );
}
