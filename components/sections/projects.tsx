import ProjectCard from "@/components/project-card";
import type { Project } from "@/types/resume";

export default function Projects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">프로젝트</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
