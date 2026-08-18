import type { Metadata } from "next";
import SiteHeader from "../_home/SiteHeader";
import SectionHero from "../_home/SectionHero";
import SubNav, { type NavItem } from "../_home/SubNav";
import SectionIntro from "../_home/SectionIntro";
import SectionEmpathy from "../_home/SectionEmpathy";
import SectionDemo from "../_home/SectionDemo";
import SectionWhy from "../_home/SectionWhy";
import SectionStart from "../_home/SectionStart";
import SectionApps from "../_home/SectionApps";
import SiteFooter from "../_home/SiteFooter";
import StickyDownloadBar from "../StickyDownloadBar";
import SetHtmlLang from "./SetHtmlLang";
import { PracticeModalProvider } from "../_home/PracticeModal";
import JsonLd from "../_seo/JsonLd";

const SITE_URL = "https://slowkids.net";
const SITE_URL_JP = `${SITE_URL}/jp`;
// 전용 JA OG 이미지가 없어 EN 이미지를 폴백으로 재사용(그래픽은 중립).
// 전용 og-image-ja.png 가 준비되면 여기와 (legal)/layout.tsx, structuredData.ts 를 함께 교체.
const OG_IMAGE = {
  url: `${SITE_URL}/og-image-en.png?v=20260726`,
  width: 878,
  height: 443,
  alt: "LittleSteps — 正しい方向へ、一歩ずつ",
};

export const metadata: Metadata = {
  title: "LittleSteps — 正しい方向へ、一歩ずつ",
  description:
    "発達のゆっくりな子・発達障害・境界知能など、自分のペースで学ぶ子のための学習ツール — 算数の基礎を一歩ずつ積み上げます。iOSとAndroidで利用できます。",
  alternates: {
    canonical: SITE_URL_JP,
    languages: {
      ko: SITE_URL + "/",
      en: SITE_URL + "/en",
      ja: SITE_URL_JP,
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "LittleSteps — 正しい方向へ、一歩ずつ",
    description:
      "自分のペースで概念を身につけていく子のための小さな算数練習 — 最初の認識から九九まで。iOSとAndroidで利用できます。",
    siteName: "LittleSteps",
    locale: "ja_JP",
    alternateLocale: ["ko_KR", "en_US"],
    type: "website",
    url: SITE_URL_JP,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "LittleSteps — 正しい方向へ、一歩ずつ",
    description:
      "自分のペースで学ぶ子のための小さな算数練習。iOSとAndroidで利用できます。",
    images: [OG_IMAGE.url],
  },
  itunes: {
    appId: "6763979294",
  },
};

// 서브내비 탭(일본어) — 세그먼트가 좁아 라벨은 간결하게.
const NAV_ITEMS: NavItem[] = [
  { label: "紹介", targetId: "intro" },
  { label: "動画", targetId: "demo" },
  { label: "はじめる", targetId: "start" },
  { label: "ツール", targetId: "apps" },
];

export default function Page() {
  return (
    <PracticeModalProvider locale="ja">
      <JsonLd locale="ja" />
      <SetHtmlLang lang="ja" />
      <SiteHeader locale="ja" />
      <main>
        <SectionHero locale="ja" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="ja" />
        <SectionEmpathy locale="ja" />
        <SectionDemo locale="ja" />
        <SectionWhy locale="ja" />
        <SectionStart locale="ja" />
        <SectionApps locale="ja" />
      </main>
      <SiteFooter locale="ja" />
      <StickyDownloadBar locale="ja" />
    </PracticeModalProvider>
  );
}
