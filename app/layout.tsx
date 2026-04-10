import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "느린아이 | 발달 지연 아동을 위한 수학 학습 도구 모음",
  description:
    "발달 지연·경계선 지능·학습 장애 아동이 스스로 해내는 경험을 쌓도록 설계된 수학 학습 도구 21종. 숫자 익히기·덧셈·구구단·시계 보기·비교하기·패턴 인지·소근육 발달 훈련까지. 학부모가 집에서 바로 활용할 수 있습니다.",
  keywords: [
    "느린 학습자 수학",
    "발달 지연 아이 수학 학습",
    "경계선 지능 학습 도구",
    "특수 교육 수학",
    "학습 장애 수학 훈련",
    "느린 아이 학습 지원",
    "초등 수학 기초 연습",
    "수 개념 기초 학습",
    "구구단 천천히 배우기",
    "숫자 쓰기 연습",
    "시계 보기 연습",
    "덧셈 기초 연습",
    "소근육 발달 훈련",
    "발달 장애 아동 학습",
    "특수 교사 수업 도구",
    "인지 학습 훈련",
    "색깔 인지 학습",
    "패턴 인식 훈련",
    "수 세기 연습",
    "아동 수학 학습 도구",
  ],
  openGraph: {
    title: "느린아이 | 발달 지연 아동을 위한 수학 학습 도구 21종",
    description:
      "발달 지연·경계선 지능 아동이 스스로 해내는 경험을 쌓도록 설계된 수학 학습 도구 모음. 학부모가 집에서 바로 활용할 수 있습니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
