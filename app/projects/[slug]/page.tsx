import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { resume } from "@/lib/data/resume";
import Hero from "@/components/project-detail/hero";
import Section from "@/components/project-detail/section";
import ScreenshotGrid from "@/components/project-detail/screenshot-grid";

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

  const contributions = project.contributions ?? [];
  const results = project.results ?? [];
  const screenshots = project.screenshots ?? [];

  return (
    <div className="min-h-dvh bg-gray-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-4 py-16 sm:px-6 lg:py-24">
        <Hero
          title={project.title}
          period={project.period}
          role={project.role}
          stack={project.stack}
          links={project.links}
        />

        <Section title="개요">
          <p className="text-gray-700 dark:text-gray-300">{project.overview}</p>
        </Section>

        {contributions.length > 0 ? (
          <Section title="기여도">
            <ul className="flex flex-col gap-3">
              {contributions.map((contribution, index) => (
                <li key={index} className="flex flex-col gap-1">
                  {typeof contribution.percent === "number" ? (
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-300">
                      {contribution.percent}%
                    </span>
                  ) : null}
                  <p className="text-gray-700 dark:text-gray-300">{contribution.description}</p>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {project.problem ? (
          <Section title="문제">
            <p className="text-gray-700 dark:text-gray-300">{project.problem}</p>
          </Section>
        ) : null}

        {project.solution ? (
          <Section title="해결">
            <p className="text-gray-700 dark:text-gray-300">{project.solution}</p>
          </Section>
        ) : null}

        {results.length > 0 ? (
          <Section title="결과">
            <ul className="flex list-inside list-disc flex-col gap-1 text-gray-700 dark:text-gray-300">
              {results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </Section>
        ) : null}

        {screenshots.length > 0 ? (
          <Section title="스크린샷">
            <ScreenshotGrid screenshots={screenshots} />
          </Section>
        ) : null}

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
