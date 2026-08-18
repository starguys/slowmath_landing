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
// og:image / twitter:image 은 app/jp/opengraph-image.tsx · twitter-image.tsx 파일 컨벤션이
// 빌드 타임에 자동 생성·주입한다. 명시적 images 필드를 두지 않음.

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
  },
  twitter: {
    card: "summary_large_image",
    title: "LittleSteps — 正しい方向へ、一歩ずつ",
    description:
      "自分のペースで学ぶ子のための小さな算数練習。iOSとAndroidで利用できます。",
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
