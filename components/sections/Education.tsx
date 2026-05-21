import { cn } from "@/lib/utils";
import { resume } from "@/data/resume";

export default function EducationCard() {
  const { education } = resume;

  if (education.length === 0) {
    return null;
  }

  return (
    <></>
  );
}
