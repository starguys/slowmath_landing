import type { Metadata } from "next";
import "../../(legal)/legal.css";

// /jp 법률 페이지들이 루트 layout 의 한국어 OG/Twitter(og:locale ko_KR 등)를 상속하지 않도록
// 일본어 기본값을 이 레이아웃에서 지정한다. title/description 은 생략해 각 페이지 값으로 폴백된다.
// og:image / twitter:image 은 app/jp/opengraph-image.tsx · twitter-image.tsx 가 세그먼트
// 전체(/jp, /jp/terms, /jp/privacy)를 커버하므로 여기서는 명시하지 않는다.
export const metadata: Metadata = {
  openGraph: {
    siteName: "LittleSteps",
    locale: "ja_JP",
    alternateLocale: ["ko_KR", "en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
