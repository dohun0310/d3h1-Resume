import Badge from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import type { ProjectLink } from "@/lib/types/resume";

export default function Hero({
  title,
  period,
  role,
  stack,
  links,
}: {
  title: string;
  period: string;
  role?: string;
  stack: string[];
  links?: ProjectLink[];
}) {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {period}
          {role ? ` · ${role}` : ""}
        </p>
      </div>

      {stack.length > 0 ? (
        <ul className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      ) : null}

      {links && links.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("solid")}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
