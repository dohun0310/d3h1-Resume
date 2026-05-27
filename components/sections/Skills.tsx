import { CodeXml, SquareCode, ToolCase, CircleEllipsis, type LucideIcon } from "lucide-react";
import { resume } from "@/data/resume";
import type { Skill } from "@/types/resume";

const SKILL_CATEGORIES = [
  { key: "language", label: "언어", icon: CodeXml },
  { key: "framework", label: "프레임워크", icon: SquareCode },
  { key: "tool", label: "도구", icon: ToolCase },
  { key: "other", label: "기타", icon: CircleEllipsis },
] as const satisfies readonly { key: Skill["category"]; label: string; icon: LucideIcon }[];

export default function Skills() {
  const { skills } = resume;

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        기술
      </h2>
      
      <div className="flex flex-col gap-4">
        {SKILL_CATEGORIES.map(({ key, label, icon: Icon }) => {
          const filteredSkills = skills.filter(skill => skill.category === key);

          if (filteredSkills.length === 0) return null;

          return (
            <div key={key} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon size={20} aria-hidden="true" />
                <h3 className="text-lg font-semibold">{label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {filteredSkills.map((skill, index) => (
                  <li key={index} className="w-fit px-4 py-1 rounded-full bg-gray-100 text-sm text-gray-600">
                    {skill.name}
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