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
