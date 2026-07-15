import { resume } from "@/lib/data/resume";
import Profile from "@/components/sections/profile";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Experiences from "@/components/sections/experiences";

export default function Home() {
  const { profile, skills, education, experience } = resume;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-12 py-32 px-16 bg-white dark:bg-black">
        <Profile profile={profile} />
        <Skills skills={skills} />
        <Education education={education} />
        <Experiences experience={experience} />
      </main>
    </div>
  );
}
