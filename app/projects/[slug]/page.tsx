import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { resume } from "@/lib/data/resume";
import Detail from "@/components/project-detail/detail";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resume.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = resume.projects.find((p) => p.slug === slug);

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
  const project = resume.projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-dvh bg-gray-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 py-16 sm:px-6 lg:py-24">
        <Detail project={project} />

        <Link
          href="/"
          className="text-sm text-purple-600 hover:underline dark:text-purple-300"
        >
          ← 메인으로 돌아가기
        </Link>
      </main>
    </div>
  );
}
