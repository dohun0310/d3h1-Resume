import Link from "next/link";
import type { Metadata } from "next";
import { resume } from "@/lib/data/resume";
import PrintButton from "@/components/print-button";
import Detail from "@/components/project-detail/detail";
import { buttonClassName } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "프로젝트 모아보기",
};

export default function ProjectsPrintPage() {
  const { projects } = resume;

  return (
    <div className="min-h-dvh bg-gray-50 font-sans dark:bg-black">
      <div className="print-hidden fixed right-4 top-4 z-50 flex gap-2">
        <Link href="/" className={buttonClassName("ghost", "shadow-lg")}>
          메인으로
        </Link>
        <PrintButton />
      </div>

      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-4 py-16 sm:px-6 lg:py-24">
        {projects.map((project) => (
          <article key={project.slug} className="projects-print-item">
            <Detail project={project} />
          </article>
        ))}
      </main>
    </div>
  );
}
