import { GraduationCap } from "lucide-react";
import type { Education as EducationType } from "@/types/resume";

export default function Education({ education }: { education: EducationType[] }) {

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        학력
      </h2>
      
      {education.map((edu, index) => (
        <div key={index} className="flex flex-col gap-2 border-b last:border-none border-gray-100 dark:border-gray-800 pb-4">
          <div className="flex items-center gap-2">
            <GraduationCap size={20} aria-hidden="true" />
            <h3 className="text-lg font-semibold">{edu.school}</h3>
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-300">
            {edu.major} ({edu.degree})
          </p>

          <p className="text-sm text-gray-700 dark:text-gray-400">
            {edu.period}
          </p>

          <p className="text-base">
            {edu.description}
          </p>
        </div>
      ))}
    </div>
  );
}
