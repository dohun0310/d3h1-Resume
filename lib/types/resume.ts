export type Profile = {
  name: string;
  email: string;
  github: string;
  blog: string;
  website: string;
  title: string;
  summary: string;
  introduction: string;
}

export type Skill = {
  name: string;
  category: "language" | "framework" | "tool" | "other";
}

export type Education = {
  school: string;
  major: string;
  degree: string;
  period: string;
  description: string;
}

export type ProjectLink = {
  label: string;
  href: string;
}
export type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
}
export type ProjectPeriod = {
  start: string;
  end?: string;
  ongoing?: boolean;
}
export type Contribution = {
  area: string;
  percent: number;
  description?: string;
}
export type ProjectWork = {
  title: string;
  description: string;
}
export type ProjectChallenge = {
  title: string;
  problem: string;
  solution: string;
}
export type CollaborationStep = {
  title: string;
  items: string[];
}
export type Project = {
  slug: string;
  title: string;
  period: ProjectPeriod;
  summary: string;
  role: string;
  overview: string;
  stack: string[];
  contributions: Contribution[];
  works: ProjectWork[];
  responsibilities?: string[];
  challenges?: ProjectChallenge[];
  results?: string[];
  collaboration?: CollaborationStep[];
  awards?: string[];
  thumbnail: string;
  screenshots?: Screenshot[];
  links?: ProjectLink[];
}

export type Experience = {
  organization: string;
  role: string;
  period: string;
  bullets: string[];
}

export type Resume = {
  profile: Profile;
  skills: Skill[];
  education: Education[];
  projects: Project[];
  experience: Experience[];
}
