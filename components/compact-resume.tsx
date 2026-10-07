import type { ReactNode } from "react";
import Image from "next/image";
import { Mail, Globe, FileText, type LucideIcon } from "lucide-react";
import GithubIcon from "@/components/icons/github-icon";
import { formatPeriodAndRole } from "@/lib/utils/period";
import type { Resume, Skill } from "@/lib/types/resume";

const SKILL_LABELS: Record<Skill["category"], string> = {
  language: "언어",
  framework: "프레임워크",
  tool: "도구",
};

function CompactSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="border-b border-gray-200 pb-1 text-base font-bold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}

// 채용용 압축 이력서. 화면에서는 숨기고 인쇄할 때만 출력한다.
export default function CompactResume({ resume }: { resume: Resume }) {
  const { profile, skills, education, experience, projects } = resume;
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  const groupedSkills = Object.groupBy(skills, (skill) => skill.category);
  const contacts: { label: string; value: string; href: string; icon: LucideIcon | typeof GithubIcon; external: boolean }[] = [
    { label: "이메일", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
    { label: "깃허브", value: profile.github, href: profile.github, icon: GithubIcon, external: true },
    { label: "블로그", value: profile.blog, href: profile.blog, icon: Globe, external: true },
    { label: "이력서", value: profile.website, href: profile.website, icon: FileText, external: true },
  ];

  return (
    <div className="hidden flex-col gap-5 px-12 py-10 text-sm text-gray-800 box-decoration-clone print:flex">
      <header className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-purple-700">{profile.title}</p>
          <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
          <dl className="mt-1 grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-0.5">
            {contacts.map(({ label, value, href, icon: Icon, external }) => (
              <div key={label} className="contents">
                <dt className="flex items-center gap-1.5 text-gray-600">
                  <Icon size={14} className="shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </dt>
                <dd>
                  <a
                    href={href}
                    className={external ? "text-purple-700" : "text-gray-800"}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <Image
          src="/profile.jpg"
          alt="프로필 사진"
          width={72}
          height={96}
          className="shrink-0 object-cover"
        />
      </header>

      <CompactSection title="자기소개">
        <p className="whitespace-pre-line">{profile.introduction}</p>
      </CompactSection>

      <CompactSection title="대표 프로젝트">
        <div className="flex flex-col gap-4">
          {featured.map((project) => (
            <article key={project.slug} className="flex break-inside-avoid flex-col gap-1">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-bold text-gray-900">{project.title}</h3>
                <span className="shrink-0 text-gray-600">{formatPeriodAndRole(project.period, project.role)}</span>
              </div>
              <p className="text-gray-600">{project.stack.join(", ")}</p>
              <ul className="flex list-disc flex-col gap-0.5 pl-5">
                {(project.highlights ?? []).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </CompactSection>

      {others.length > 0 ? (
        <CompactSection title="기타 프로젝트">
          <ul className="flex flex-col gap-1.5">
            {others.map((project) => (
              <li key={project.slug} className="break-inside-avoid">
                <span className="font-semibold text-gray-900">{project.title}</span>
                <span className="text-gray-600"> · {formatPeriodAndRole(project.period, project.role)}</span>
                <p>{project.summary}</p>
              </li>
            ))}
          </ul>
        </CompactSection>
      ) : null}

      <CompactSection title="경험">
        {experience.map((exp) => (
          <div key={exp.organization} className="flex break-inside-avoid flex-col gap-1">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold text-gray-900">
                {exp.organization}
                <span className="font-normal text-gray-600"> · {exp.role}</span>
              </h3>
              <span className="shrink-0 text-gray-600">{exp.period}</span>
            </div>
            <ul className="flex list-disc flex-col gap-0.5 pl-5">
              {exp.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </CompactSection>

      <div className="grid grid-cols-2 gap-6">
        <CompactSection title="기술">
          <dl className="flex flex-col gap-1">
            {(Object.keys(SKILL_LABELS) as Skill["category"][]).map((category) =>
              groupedSkills[category]?.length ? (
                <div key={category} className="flex gap-2">
                  <dt className="shrink-0 font-semibold text-gray-900">{SKILL_LABELS[category]}</dt>
                  <dd>{groupedSkills[category].map((skill) => skill.name).join(", ")}</dd>
                </div>
              ) : null,
            )}
          </dl>
        </CompactSection>

        <CompactSection title="학력">
          {education.map((edu) => (
            <div key={edu.school} className="flex flex-col gap-0.5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-bold text-gray-900">{edu.school}</h3>
                <span className="shrink-0 text-gray-600">{edu.period}</span>
              </div>
              <p>
                {edu.major} ({edu.degree})
              </p>
            </div>
          ))}
        </CompactSection>
      </div>
    </div>
  );
}
