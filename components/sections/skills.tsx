import { CodeXml, SquareCode, ToolCase, CircleEllipsis, type LucideIcon } from "lucide-react";
import Badge from "@/components/ui/badge";
import type { Skill } from "@/lib/types/resume";

const SKILL_CATEGORIES = [
  { key: "language", label: "언어", icon: CodeXml },
  { key: "framework", label: "프레임워크", icon: SquareCode },
  { key: "tool", label: "도구", icon: ToolCase },
  { key: "other", label: "기타", icon: CircleEllipsis },
] as const satisfies readonly { key: Skill["category"]; label: string; icon: LucideIcon }[];

export default function Skills({ skills }: { skills: Skill[] }) {
  const groupedSkills = Object.groupBy(skills, (skill) => skill.category);

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        기술
      </h2>

      <div className="flex flex-col gap-4">
        {SKILL_CATEGORIES.map(({ key, label, icon: Icon }) => {
          const categorySkills = groupedSkills[key];

          if (!categorySkills?.length) return null;

          return (
            <div key={key} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon size={20} aria-hidden="true" />
                <h3 className="text-lg font-semibold">{label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <li key={index}>
                    <Badge>{skill.name}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}