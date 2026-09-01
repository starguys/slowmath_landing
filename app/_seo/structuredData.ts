// 페이지별(로케일별) 구조화 데이터(JSON-LD) 빌더.
// output:"export" + 단일 root layout 이라 layout 에서 넣으면 /en·/jp 도 KO 데이터가 나가므로,
// 각 랜딩 페이지(/·/en·/jp)가 자기 언어의 @graph 를 직접 렌더한다. (JsonLd 서버 컴포넌트)
import { APP_NAMES, APP_ORDER, appHref, type Locale } from "../_home/apps";

const SITE_URL = "https://slowkids.net";
const OG_IMAGE = `${SITE_URL}/og-image-mascot.png?v=20260901`;
const OG_IMAGE_EN = `${SITE_URL}/og-image-en.png?v=20260726`;
// JA OG 이미지는 app/jp/opengraph-image.tsx 가 빌드 타임에 정적 PNG 로 생성
// (실제 파일은 /jp/opengraph-image 로 서빙, 확장자 없음). JSON-LD 용 안정 URL.
const OG_IMAGE_JA = `${SITE_URL}/jp/opengraph-image`;

// 실제 스토어 주소 (사용자 제공)
const APPLE_US =
  "https://apps.apple.com/us/app/slowkids-math-at-kids-pace/id6763979294";
const APPLE_KR = "https://apps.apple.com/kr/app/id6763979294";
const APPLE_JP = "https://apps.apple.com/jp/app/id6763979294";
const PLAY =
  "https://play.google.com/store/apps/details?id=com.everydaysummers.slowkids";

// @id 앵커 — 같은 엔티티를 페이지 간에 일관되게 참조(링크드 데이터)
const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;
const VIDEO_ID = `${SITE_URL}/#demo-video`;

// 개별 학습도구 KO 설명(있는 것만). 목록/이름/URL 은 apps.ts(단일 소스)에서 전체 파생하고,
// 아래 맵에 없는 slug 는 description 을 생략한다. key 는 slowmath_ 접두어를 제거한 형태.
const KO_DESC: Record<string, string> = {
  color: "색깔 이름을 보고·듣고·고르며 색 인지 능력을 키워요.",
  linedraw: "직선·곡선·나선을 따라 그리며 손의 안정성을 키워요.",
  dot2dot: "주어진 점-선 연결을 따라 그리며 시지각과 소근육을 키워요.",
  colorcopy: "제시된 색 격자 패턴을 그대로 따라 만들며 시지각을 훈련해요.",
  pattern: "반복되는 규칙에서 빠진 것을 찾는 패턴 인식을 훈련해요.",
  sameshape: "여러 모양 중에서 같은 모양과 짝을 찾으며 시지각 변별을 훈련해요.",
  number: "1부터 100까지 숫자를 보고·듣고·고르며 익혀요.",
  numberdraw: "0~9 숫자를 올바른 순서로 쓰는 법을 연습해요.",
  dice: "손가락·주사위·카드 무늬를 세며 수 감각을 키워요.",
  counting: "한 명·두 마리·세 대… 우리말로 세는 말과 숫자를 짝지어요.",
  matching: "숫자와 동그라미의 개수를 연결하며 수와 양을 연결해요.",
  gap: "일정한 간격의 빈 자리 수를 맞추며 수의 순서와 간격 감각을 익혀요.",
  money: "동전과 지폐의 단위·합산을 익히며 생활 속 수 감각을 키워요.",
  comparing: "크기·길이·높이·두께·양을 비교하며 수학 언어를 익혀요.",
  comparing2: "위·아래·안·밖 등 공간 관계를 비교하며 익혀요.",
  compare: "두 수의 크기를 비교하며 부등호(<, >, =)를 익혀요.",
  clock: "아날로그·디지털 시계를 읽는 법을 시·30분·15분 단위로 배워요.",
  oddeven: "배열판·숫자판·랜덤·짝짓기 4가지 모드로 홀수와 짝수를 익혀요.",
  combining: "두 수를 합쳐 하나의 수를 만드는 수 합성을 연습해요.",
  splitting: "하나의 수를 두 부분으로 나누는 수 분해를 연습해요.",
  complement: "10을 채우는 짝꿍 수(보수)를 익혀요.",
  plusone: "수 배열판으로 +1 덧셈을 직관적으로 익혀요.",
  plustwo: "2 더하기를 배열판과 건너뛰기로 시각화해서 배워요.",
  plusthree: "3 더하기를 여러 학습 모드로 반복 연습해요.",
  easy: "가장 쉬운 단계부터 시작하는 한 자리 덧셈 연습.",
  circle: "고르기·쌓기·채우기 세 가지 방식으로 덧셈을 연습해요.",
  carry: "두 자리 덧셈의 받아올림을 배열판·세로 형식으로 익혀요.",
  moneycalc: "동전과 지폐로 가격을 맞추거나 합계를 골라요 — 덧셈의 실생활 응용.",
  minusone: "수 배열판으로 -1 뺄셈을 직관적으로 익혀요.",
  minustwo: "2 빼기를 배열판과 거꾸로 건너뛰기로 시각화해서 배워요.",
  minusthree: "3 빼기를 여러 학습 모드로 반복 연습해요.",
  subtract: "드래그·묶기·배열판 세 가지 방식으로 한 자리 뺄셈을 익혀요.",
  borrow: "두 자리 뺄셈의 받아내림을 배열판·세로 형식으로 익혀요.",
  timestables: "2~9단 구구단을 충분한 생각 시간과 함께 천천히 익혀요.",
};

