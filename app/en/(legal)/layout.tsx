import type { Metadata } from "next";
import "../../(legal)/legal.css";

const SITE_URL = "https://slowkids.net";

// /en 법률 페이지들이 루트 layout 의 한국어 OG/Twitter(og:locale ko_KR 등)를 상속하지 않도록
// 영어 기본값을 이 레이아웃에서 지정한다. title/description 은 생략해 각 페이지 값으로 폴백된다.
export const metadata: Metadata = {
  openGraph: {
    siteName: "SlowKids",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png?v=20260701`,
        width: 878,
        height: 443,
        alt: "SlowKids — slow but in the right direction, one step at a time",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/og-image.png?v=20260701`],
  },
};

export default function LegalEnLayout({ children }: { children: React.ReactNode }) {
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
