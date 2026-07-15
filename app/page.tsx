import { resume } from "@/lib/data/resume";
import Card from "@/components/ui/card";
import Profile from "@/components/sections/profile";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Experiences from "@/components/sections/experiences";
import Projects from "@/components/sections/projects";

export default function Home() {
  const { profile, skills, education, experience, projects } = resume;

  return (
    <div className="min-h-dvh bg-gray-50 font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <Card className="md:col-span-2 lg:col-span-8">
            <Profile profile={profile} />
          </Card>
          <Card className="md:col-span-1 lg:col-span-4">
            <Skills skills={skills} />
          </Card>
          <Card className="md:col-span-1 lg:col-span-4">
            <Education education={education} />
          </Card>
          <Card className="md:col-span-2 lg:col-span-8">
            <Experiences experience={experience} />
          </Card>
          <Card className="md:col-span-2 lg:col-span-12">
            <Projects projects={projects} />
          </Card>
        </div>
      </main>
    </div>
  );
}
