import type { Project } from "@/lib/types/resume";
import Hero from "@/components/project-detail/hero";
import Section from "@/components/project-detail/section";
import ScreenshotGrid from "@/components/project-detail/screenshot-grid";

export default function Detail({ project }: { project: Project }) {
  const contributions = project.contributions ?? [];
  const results = project.results ?? [];
  const screenshots = project.screenshots ?? [];

  return (
    <div className="flex flex-col gap-12">
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
    </div>
  );
}