// 개별 학습도구 JA 설명(있는 것만). 없는 slug 는 description 을 생략한다.
const JA_DESC: Record<string, string> = {
  color: "色の名前を見て・聞いて・選びながら、色を認識する力を育てます。",
  linedraw: "直線・曲線・らせんをなぞって、手の安定性を育てます。",
  dot2dot: "示された点と線のつなぎ方をなぞって、視知覚と小さな筋力を育てます。",
  colorcopy: "示された色のマス模様をそのまま再現しながら視知覚を鍛えます。",
  pattern: "くり返しのきまりから、抜けているものを見つけるパターン認識の練習です。",
  sameshape: "たくさんの形の中から同じ形やペアを見つけて、視知覚の見分けを鍛えます。",
  number: "1から100までの数字を見て・聞いて・選びながら覚えます。",
  numberdraw: "0〜9の数字を正しい書き順で書く練習をします。",
  dice: "指・サイコロ・カードの模様をかぞえながら、数の感覚を育てます。",
  matching: "数字と丸の個数をつなげて、数と量を結びつけます。",
  gap: "一定の間隔で空いている数を当てながら、数の順序と間隔の感覚を身につけます。",
  money: "硬貨と紙幣の単位や合計を身につけて、生活の中の数感覚を育てます。",
  comparing: "大きさ・長さ・高さ・厚さ・量をくらべながら、算数のことばを身につけます。",
  comparing2: "上・下・中・外など、空間の関係をくらべながら身につけます。",
  compare: "2つの数の大小をくらべながら、不等号(<, >, =)を身につけます。",
  clock: "アナログ・デジタル時計の読み方を、正時・30分・15分の単位で学びます。",
  oddeven: "配列盤・数字盤・ランダム・ペア合わせの4モードで、奇数と偶数を身につけます。",
  combining: "2つの数を合わせて1つの数にする、数の合成を練習します。",
  splitting: "1つの数を2つの部分にわける、数の分解を練習します。",
  complement: "10になる相棒の数(補数)を身につけます。",
  plusone: "数の配列盤で+1のたし算を直感的に身につけます。",
  plustwo: "2をたす計算を、配列盤と2つとびで目に見える形にして学びます。",
  plusthree: "3をたす計算を、いくつかの学習モードでくり返し練習します。",
  easy: "いちばんやさしい段階から始める1桁のたし算練習。",
  circle: "選ぶ・積む・埋めるの3つのやり方でたし算を練習します。",
  carry: "2桁のたし算のくり上がりを、配列盤と筆算の形式で身につけます。",
  moneycalc: "硬貨と紙幣で値段を合わせたり、合計を選んだり — たし算の実生活応用。",
  minusone: "数の配列盤で−1のひき算を直感的に身につけます。",
  minustwo: "2をひく計算を、配列盤と逆向きの2つとびで目に見える形にして学びます。",
  minusthree: "3をひく計算を、いくつかの学習モードでくり返し練習します。",
  subtract: "ドラッグ・くくり・配列盤の3つのやり方で1桁のひき算を身につけます。",
  borrow: "2桁のひき算のくり下がりを、配列盤と筆算の形式で身につけます。",
  timestables: "2の段〜9の段の九九を、じゅうぶんな考える時間と一緒にゆっくり身につけます。",
};

type JsonLdNode = Record<string, unknown>;

function localeTag(locale: Locale): string {
  if (locale === "en") return "en-US";
  if (locale === "ja") return "ja-JP";
  return "ko-KR";
}

function currency(locale: Locale): string {
  if (locale === "en") return "USD";
  if (locale === "ja") return "JPY";
  return "KRW";
}

function appleStore(locale: Locale): string {
  if (locale === "en") return APPLE_US;
  if (locale === "ja") return APPLE_JP;
  return APPLE_KR;
}

function pageUrl(locale: Locale): string {
  if (locale === "en") return `${SITE_URL}/en`;
  if (locale === "ja") return `${SITE_URL}/jp`;
  return SITE_URL;
}

