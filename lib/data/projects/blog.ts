import type { Project } from "@/lib/types/resume";

export const blogProject: Project = {
  slug: "blog",
  title: "개인 블로그",

  period: {
    start: "2023.04",
    ongoing: true,
  },

  summary:
    "개발하면서 배운 내용과 경험을 기록하기 위해 만든 Next.js 기반의 개인 블로그입니다.",

  role: "기획, 프론트엔드 개발 및 인프라 운영",

  overview:
    "개발하면서 알게 된 내용과 직접 경험한 것들을 기록하기 위해 만든 개인 블로그입니다. 처음에는 Jekyll로 시작했지만 코드를 수정하거나 새로운 기능을 추가하기가 불편해 Next.js로 다시 만들었습니다. 현재는 글 작성부터 검색, 댓글, SEO, 성능 개선과 서버 배포까지 필요한 기능을 직접 개발하고 운영하고 있습니다.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Jenkins",
    "Nginx",
  ],

  contributions: [
    {
      area: "프론트엔드 개발",
      percent: 100,
      description:
        "블로그 화면과 게시글, 검색, 카테고리, 댓글 등의 기능을 개발했습니다.",
    },
    {
      area: "성능 및 SEO 개선",
      percent: 100,
      description:
        "Lighthouse 결과를 바탕으로 성능을 개선하고 검색엔진에 필요한 기능을 적용했습니다.",
    },
    {
      area: "배포 및 운영",
      percent: 100,
      description:
        "Docker, Jenkins와 Nginx를 이용해 직접 배포하고 서버를 운영하고 있습니다.",
    },
  ],

  works: [
    {
      title: "MDX 기반 게시글 관리",
      description:
        "글과 이미지를 한곳에서 관리할 수 있도록 MDX를 사용했습니다. 게시글 정보가 잘못 입력되면 빌드 과정에서 확인할 수 있도록 메타데이터 검증 기능도 추가했습니다.",
    },
    {
      title: "게시글 검색 및 탐색",
      description:
        "제목과 본문을 기준으로 글을 검색할 수 있도록 만들었습니다. 카테고리 분류와 이전·다음 글, 연관 글 기능도 함께 구현했습니다.",
    },
    {
      title: "SEO 적용",
      description:
        "검색엔진과 외부 서비스에서 글을 올바르게 표시할 수 있도록 Open Graph, JSON-LD, Sitemap, robots.txt와 RSS 피드를 적용했습니다.",
    },
    {
      title: "이미지 및 로딩 성능 개선",
      description:
        "화면에 표시되는 크기에 맞는 이미지를 제공하고, 먼저 보이는 이미지와 나중에 불러올 이미지의 우선순위를 나눴습니다.",
    },
    {
      title: "배포 자동화",
      description:
        "코드를 변경하면 Jenkins가 검사와 빌드, Docker 이미지 생성, 실행 테스트와 운영 배포를 차례로 진행하도록 구성했습니다.",
    },
    {
      title: "Blue/Green 배포",
      description:
        "새 버전을 별도의 포트에서 먼저 실행해 확인한 뒤 Nginx가 전달하는 대상을 변경하도록 만들었습니다. 새 버전에 문제가 있으면 기존 버전을 그대로 유지합니다.",
    },
  ],

  responsibilities: [
    "블로그 화면과 콘텐츠 구조 설계",
    "Next.js 기반 프론트엔드 개발",
    "MDX 게시글 관리 기능 구현",
    "검색, 카테고리 및 댓글 기능 구현",
    "웹 성능과 SEO 개선",
    "Docker 실행 환경 구성",
    "Jenkins 배포 자동화",
    "Nginx Blue/Green 배포 및 서버 운영",
  ],

  challenges: [
    {
      title: "유지보수가 어려운 기존 구조",
      problem:
        "처음 사용했던 Jekyll 블로그는 스타일과 기능이 한곳에 섞여 있어 코드를 수정하거나 새로운 기능을 추가하기 어려웠습니다.",
      solution:
        "블로그를 Next.js와 MDX 기반으로 다시 만들고 게시글 처리, 화면 구성과 데이터 관련 코드를 역할에 따라 분리했습니다.",
    },
    {
      title: "외부 호스팅 서비스 의존",
      problem:
        "Vercel에서는 빌드 시간이 길어지고 간헐적으로 빌드가 실패했으며, Cloudflare Workers에서는 국내 접속 요청이 해외 리전으로 전달되는 문제가 있었습니다.",
      solution:
        "기존에 운영하고 있던 OCI 춘천 리전 서버에 블로그를 직접 배포하고, Docker를 이용해 실행 환경을 일정하게 유지했습니다.",
    },
    {
      title: "배포 중 서비스 중단",
      problem:
        "기존 컨테이너를 새로운 컨테이너로 교체하는 동안 짧게는 1초, 길게는 7초 정도 블로그에 접속할 수 없었습니다.",
      solution:
        "두 개의 포트를 번갈아 사용하는 Blue/Green 배포 방식을 적용했습니다. 새 컨테이너가 Health Check와 Smoke Test를 통과한 경우에만 Nginx 연결을 변경하도록 구성했습니다.",
    },
    {
      title: "Nginx 전환 직후 발생한 요청 실패",
      problem:
        "Nginx upstream을 변경한 직후 기존 컨테이너를 제거했을 때 처리 중이던 연결에서 HTTP 502 오류가 발생했습니다.",
      solution:
        "Nginx를 다시 불러온 뒤 기존 연결이 끝날 때까지 10초 동안 기다리고, 이후 이전 컨테이너를 제거하도록 수정했습니다.",
    },
  ],

  results: [
    "Lighthouse 성능 점수를 87점에서 100점으로 개선",
    "LCP를 2.4초에서 0.4초로 단축",
    "배포 중 2,016번의 연속 요청을 보내 실패가 발생하지 않는 것을 확인",
    "새 버전 실행에 실패하면 기존 블로그가 계속 서비스되도록 개선",
    "코드 검사, 빌드, 실행 확인과 운영 배포 과정을 자동화",
    "배포 결과를 Telegram으로 확인할 수 있도록 구성",
  ],

  thumbnail: "/projects/blog/thumb.png",

  screenshots: [
    {
      src: "/projects/blog/screenshot-1.png",
      alt: "블로그 메인 화면",
      caption: "블로그 메인 화면",
    },
    {
      src: "/projects/blog/screenshot-2.png",
      alt: "게시글 화면",
      caption: "게시글 화면",
    },
    {
      src: "/projects/blog/screenshot-3.png",
      alt: "검색 결과 화면",
      caption: "검색 결과 화면",
    },
  ],

  links: [
    {
      label: "블로그",
      href: "https://blog.d3h1.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/dohun0310/d3h1-Blog",
    },
  ],
};