import { resume } from "@/data/resume";

export default function ExperiencesCard() {
  const { experience } = resume;

  if (experience.length === 0) {
    return null;
  }

  return (
    <></>
  );
}
