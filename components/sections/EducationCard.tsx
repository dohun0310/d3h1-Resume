import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { resume } from "@/data/resume";

export default function EducationCard() {
  const { education } = resume;

  if (education.length === 0) {
    return null;
  }

  return (
    <div className={cn("w-full flex flex-col gap-4")}>
      <h2 className="text-2xl font-bold">
        학력
      </h2>
      
      {education.map((edu, index) => (
        <div key={index} className="flex flex-col gap-2 border-b last:border-none border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <GraduationCap size={20} aria-hidden="true" />
            <h3 className="text-lg font-semibold">{edu.school}</h3>
          </div>

          <p className="text-sm text-gray-700">
            {edu.major} ({edu.degree})
          </p>

          <p className="text-sm text-gray-500">
            {edu.period}
          </p>

          {edu.description && (
            <p className="text-base">
              {edu.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
