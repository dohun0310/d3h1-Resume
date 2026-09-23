import { ImageResponse } from "next/og";
import { getProject, getProjectSlugs } from "@/lib/data/projects";
import { OgCard, ogSize, ogContentType, ogFonts } from "@/lib/og";
import { formatPeriod } from "@/lib/utils/period";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "프로젝트 상세";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    <OgCard
      eyebrow={project ? formatPeriod(project.period) : undefined}
      title={project?.title ?? "프로젝트"}
      description={project?.summary}
    />,
    { ...size, fonts: ogFonts },
  );
}
