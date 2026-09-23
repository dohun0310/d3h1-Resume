import type { Project } from "@/lib/types/resume";

export const comentorProject: Project = {
  slug: "comentor",
  title: "Comentor",

  period: {
    start: "2025.11",
    end: "2026.04",
  },

  summary:
    "댓글 속 편향과 혐오 표현을 AI로 분석하고 순화된 문장을 제안하는 청소년 미디어 가이드 서비스입니다.",

  role: "프론트엔드 개발",

  overview:
    "청소년이 온라인에서 접하는 댓글을 스스로 비판적으로 바라볼 수 있도록 돕는 AI 가이드 서비스입니다. 댓글을 입력하면 문제가 있는 표현인지 먼저 확인하고, 필요한 경우 순화된 문장을 제안합니다. 이후 욕설/모욕, 성차별, 기타 차별, 혐오 네 가지 항목의 점수를 차트로 보여주어 어떤 부분이 문제인지 한눈에 확인할 수 있습니다. 프론트엔드 1명, 백엔드와 AI 1명, 디자이너 2명으로 구성된 팀에서 프론트엔드를 혼자 맡아 디자이너의 Figma 디자인을 화면으로 구현하고 백엔드 API를 연동했습니다.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Recharts",
  ],

  contributions: [
    {
      area: "프론트엔드 개발",
      percent: 100,
      description:
        "홈, 댓글 교정, 편향 분석 화면과 공통 레이아웃을 개발했습니다.",
    },
    {
      area: "API 연동",
      percent: 100,
      description:
        "Server Action으로 백엔드의 검토, 교정, 분석 API를 연동하고 오류 상황을 처리했습니다.",
    },
    {
      area: "데이터 시각화",
      percent: 100,
      description:
        "Recharts로 편향 분석 결과를 레이더 차트와 방사형 차트로 보여주는 컴포넌트를 만들었습니다.",
    },
  ],

  works: [
    {
      title: "댓글 교정 흐름",
      description:
        "입력한 댓글을 검토 API로 먼저 확인하고, 문제가 있는 경우에만 교정 API를 호출해 순화된 문장을 보여주도록 만들었습니다. 교정 결과에는 그라데이션 애니메이션을 적용했습니다.",
    },
    {
      title: "편향 분석 차트",
      description:
        "네 가지 편향 항목의 점수를 레이더 차트 하나와 항목별 방사형 차트로 함께 보여줍니다. 항목마다 이름, 설명과 색상을 한곳에서 관리하도록 라벨 맵을 두었습니다.",
    },
    {
      title: "차트 컴포넌트 설계",
      description:
        "차트를 Header, Title, Legend, Content 같은 작은 컴포넌트로 나누어 조합하는 구조로 만들었습니다. 화면마다 필요한 요소만 골라 배치할 수 있습니다.",
    },
    {
      title: "입력 편의 기능",
      description:
        "댓글 입력창에 되돌리기와 다시 실행, 음성으로 읽기, 복사, 글자 수 표시 기능을 추가했습니다.",
    },
    {
      title: "디자인 시스템 구성",
      description:
        "Figma 디자인을 기준으로 색상과 텍스트 테마, 폰트를 먼저 정의하고 Button, Logo, Icon 등 공통 컴포넌트를 만들었습니다.",
    },
    {
      title: "공통 레이아웃과 반응형",
      description:
        "Route Group으로 교정과 분석 화면에 공통 사이드바를 적용하고, 모바일부터 데스크톱까지 화면 크기에 맞게 배치가 바뀌도록 구성했습니다.",
    },
  ],

  responsibilities: [
    "Figma 디자인 기반 화면 구현",
    "색상, 텍스트 테마와 공통 컴포넌트 구성",
    "댓글 교정 화면 개발",
    "편향 분석 화면과 차트 컴포넌트 개발",
    "Server Action 기반 백엔드 API 연동",
    "로딩, 오류 상태 처리",
    "반응형 레이아웃과 사이드바 구성",
  ],

  challenges: [
    {
      title: "백엔드 주소 노출과 오류 처리",
      problem:
        "브라우저에서 백엔드 API를 직접 호출하면 서버 주소가 그대로 드러나고, 요청 제한이나 서버 오류가 발생했을 때 화면마다 다르게 대응해야 했습니다.",
      solution:
        "API 호출을 Server Action으로 옮겨 서버 주소를 환경 변수로만 관리했습니다. 요청 제한, 검토 실패, 교정 실패 등 상황별로 오류 코드와 안내 문구를 정해 같은 형태로 반환하도록 만들었습니다.",
    },
    {
      title: "불필요한 교정 요청",
      problem:
        "모든 댓글에 교정 요청을 보내면 문제가 없는 문장까지 교정 API를 거치게 되어 응답이 느려지고 서버에 부담이 생겼습니다.",
      solution:
        "검토 API로 문제가 있는 댓글인지 먼저 확인하고, 문제가 있는 경우에만 교정 API를 호출하도록 요청 순서를 나눴습니다. 문제가 없는 댓글에는 수정이 필요하지 않다는 안내를 보여줍니다.",
    },
    {
      title: "화면 간 결과 전달",
      problem:
        "교정 화면에서 받은 결과를 분석 화면으로 넘길 때, 새로고침하거나 링크를 공유하면 결과가 사라지는 문제가 있었습니다.",
      solution:
        "원문, 교정 결과와 돌아갈 경로를 URL 쿼리로 전달하도록 바꿨습니다. 쿼리만으로 화면을 다시 구성할 수 있어 새로고침해도 결과가 유지됩니다.",
    },
    {
      title: "분석 결과 대기 중 빈 화면",
      problem:
        "분석 API 응답을 기다리는 동안 차트 영역이 비어 있어 화면이 멈춘 것처럼 보였고, 0과 1 사이의 소수 점수는 읽기 어려웠습니다.",
      solution:
        "응답 전에는 스켈레톤을 보여주고, 점수는 100점 기준으로 반올림해 표시하도록 수정했습니다.",
    },
  ],

  results: [
    "댓글 입력부터 교정, 편향 분석까지 이어지는 화면 흐름 완성",
    "네 가지 편향 항목의 점수를 레이더 차트와 방사형 차트로 시각화",
    "문제가 있는 댓글에만 교정 API를 호출하도록 요청 흐름 개선",
    "모바일부터 데스크톱까지 반응형 화면 대응",
  ],

  thumbnail: "/projects/comentor/thumb.png",

  screenshots: [
    {
      src: "/projects/comentor/screenshot-1.png",
      alt: "댓글 교정 화면",
      caption: "댓글 교정 화면",
    },
    {
      src: "/projects/comentor/screenshot-2.png",
      alt: "편향 분석 화면",
      caption: "편향 분석 화면",
    },
  ],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/dohun0310/Comentor-Frontend",
    },
  ],
};
