import { profile } from "@/lib/data/profile";
import { skills } from "@/lib/data/skills";
import { education } from "@/lib/data/education";
import { projects } from "@/lib/data/projects";
import { experience } from "@/lib/data/experience";

import type { Resume } from "@/lib/types/resume";

export const resume: Resume = {
  profile: profile,
  skills: skills,
  education: education,
  projects: projects,
  experience: experience,
};
