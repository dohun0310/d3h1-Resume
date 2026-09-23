import { blogProject } from "./blog";
import { shuTimetableMasterProject } from "./shu-timetable-master";
import { shinhanQnaProject } from "./shinhan-qna";
import { comentorProject } from "./comentor";
import { voiceHomeSecureProject } from "./voice-home-secure";

import type { Project } from "@/lib/types/resume";

export const projects: Project[] = [
  blogProject,
  shinhanQnaProject,
  voiceHomeSecureProject,
  comentorProject,
  shuTimetableMasterProject,
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}
