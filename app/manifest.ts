import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// 웹 앱 매니페스트 — 모바일 홈 화면 추가/PWA 신호 및 파비콘 일관성.
// theme_color 는 layout 의 viewport.themeColor(#FFFBF5)와 맞춘다.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "느린아이 — 아이의 속도로 배우는 기초 수학",
    short_name: "느린아이",
    description:
      "발달 지연·경계선 지능·학습 장애 아동이 자신의 속도로 수학의 기초를 쌓도록 설계된 수학·인지 학습도구.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFBF5",
    theme_color: "#FFFBF5",
    lang: "ko-KR",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
