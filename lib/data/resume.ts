import type { Resume } from "@/lib/types/resume";

export const resume: Resume = {
  profile: {
    name: "홍길동",
    email: "example@example.com",
    github: "https://github.com/username",
    blog: "https://blog.example.com",
    title: "프론트엔드 개발자",
    introduction: "한두 문장으로 본인을 소개하는 글을 적습니다.",
  },
  skills: [
    { name: "TypeScript", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "React", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: "Git", category: "tool" },
    { name: "Figma", category: "tool" },
  ],
  education: [
    {
      school: "OO대학교",
      major: "컴퓨터공학과",
      degree: "학사",
      period: "2021.03 - 2025.02",
      description: "관련 활동이나 성취를 한 줄로 적습니다.",
    },
  ],
  projects: [
    {
      slug: "example-project",
      title: "예시 프로젝트",
      period: "2025.01 - 2025.03",
      role: "프론트엔드",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      summary: "카드에 보일 한두 줄 요약입니다.",
      thumbnail: "/projects/example-project/thumb.jpg",
      highlights: ["핵심 성과 1", "핵심 성과 2"],
      overview: "프로젝트가 무엇이고 왜 만들었는지 설명합니다.",
      contributions: [
        { percent: 60, description: "프론트엔드 전반 구현" },
        { description: "디자인 시스템 설계" },
      ],
      problem: "어떤 문제를 풀려고 했는지 적습니다.",
      solution: "그 문제를 어떻게 해결했는지 적습니다.",
      results: ["결과 1", "결과 2"],
      screenshots: [
        {
          src: "/projects/example-project/screenshot-1.jpg",
          alt: "화면을 설명하는 대체 텍스트",
          caption: "캡션은 선택입니다.",
        },
      ],
      links: [
        { label: "GitHub", href: "https://github.com/username/example-project" },
        { label: "데모", href: "https://example-project.example.com" },
      ],
    },
  ],
  experience: [
    {
      organization: "OO회사",
      role: "프론트엔드 인턴",
      period: "2024.07 - 2024.12",
      bullets: ["담당한 일 1", "담당한 일 2"],
    },
  ],
};
