import { ImageResponse } from "next/og";
import { resume } from "@/lib/data/resume";
import { OgCard, ogSize, ogContentType, ogFonts } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "프로젝트 상세";

export function generateStaticParams() {
  return resume.projects.map((project) => ({ slug: project.slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = resume.projects.find((p) => p.slug === slug);

  return new ImageResponse(
    <OgCard
      eyebrow={project?.period}
      title={project?.title ?? "프로젝트"}
      description={project?.summary}
    />,
    { ...size, fonts: ogFonts },
  );
}