function organizationLd(locale: Locale): JsonLdNode {
  const en = locale === "en";
  const ja = locale === "ja";
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: en || ja ? "LittleSteps" : "느린아이",
    alternateName: en
      ? ["느린아이", "느린아이 시리즈"]
      : ja
        ? ["느린아이", "LittleSteps シリーズ"]
        : ["느린아이 시리즈", "LittleSteps"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.png`,
      width: 256,
      height: 256,
    },
    description: en
      ? "Learning tools designed for children with developmental delays, developmental disabilities, borderline intelligence, learning disabilities, or ADHD — to build math foundations at their own pace."
      : ja
        ? "発達のゆっくりな子・発達障害・境界知能・学習障害・ADHDのお子さんが、自分のペースで算数の基礎を少しずつ積み上げられるよう設計された学習ツールです。"
        : "발달 지연·발달 장애·경계선 지능·학습 장애·ADHD 아동이 자신의 속도로 수학의 기초를 차근차근 쌓도록 설계된 학습도구입니다.",
    sameAs: [APPLE_US, PLAY],
  };
}

function websiteLd(locale: Locale): JsonLdNode {
  const en = locale === "en";
  const ja = locale === "ja";
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    name: en || ja ? "LittleSteps" : "느린아이 시리즈",
    alternateName: en || ja ? "느린아이" : "LittleSteps",
    url: pageUrl(locale),
    inLanguage: localeTag(locale),
    description: en
      ? "Math, cognition, and fine-motor learning tools for children who learn at their own pace."
      : ja
        ? "自分のペースで学ぶ子のための、算数・認知・小さな筋力の学習ツール。"
        : "발달 지연·경계선 지능·학습 장애 아동을 위한 수학·인지·소근육 학습도구.",
    publisher: { "@id": ORG_ID },
  };
}

function appLd(locale: Locale): JsonLdNode {
  const en = locale === "en";
  const ja = locale === "ja";
  return {
    "@type": "MobileApplication",
    "@id": APP_ID,
    name: en
      ? "LittleSteps — One right step at a time"
      : ja
        ? "LittleSteps — 正しい方向へ、一歩ずつ"
        : "느린아이",
    operatingSystem: "iOS, Android",
    applicationCategory: "EducationalApplication",
    inLanguage: localeTag(locale),
    description: en
      ? "Learning tools for children with developmental delays, developmental disabilities, learning differences, borderline intelligence, and other kids who learn at their own pace — to build math foundations step by step."
      : ja
        ? "発達のゆっくりな子・発達障害・境界知能など、自分のペースで学ぶ子のための、算数の基礎を一歩ずつ積み上げる学習ツールです。"
        : "발달 지연·발달 장애·경계선 지능·학습 장애 아동이 자신의 속도로 수학의 기초를 쌓도록 설계된 학습 앱입니다.",
    url: pageUrl(locale),
    downloadUrl: appleStore(locale),
    installUrl: appleStore(locale),
    sameAs: [APPLE_US, PLAY],
    image: ja ? OG_IMAGE_JA : en ? OG_IMAGE_EN : OG_IMAGE,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: currency(locale),
    },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

function videoLd(locale: Locale): JsonLdNode {
  const en = locale === "en";
  const ja = locale === "ja";
  return {
    "@type": "VideoObject",
    "@id": VIDEO_ID,
    name: en
      ? "A child learning with the LittleSteps app"
      : ja
        ? "LittleStepsアプリで学ぶ子どもの様子"
        : "느린아이 앱으로 학습하는 아이의 모습",
    description: en
      ? "A quiet screen and small repetitions — moments where a child taps and confirms at their own pace."
      : ja
        ? "静かな画面と小さなくり返し — 子どもが自分のペースでタッチして確かめる瞬間です。"
        : "조용한 화면에서 작은 반복을 통해 아이가 스스로 터치하고 확인하며 자신의 속도로 학습하는 모습입니다.",
    thumbnailUrl: [`${SITE_URL}/figma/demo/poster.jpg`],
    uploadDate: "2026-06-30",
    contentUrl: `${SITE_URL}/video/landing-4.mp4`,
    inLanguage: localeTag(locale),
    publisher: { "@id": ORG_ID },
  };
}

function itemListLd(locale: Locale): JsonLdNode {
  const en = locale === "en";
  const ja = locale === "ja";
  return {
    "@type": "ItemList",
    "@id": `${pageUrl(locale)}${locale === "ko" ? "/" : ""}#toollist`,
    name: en
      ? "LittleSteps learning tools"
      : ja
        ? "LittleSteps 学習ツール"
        : "느린아이 시리즈 학습도구",
    description: en
      ? "Math and cognition tools for children with developmental delays, borderline intelligence, or learning difficulties."
      : ja
        ? "自分のペースで学ぶ子のための、算数・認知の学習ツール。"
        : "발달 지연·경계선 지능·학습 장애 아동을 위한 수학·인지 학습도구",
    numberOfItems: APP_ORDER.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: APP_ORDER.map((slug, i) => {
      const bare = slug.replace(/^slowmath_/, "");
      const desc = en ? undefined : ja ? JA_DESC[bare] : KO_DESC[bare];
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "EducationalApplication",
          name: APP_NAMES[slug]?.[locale] ?? slug,
          url: `${SITE_URL}${appHref(slug, locale)}`,
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          inLanguage: localeTag(locale),
          isAccessibleForFree: true,
          ...(desc ? { description: desc } : {}),
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: currency(locale),
          },
          publisher: { "@id": ORG_ID },
        },
      };
    }),
  };
}

/** 로케일별 전체 구조화 데이터 그래프 (@graph 로 묶어 한 번에 출력) */
export function buildJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationLd(locale),
      websiteLd(locale),
      appLd(locale),
      videoLd(locale),
      itemListLd(locale),
    ],
  };
}
