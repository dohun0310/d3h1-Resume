import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";
import type { Project } from "@/types/resume";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-shadow hover:shadow-lg",
        "dark:border-gray-800 dark:bg-gray-900",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 dark:focus-visible:ring-purple-400",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={`${project.title} 썸네일`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {project.period}
            {project.role ? ` · ${project.role}` : ""}
          </p>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300">{project.summary}</p>

        {project.stack.length > 0 ? (
          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </Link>
  );
}
