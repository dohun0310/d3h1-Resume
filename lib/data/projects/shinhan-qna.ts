import type { Project } from "@/lib/types/resume";

export const shinhanQnaProject: Project = {
  slug: "shinhan-qna",
  title: "신한Q&A",

  period: {
    start: "2025.07",
    end: "2026.04",
  },

  summary:
    "신한대학교 소프트웨어융합학과 학생들이 질문하고 스터디, 프로젝트 팀원을 모집할 수 있는 학과 커뮤니티 서비스입니다.",

  role: "UI 디자인, 프론트엔드 개발",

  overview:
    "학과 학생들이 수업과 학과 운영에 대한 의견을 남기고 답변을 받을 수 있는 서비스로 시작했습니다. 이후 자유게시판, Q&A, 프로젝트와 스터디 모집 게시판을 갖춘 학과 커뮤니티로 방향을 바꾸면서 프론트엔드를 새로 만들었습니다. 새 버전은 학생용 앱과 관리자용 앱을 Turborepo 모노레포로 나누고, UI, API, 타입을 공통 패키지로 함께 사용하도록 구성했습니다. 기획 1명, 안드로이드 1명, 백엔드 1명, 디자인과 프론트엔드 1명으로 구성된 팀에서 서비스 디자인과 웹 프론트엔드를 맡았습니다.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Turborepo",
    "TanStack Query",
  ],

  contributions: [
    {
      area: "UI 디자인",
      percent: 100,
      description:
        "학생용, 관리자용 화면과 공통 컴포넌트, 다크모드를 포함한 디자인 시스템을 설계했습니다.",
    },
    {
      area: "프론트엔드 개발",
      percent: 100,
      description:
        "레거시 버전과 새 버전의 학생용, 관리자용 웹 프론트엔드를 모두 개발했습니다.",
    },
    {
      area: "인증 및 BFF 구성",
      percent: 100,
      description:
        "학생과 관리자 인증, 사이버캠퍼스 학생 검증, Route Handler 기반 API 프록시를 구현했습니다.",
    },
  ],

  works: [
    {
      title: "Turborepo 모노레포 구성",
      description:
        "학생용 앱과 관리자용 앱을 분리하고, UI 컴포넌트, API 클라이언트, 타입을 공통 패키지로 만들어 두 앱이 함께 사용하도록 구성했습니다.",
    },
    {
      title: "커뮤니티 기능",
      description:
        "자유게시판, Q&A, 프로젝트 모집, 스터디 모집 게시판과 게시글, 댓글 작성, 좋아요, 신고 기능을 구현했습니다. 서버 상태는 TanStack Query로 관리하고 변경 후 필요한 목록만 다시 불러오도록 했습니다.",
    },
    {
      title: "사이버캠퍼스 학생 검증",
      description:
        "회원가입 시 사이버캠퍼스 계정으로 로그인해 학적 정보를 확인하고, 소프트웨어융합학과 학생만 가입할 수 있도록 만들었습니다.",
    },
    {
      title: "BFF와 쿠키 기반 인증",
      description:
        "브라우저가 백엔드를 직접 호출하지 않도록 Route Handler에서 요청을 대신 전달하고, 토큰은 HttpOnly 쿠키로 관리했습니다. 로그인, 로그아웃, 토큰 갱신도 Route Handler로 처리했습니다.",
    },
    {
      title: "관리자 대시보드",
      description:
        "신고된 게시글과 댓글을 확인하고 삭제할 수 있는 관리자 화면을 만들었습니다. 모바일에서는 사이드바를 드로어로 바꾸고 신고 표는 가로로 스크롤되도록 했습니다.",
    },
    {
      title: "접근성과 다크모드",
      description:
        "Modal, Tabs, Dropdown 등 공통 컴포넌트에 ARIA 속성과 키보드 조작을 추가했습니다. 색상을 시맨틱 토큰으로 정리해 모든 화면에 다크모드를 적용했습니다.",
    },
  ],

  responsibilities: [
    "서비스 UI 디자인과 디자인 시스템 설계",
    "레거시 Next.js 프론트엔드 개발",
    "Turborepo 기반 새 프론트엔드 설계와 개발",
    "학생용 커뮤니티 화면 개발",
    "관리자 대시보드 개발",
    "카카오 로그인, JWT 인증과 사이버캠퍼스 학생 검증 구현",
    "Route Handler 기반 BFF 구성과 API 연동",
    "접근성, 반응형, 다크모드 대응",
  ],

  challenges: [
    {
      title: "한 앱에 섞여 있던 학생 기능과 관리자 기능",
      problem:
        "레거시 버전은 학생 화면과 관리자 화면이 한 앱에 함께 있어, 페이지마다 관리자인지 판별하는 코드와 미들웨어의 리다이렉트 조건이 계속 늘어났습니다.",
      solution:
        "새 버전에서는 Turborepo로 학생용 앱과 관리자용 앱을 완전히 분리했습니다. 공통 UI, API 클라이언트, 타입은 패키지로 나눠 두 앱이 같은 코드를 사용하면서도 인증과 라우트 보호는 각자 관리하도록 만들었습니다.",
    },
    {
      title: "수동으로 진행하던 학생 인증",
      problem:
        "레거시 버전은 학생증 사진을 올리면 관리자가 직접 확인해 승인하는 방식이라, 가입까지 시간이 걸리고 관리자가 매번 요청을 처리해야 했습니다.",
      solution:
        "회원가입 과정에서 사이버캠퍼스에 로그인해 학적 정보를 바로 확인하도록 바꿨습니다. 로그인 실패, 다른 학과, 학적 정보 확인 실패를 구분해 안내하고, 확인이 끝난 학생만 다음 단계로 넘어가도록 회원가입을 2단계로 나눴습니다.",
    },
    {
      title: "학생과 관리자 로그인 상태 충돌",
      problem:
        "학생용 앱과 관리자용 앱이 같은 이름의 인증 쿠키를 사용해, 한쪽에 로그인하면 다른 쪽의 로그인 상태에 영향을 줄 수 있었습니다.",
      solution:
        "학생용 앱은 student_, 관리자용 앱은 admin_ 접두사를 붙여 인증 쿠키를 완전히 분리했습니다.",
    },
    {
      title: "로그인 후 리다이렉트를 악용한 외부 이동",
      problem:
        "로그인 후 원래 보던 페이지로 돌아가도록 경로를 쿼리로 받으면, 외부 주소를 넣어 사용자를 다른 사이트로 보낼 수 있었습니다.",
      solution:
        "리다이렉트 경로가 서비스 내부 경로인지 확인한 뒤에만 이동하도록 Open Redirect 방어를 추가했습니다.",
    },
  ],

  results: [
    "학생용, 관리자용 앱을 하나의 모노레포에서 공통 패키지로 함께 관리",
    "학생증 사진 확인 방식을 사이버캠퍼스 자동 검증으로 바꿔 관리자 승인 과정 제거",
    "공통 UI 컴포넌트에 키보드 조작과 ARIA 속성 적용",
    "학생용, 관리자용 전체 화면 다크모드와 반응형 대응",
  ],

  thumbnail: "/projects/shinhan-qna/thumb.png",

  screenshots: [
    {
      src: "/projects/shinhan-qna/screenshot-1.png",
      alt: "학생용 로그인 전 화면",
      caption: "학생용 로그인 전 화면",
    },
    {
      src: "/projects/shinhan-qna/screenshot-2.png",
      alt: "학생용 프로젝트 모집 작성 화면",
      caption: "학생용 프로젝트 모집 작성 화면",
    },
    {
      src: "/projects/shinhan-qna/screenshot-3.png",
      alt: "학생용 스터디 모집 게시글 화면",
      caption: "학생용 스터디 모집 게시글 화면",
    },
    {
      src: "/projects/shinhan-qna/screenshot-4.png",
      alt: "관리자용 메인 화면",
      caption: "관리자용 메인 화면",
    },
    {
      src: "/projects/shinhan-qna/screenshot-5.png",
      alt: "관리자용 신고 관리 화면",
      caption: "관리자용 신고 관리 화면",
    },
    {
      src: "/projects/shinhan-qna/screenshot-6.png",
      alt: "관리자용 게시글 관리 화면",
      caption: "관리자용 게시글 관리 화면",
    },
  ],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/ShinhanQNA/ShinhanQNA-Frontend-New",
    },
    {
      label: "GitHub (레거시)",
      href: "https://github.com/ShinhanQNA/ShinhanQNA-Frontend",
    },
  ],
};
