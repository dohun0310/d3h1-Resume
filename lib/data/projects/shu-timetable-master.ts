import type { Project } from "@/lib/types/resume";

export const shuTimetableMasterProject: Project = {
  slug: "shu-timetable-master",
  title: "신한대학교 시간표 마법사",

  period: {
    start: "2026.07",
    end: "2026.09",
  },

  summary:
    "강좌를 검색해 바구니에 담으면 시간이 겹치지 않는 시간표 조합을 자동으로 만들어주는 신한대학교 시간표 서비스입니다.",

  role: "기획, 프론트엔드 및 백엔드 개발, 인프라 운영",

  overview:
    "매 학기 학교 SAP 페이지에서 강좌를 하나씩 찾아가며 시간표를 맞추는 과정이 번거로워 직접 만든 서비스입니다. 듣고 싶은 과목을 바구니에 담고 공강일, 시간대, 학점 조건을 정하면 가능한 시간표 조합을 자동으로 만들어줍니다. 강좌 데이터는 빌드 시점에 SAP 페이지에서 수집하고 검증한 JSON으로 만들어, 운영 중인 서버는 학교 서버에 접근하지 않고 메모리에 올린 데이터만 제공합니다. 기획부터 프론트엔드, 백엔드, 데이터 수집과 배포까지 혼자 진행했습니다.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Express",
    "Playwright",
    "Zod",
    "Docker",
  ],

  contributions: [
    {
      area: "프론트엔드 개발",
      percent: 100,
      description:
        "강좌 찾기, 시간표 만들기, 내 시간표 화면과 시간표 내보내기 기능을 개발했습니다.",
    },
    {
      area: "백엔드 개발",
      percent: 100,
      description:
        "강좌 검색과 시간표 조합 생성 API를 Express로 개발했습니다.",
    },
    {
      area: "데이터 수집",
      percent: 100,
      description:
        "Playwright로 SAP 강좌 페이지를 수집하고 Zod로 검증하는 카탈로그 생성 과정을 만들었습니다.",
    },
    {
      area: "배포 및 운영",
      percent: 100,
      description:
        "Docker, Jenkins와 Nginx를 이용해 프론트엔드와 백엔드를 직접 배포하고 운영하고 있습니다.",
    },
  ],

  works: [
    {
      title: "SAP 강좌 수집",
      description:
        "Playwright로 SAP에 로그인한 뒤 학과와 마이크로디그리별 강좌를 병렬로 수집합니다. 수집한 데이터는 Zod로 검증한 뒤 JSON으로 저장하고, 실패하면 기존 정상 데이터를 그대로 유지합니다.",
    },
    {
      title: "강좌 검색 API",
      description:
        "강좌명, 과목코드, 교수, 학과, 전공, 요일, 시간대, 학점으로 강좌를 검색하는 API를 만들었습니다. 조회 응답에는 ETag를 붙여 바뀌지 않은 데이터는 304로 응답합니다.",
    },
    {
      title: "시간표 조합 생성",
      description:
        "바구니마다 분반 하나를 골라 시간이 겹치지 않는 조합을 찾는 탐색 알고리즘을 만들었습니다. 공강일, 피하고 싶은 시간대, 학점 범위 조건을 함께 반영합니다.",
    },
    {
      title: "강좌 찾기 화면",
      description:
        "검색 조건을 URL 쿼리로 관리해 새로고침하거나 링크를 공유해도 같은 결과가 보이도록 만들었습니다. 잘못된 조건은 결과에서 빼고 따로 안내합니다.",
    },
    {
      title: "시간표 편집과 저장",
      description:
        "자동으로 만든 조합을 보드에서 분반 단위로 직접 넣고 빼며 수정할 수 있습니다. 확정한 시간표는 브라우저에 저장하고, 다른 탭에서 바뀐 내용도 바로 반영합니다.",
    },
    {
      title: "시간표 내보내기",
      description:
        "시간표를 캔버스에 직접 그려 PNG와 PDF 파일로 저장할 수 있도록 만들었습니다. 화면과 내보낸 파일이 같은 칸 병합 규칙을 쓰도록 분리했습니다.",
    },
  ],

  responsibilities: [
    "서비스 기획과 화면 구성",
    "Next.js 기반 프론트엔드 개발",
    "Express 기반 강좌 검색, 시간표 조합 API 개발",
    "Playwright SAP 강좌 수집기 개발",
    "Zod 스키마 기반 데이터 검증",
    "Vitest 단위, 통합 테스트 작성",
    "Docker 실행 환경 구성",
    "Jenkins 배포 자동화",
    "Nginx 무중단 배포 및 서버 운영",
  ],

  challenges: [
    {
      title: "SAP 인증 화면 전환으로 강좌가 수집되지 않는 문제",
      problem:
        "학교 SAP의 개설과목 조회 화면이 로그인을 요구하도록 바뀌면서 수집기가 로그인 화면에서 멈췄고, 강좌가 0건으로 수집되었습니다.",
      solution:
        "Playwright에 SAP 로그온 절차를 추가하고, 인증 후 달라지는 열 구성과 조회 조건 선택 방식에 맞게 수집기를 수정했습니다. 계정 정보가 없으면 수집을 시작하기 전에 설정 검증 단계에서 중단하도록 만들었습니다.",
    },
    {
      title: "병렬 수집 중 조회 결과가 섞이는 문제",
      problem:
        "수집 시간을 줄이기 위해 여러 페이지로 병렬 수집을 하자, 조회 조건이 반영되기 전의 결과를 읽어 다른 학과의 강좌가 섞이거나 빈 결과가 저장되는 경우가 생겼습니다.",
      solution:
        "조회 조건이 화면에 반영될 때까지 기다린 뒤 결과를 읽고, 갱신되지 않은 결과는 사용하지 않도록 막았습니다. 일시적인 오류는 재시도하고, 학교 서버에 부담을 주지 않도록 동시 수집 수를 1에서 8 사이로 제한했습니다.",
    },
    {
      title: "시간표 조합 수 폭발",
      problem:
        "바구니에 분반이 많은 과목을 여러 개 담으면 가능한 조합 수가 급격히 늘어나 응답이 끝나지 않을 수 있었습니다.",
      solution:
        "요일과 시간대 조건은 탐색 전에 강좌 단위로 먼저 걸러내고, 학점과 시간 충돌은 탐색 중에 바로 가지치기했습니다. 탐색 횟수에 상한을 두어 넘으면 탐색을 멈추고, 결과가 일부만 반환되었다는 것을 함께 알리도록 만들었습니다.",
    },
    {
      title: "iOS에서 요일 선택이 잘못 눌리는 문제",
      problem:
        "iOS에서 요일 칩을 빠르게 연달아 누르면 방금 누른 칩이 아니라 직전 칩이 다시 눌리는 문제가 있었습니다.",
      solution:
        "iOS가 터치 뒤에 합성해 보내는 클릭 이벤트를 무시하고, 터치하는 시점에 바로 칩을 토글하도록 수정했습니다.",
    },
    {
      title: "백엔드 재배포 후 연결이 끊기는 문제",
      problem:
        "백엔드 컨테이너를 다시 배포하면 컨테이너 IP가 바뀌어 프론트엔드가 백엔드에 연결하지 못했습니다.",
      solution:
        "두 컨테이너를 같은 Docker 네트워크에 연결하고 IP 대신 컨테이너 이름으로 백엔드에 접근하도록 바꿨습니다. 지정한 네트워크가 없으면 배포를 중단하도록 했습니다.",
    },
  ],

  results: [
    "2026학년도 2학기 강좌 1,676개를 수집해 서비스 중",
    "운영 중 학교 서버에 접근하지 않는 읽기 전용 API 구성",
    "백엔드 테스트 166개로 수집, 검색, 조합 규칙 검증",
    "강좌 검색부터 조합 생성, 편집, 저장, 내보내기까지 이어지는 흐름 완성",
    "Jenkins와 Nginx로 프론트엔드, 백엔드 무중단 배포 자동화",
  ],

  thumbnail: "/projects/shu-timetable-master/thumb.png",

  screenshots: [
    {
      src: "/projects/shu-timetable-master/screenshot-1.png",
      alt: "강좌 찾기 화면",
      caption: "강좌 찾기 화면",
    },
    {
      src: "/projects/shu-timetable-master/screenshot-2.png",
      alt: "시간표 자동 조합 화면",
      caption: "시간표 자동 조합 화면",
    },
    {
      src: "/projects/shu-timetable-master/screenshot-3.png",
      alt: "시간표 편집 화면",
      caption: "시간표 편집 화면",
    },
    {
      src: "/projects/shu-timetable-master/screenshot-4.png",
      alt: "내 시간표 화면",
      caption: "내 시간표 화면",
    },
  ],

  links: [
    {
      label: "서비스",
      href: "https://shu.d3h1.com",
    },
    {
      label: "Frontend",
      href: "https://github.com/dohun0310/SHU-Timetable-Master-Frontend",
    },
    {
      label: "Backend",
      href: "https://github.com/dohun0310/SHU-Timetable-Master-Backend",
    },
  ],
};
