import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://slowkids.net"),
  alternates: {
    canonical: "https://slowkids.net/",
    languages: {
      ko: "https://slowkids.net/",
      en: "https://slowkids.net/en",
      ja: "https://slowkids.net/jp",
      "x-default": "https://slowkids.net/",
    },
  },
  title: "느린아이 | 아이의 속도로 배우는 기초 수학 연습",
  description:
    "발달지연·발달장애·느린학습자·경계선지능 등 느린아이들이 스스로 해내는 경험을 쌓도록 설계된 수학·인지 학습도구. 숫자 익히기·덧셈·뺄셈·구구단·시계 보기·비교하기·패턴 인지·소근육 발달 훈련까지. 학부모가 집에서 바로 활용할 수 있습니다.",
  keywords: [
    "느린 학습자 수학",
    "발달 지연 아이 수학 학습",
    "경계선 지능 학습도구",
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
    "발달 지연·발달 장애 아동 학습",
    "특수 교사 수업 도구",
    "인지 학습 훈련",
    "색깔 인지 학습",
    "패턴 인식 훈련",
    "수 세기 연습",
    "아동 수학 학습도구",
  ],
  openGraph: {
    title: "느린아이 - 한 걸음씩, 아이의 속도로",
    description:
      "발달지연·발달장애·느린학습자·경계선지능 등 느린아이들이 자신의 속도로 수학의 기초를 차근차근 쌓도록 설계된 학습도구입니다.",
    siteName: "느린아이",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://slowkids.net/og-image-mascot.png?v=20260901c",
        width: 1200,
        height: 1200,
        alt: "느린아이 시리즈 마스코트 — 태블릿을 들고 있는 거북이 캐릭터",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "느린아이 - 한 걸음씩, 아이의 속도로",
    description:
      "발달지연·발달장애·느린학습자·경계선지능 등 느린아이들이 자기 속도로 수학의 기초를 쌓는 학습도구. App Store에서 만나보세요.",
    images: ["https://slowkids.net/og-image-mascot.png?v=20260901c"],
  },
  verification: {
    other: {
      "naver-site-verification": [
        "96f9abd3db28c71203b7f8ca7538184fec3fe90e",
        "93dafd43863565fa114f78ca17c0ebbbe34695ed",
      ],
      "msvalidate.01": "D10CD3141F96886AF21FEC7813782631",
    },
  },
  itunes: {
    appId: "6763979294",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFBF5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // output: "export" 정적 빌드라 단일 root layout만 가능 → KO를 기본으로 두고
  // /en·/jp 페이지는 post-build 스크립트(scripts/postbuild-set-html-lang.mjs)가
  // lang="ko" → lang="en"·"ja"로 패치한다
  return (
    <html lang="ko">
      <head>
        {/* Pretendard — 리디자인 본문 폰트 (CDN, dynamic subset) */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Meta Pixel — pageview tracking for slowkids.net */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','970060939273988');fbq('track','PageView');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=970060939273988&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* 언어 라우팅: 기본은 항상 KO. 브라우저 언어로 자동 전환하지 않고,
            사용자가 명시적으로 고른 경우(?lang= 쿼리 또는 저장된 lang-pref)에만
            KO(/) ↔ EN(/en) ↔ JA(/jp) 경로를 맞춘다. (외국어 방문자는 /en·/jp 링크·hreflang 로 진입) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var sp=new URLSearchParams(location.search);var q=sp.get('lang');if(q==='ko'||q==='en'||q==='ja'){localStorage.setItem('lang-pref',q);sp.delete('lang');var qs=sp.toString();history.replaceState(null,'',location.pathname+(qs?'?'+qs:'')+location.hash);return;}var p=localStorage.getItem('lang-pref');var path=location.pathname;var onEn=path.indexOf('/en')===0;var onJp=path.indexOf('/jp')===0;if(p==='ko'&&(onEn||onJp)){location.replace(path.replace(/^\\/(en|jp)\\/?/,'/'));return;}if(p==='en'&&!onEn){var base=onJp?path.replace(/^\\/jp\\/?/,'/'):path;location.replace('/en'+(base==='/'?'':base));return;}if(p==='ja'&&!onJp){var base2=onEn?path.replace(/^\\/en\\/?/,'/'):path;location.replace('/jp'+(base2==='/'?'':base2));return;}}catch(e){}})();`,
          }}
        />
        {/* 구조화 데이터(JSON-LD)는 페이지별로 로케일에 맞춰 렌더한다(app/_seo/JsonLd). */}
        {children}
      </body>
    </html>
  );
}
