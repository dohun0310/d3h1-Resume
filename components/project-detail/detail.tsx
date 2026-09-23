import type { Project } from "@/lib/types/resume";
import Hero from "@/components/project-detail/hero";
import Section from "@/components/project-detail/section";
import ScreenshotGrid from "@/components/project-detail/screenshot-grid";
import Card from "@/components/ui/card";

export default function Detail({
  project,
  eagerImages = false,
}: {
  project: Project;
  eagerImages?: boolean;
}) {
  const contributions = project.contributions ?? [];
  const works = project.works ?? [];
  const responsibilities = project.responsibilities ?? [];
  const challenges = project.challenges ?? [];
  const collaboration = project.collaboration ?? [];
  const results = project.results ?? [];
  const awards = project.awards ?? [];
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
          <ul className="flex flex-col gap-4">
            {contributions.map((contribution) => {
              const percent = Math.min(100, Math.max(0, contribution.percent));

              return (
                <li key={contribution.area} className="flex flex-col gap-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{contribution.area}</h3>
                    <span className="text-sm font-semibold tabular-nums text-purple-600 dark:text-purple-300">
                      {percent}%
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    data-print="progress-track"
                    aria-label={`${contribution.area} 기여도`}
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800"
                  >
                    <div
                      data-print="progress-bar"
                      className="h-full rounded-full bg-purple-600 dark:bg-purple-400"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  {contribution.description ? (
                    <p className="text-sm text-gray-700 dark:text-gray-300">{contribution.description}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}

      {works.length > 0 ? (
        <Section title="주요 작업">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {works.map((work) => (
              <li key={work.title}>
                <Card className="flex h-full flex-col gap-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{work.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{work.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {responsibilities.length > 0 ? (
        <Section title="담당 업무">
          <ul className="flex list-inside list-disc flex-col gap-1 text-gray-700 dark:text-gray-300">
            {responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {challenges.length > 0 ? (
        <Section title="문제 해결 과정">
          <ul className="flex flex-col gap-4">
            {challenges.map((challenge) => (
              <li key={challenge.title}>
                <Card className="flex flex-col gap-3">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{challenge.title}</h3>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-400">문제</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{challenge.problem}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-300">해결</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{challenge.solution}</p>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {collaboration.length > 0 ? (
        <Section title="협업 과정">
          <ol className="flex flex-col gap-4">
            {collaboration.map((step) => (
              <li key={step.title} className="flex flex-col gap-2">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{step.title}</h3>
                <ul className="flex list-inside list-disc flex-col gap-1 text-sm text-gray-700 dark:text-gray-300">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      {results.length > 0 ? (
        <Section title="결과">
          <ul className="flex list-inside list-disc flex-col gap-1 text-gray-700 dark:text-gray-300">
            {results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {awards.length > 0 ? (
        <Section title="수상">
          <ul className="flex list-inside list-disc flex-col gap-1 text-gray-700 dark:text-gray-300">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {screenshots.length > 0 ? (
        <Section title="스크린샷">
          <ScreenshotGrid screenshots={screenshots} eager={eagerImages} />
        </Section>
      ) : null}
    </div>
  );
}
