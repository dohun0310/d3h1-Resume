import { Building } from "lucide-react";
import { resume } from "@/data/resume";

export default function ExperiencesCard() {
  const { experience } = resume;

  if (experience.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold">
        경험
      </h2>

      {experience.map((exp, index) => (
        <div key={index} className="flex flex-col gap-2 border-b last:border-none border-gray-100 pb-4">
          <div className="flex items-center gap-2">
            <Building size={20} aria-hidden="true" />
            <h3 className="text-lg font-semibold">{exp.organization}</h3>
          </div>

          <p className="text-sm text-gray-700">
            {exp.role}
          </p>

          <p className="text-sm text-gray-500">
            {exp.period}
          </p>

          <ul className="list-disc list-inside text-base">
            {exp.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
