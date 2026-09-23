import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { resume } from "@/lib/data/resume";
import { getProject, getProjectSlugs } from "@/lib/data/projects";
import PageShell from "@/components/page-shell";
import BackLink from "@/components/back-link";
import Detail from "@/components/project-detail/detail";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const brandedTitle = `${project.title} | ${resume.profile.name}`;

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: brandedTitle,
      description: project.summary,
      type: "article",
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <PageShell>
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 py-16 sm:px-6 lg:py-24">
        <Detail project={project} />
        <BackLink className="print-hidden" />
      </main>
    </PageShell>
  );
}
