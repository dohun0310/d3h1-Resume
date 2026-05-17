export type Profile = {
  name: string;
  email: string;
  github: string;
  blog: string;
  title: string;
  introduction: string;
}

export type Skill = {
  name: string;
  category: 'language'|'framework'|'tool'|'other';
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
export type Contribution = {
  percent?: number;
  description: string;
}
export type Project = {
  slug: string;
  title: string;
  period: string;
  role?: string;
  stack: string[];
  summary: string;
  thumbnail: string;
  highlights?: string[];
  overview: string;
  contribution?: Contribution;
  problem?: string;
  solution?: string;
  results?: string[];
  screenshots?: Screenshot[];
  links?: ProjectLink[];
};

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
