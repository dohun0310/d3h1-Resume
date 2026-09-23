import type { Project } from "@/lib/types/resume";

export const voiceHomeSecureProject: Project = {
  slug: "voice-home-secure",
  title: "Voice Home Secure",

  period: {
    start: "2025.08",
    end: "2025.09",
  },

  summary:
    "사용자의 목소리로 현관 응대 음성을 만들어주는 방문자 응대 보안 서비스입니다.",

  role: "UI 디자인, 프론트엔드 개발",

  overview:
    "배달원이나 예상치 못한 방문자에게 '누구세요?'라고 직접 묻기 불안한 사람을 위해, 익숙한 목소리로 현관문 너머의 방문자에게 대신 응대하는 캡스톤 프로젝트입니다. 사용자가 자신의 음성 파일을 올리면 그 목소리로 상황별 응대 문구를 만들어 재생하거나 저장할 수 있습니다. 기획/AI 1명, 안드로이드 1명, 백엔드 1명, 디자인/프론트엔드 1명으로 구성된 팀에서 서비스 디자인과 웹 프론트엔드를 맡았습니다.",

  stack: [
    "Next.js",
    "TypeScript",
    "CSS Modules",
  ],

  contributions: [
    {
      area: "UI 디자인",
      percent: 100,
      description:
        "서비스 화면과 색상, 폰트, 공통 컴포넌트 등 디자인 시스템을 설계했습니다.",
    },
    {
      area: "프론트엔드 개발",
      percent: 100,
      description:
        "로그인, 음성 생성과 재생 화면을 개발하고 백엔드 API를 연동했습니다.",
    },
    {
      area: "인증 구현",
      percent: 100,
      description:
        "카카오 로그인과 JWT 발급, 재발급 흐름을 구현했습니다.",
    },
  ],

  works: [
    {
      title: "카카오 로그인",
      description:
        "카카오에서 받은 인가 코드로 토큰을 발급받고, 이를 백엔드에 전달해 서비스 JWT를 발급받는 흐름을 Route Handler로 구현했습니다.",
    },
    {
      title: "토큰 자동 재발급",
      description:
        "Middleware에서 요청마다 Refresh Token으로 Access Token을 재발급하고, 실패하면 쿠키를 모두 지운 뒤 로그인 화면으로 보내도록 만들었습니다.",
    },
    {
      title: "상황별 음성 생성",
      description:
        "배달, 스토킹, 모르는 사람 세 가지 상황마다 응대 문구 5개를 사용자의 목소리로 한 번에 만들고, 문구별로 재생하거나 저장할 수 있도록 만들었습니다.",
    },
    {
      title: "사용자 지정 문구와 음성 테스트",
      description:
        "직접 입력한 문구를 사용자의 목소리로 읽어주는 기능과, 업로드한 음성이 잘 적용되는지 미리 들어보는 테스트 기능을 구현했습니다.",
    },
    {
      title: "디자인 시스템",
      description:
        "CSS 변수로 색상과 폰트를 정의하고 Button, TextField, TextArea, Modal, Icon, Logo, Header 등 공통 컴포넌트를 만들었습니다.",
    },
    {
      title: "모달과 반응형 UI",
      description:
        "모달을 Portal로 띄우고 열려 있는 동안 배경 스크롤을 막았으며, ESC 키로 닫을 수 있게 했습니다. 모바일에서도 화면과 모달이 넘치지 않도록 크기를 조정했습니다.",
    },
  ],

  responsibilities: [
    "서비스 UI 디자인과 디자인 시스템 설계",
    "Next.js 기반 웹 프론트엔드 개발",
    "카카오 로그인과 JWT 인증 흐름 구현",
    "음성 생성, 재생, 저장 기능 구현",
    "Server Action 기반 백엔드 API 연동",
    "공통 컴포넌트와 반응형 화면 구성",
  ],

  challenges: [
    {
      title: "로그인 과정의 CSRF 위험",
      problem:
        "카카오 로그인 콜백으로 돌아오는 요청이 실제로 우리 서비스에서 시작된 로그인인지 확인할 방법이 없었습니다.",
      solution:
        "로그인을 시작할 때 무작위 state 값을 만들어 쿠키에 저장하고, 콜백에서 돌아온 state와 쿠키 값이 같을 때만 로그인을 진행하도록 Double Submit Cookie 방식을 적용했습니다.",
    },
    {
      title: "토큰 보관과 만료 처리",
      problem:
        "JWT를 브라우저 스크립트에서 접근할 수 있는 곳에 두면 탈취 위험이 있었고, Access Token이 만료될 때마다 사용자가 다시 로그인해야 했습니다.",
      solution:
        "토큰을 HttpOnly 쿠키에 저장하고 Middleware에서 Refresh Token으로 재발급하도록 만들었습니다. 재발급에 실패하면 페이지 요청은 로그인 화면으로, API 요청은 401 응답으로 구분해 처리했습니다.",
    },
    {
      title: "음성 파일 업로드 용량 제한",
      problem:
        "사용자의 음성 파일을 Server Action으로 백엔드에 넘기는 과정에서 기본 요청 크기 제한 때문에 업로드가 실패했습니다.",
      solution:
        "Server Action의 요청 본문 크기 제한을 음성 파일 크기에 맞게 늘려 업로드가 정상적으로 이뤄지도록 수정했습니다.",
    },
    {
      title: "여러 음성을 묶어 보내는 ZIP 응답",
      problem:
        "상황별 음성 생성 API는 음성 5개를 ZIP 파일 하나로 묶어 응답해, 화면에서 문구별로 바로 재생하기 어려웠습니다.",
      solution:
        "Server Action에서 ZIP을 풀어 WAV 파일만 골라내고, 5개가 모두 있는지 확인한 뒤 화면에 넘기도록 만들었습니다. 화면에서는 파일마다 재생 주소를 만들어 문구별로 재생하고 저장할 수 있습니다.",
    },
  ],

  results: [
    "로그인부터 음성 업로드, 상황별 음성 생성, 재생과 저장까지 이어지는 웹 서비스 완성",
    "HttpOnly 쿠키와 자동 재발급으로 로그인 상태 유지",
    "세 가지 상황별 응대 문구 15개를 사용자의 목소리로 생성",
  ],

  thumbnail: "/projects/voice-home-secure/thumb.png",

  screenshots: [
    {
      src: "/projects/voice-home-secure/screenshot-1.png",
      alt: "로그인 화면",
      caption: "로그인 화면",
    },
    {
      src: "/projects/voice-home-secure/screenshot-2.png",
      alt: "음성 업로드 화면",
      caption: "음성 업로드 화면",
    },
  ],

  links: [
    {
      label: "GitHub",
      href: "https://github.com/dohun0310/VoiceHomeSecure-Frontend",
    },
  ],
};
