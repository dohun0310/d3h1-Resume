import { ImageResponse } from "next/og";
import { resume } from "@/lib/data/resume";
import { OgCard, ogSize, ogContentType, ogFonts } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = `${resume.profile.name} 이력서`;

export default function OpengraphImage() {
  const { profile } = resume;

  return new ImageResponse(
    <OgCard eyebrow={profile.title} title={profile.name} description={profile.introduction} />,
    { ...size, fonts: ogFonts },
  );
}
