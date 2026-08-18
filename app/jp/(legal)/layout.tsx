import type { Metadata } from "next";
import "../../(legal)/legal.css";

const SITE_URL = "https://slowkids.net";

// /jp 법률 페이지들이 루트 layout 의 한국어 OG/Twitter(og:locale ko_KR 등)를 상속하지 않도록
// 일본어 기본값을 이 레이아웃에서 지정한다. title/description 은 생략해 각 페이지 값으로 폴백된다.
// (전용 og-image-ja.png 준비 전이라 EN 이미지 재사용)
export const metadata: Metadata = {
  openGraph: {
    siteName: "LittleSteps",
    locale: "ja_JP",
    alternateLocale: ["ko_KR", "en_US"],
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image-en.png?v=20260726`,
        width: 878,
        height: 443,
        alt: "LittleSteps — 正しい方向へ、一歩ずつ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/og-image-en.png?v=20260726`],
  },
};

export default function LegalJpLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        background: "#F7F4F0",
        minHeight: "100vh",
        padding: "32px 16px 64px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <article
          style={{
            background: "white",
            borderRadius: 24,
            padding: "40px 28px",
            boxShadow: "0 12px 36px rgba(45,38,32,0.06)",
            border: "1px solid #EDE0C8",
          }}
          className="legal-article"
        >
          {children}
        </article>
      </div>
    </main>
  );
}
