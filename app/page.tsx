import Link from "next/link";
import { resume } from "@/lib/data/resume";
import PrintButton from "@/components/print-button";
import Card from "@/components/ui/card";
import { buttonClassName } from "@/components/ui/button";
import Profile from "@/components/sections/profile";
import Introduction from "@/components/sections/introduction";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Experiences from "@/components/sections/experiences";
import Projects from "@/components/sections/projects";

export default function Home() {
  const { profile, skills, education, experience, projects } = resume;

  return (
    <div className="min-h-dvh bg-gray-50 font-sans dark:bg-black">
      <div className="print-hidden fixed right-4 top-4 z-50 flex gap-2">
        <Link href="/projects/print" className={buttonClassName("ghost", "shadow-lg")}>
          프로젝트 PDF
        </Link>
        <PrintButton />
      </div>
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="resume-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <Card className="md:col-span-2 lg:col-span-12">
            <Profile profile={profile} />
          </Card>
          <Card className="md:col-span-2 lg:col-span-8">
            <Introduction introduction={profile.introduction} />
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
