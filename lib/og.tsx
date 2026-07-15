import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactElement } from "react";

const fontDir = join(process.cwd(), "node_modules/pretendard/dist/web/static/woff");

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export const ogFonts = [
  {
    name: "Pretendard",
    data: readFileSync(join(fontDir, "Pretendard-Regular.woff")),
    weight: 400 as const,
    style: "normal" as const,
  },
  {
    name: "Pretendard",
    data: readFileSync(join(fontDir, "Pretendard-Bold.woff")),
    weight: 700 as const,
    style: "normal" as const,
  },
];

export function OgCard({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        backgroundColor: "#151515",
        fontFamily: "Pretendard",
      }}
    >
      {eyebrow ? (
        <div style={{ display: "flex", fontSize: 36, color: "#A97FFF", marginBottom: 24 }}>
          {eyebrow}
        </div>
      ) : null}
      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
      {description ? (
        <div style={{ display: "flex", fontSize: 34, color: "#919191", marginTop: 32 }}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
