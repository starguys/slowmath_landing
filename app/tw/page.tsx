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
const SITE_URL_TW = `${SITE_URL}/tw`;
// og:image / twitter:image 은 app/tw/opengraph-image.tsx · twitter-image.tsx 파일 컨벤션이
// 빌드 타임에 자동 생성·주입한다. 명시적 images 필드를 두지 않음.

export const metadata: Metadata = {
  title: "LittleSteps — 雖然慢，但方向是對的",
  description:
    "為發展遲緩、臨界智能，或任何比同齡孩子學得慢的孩子打造的學習工具 — 一步一步累積數學的基礎。iOS 與 Android 都能使用。",
  alternates: {
    canonical: SITE_URL_TW,
    languages: {
      ko: SITE_URL + "/",
      "zh-Hant": SITE_URL_TW,
      en: SITE_URL + "/en",
      ja: SITE_URL + "/jp",
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "LittleSteps — 雖然慢，但方向是對的",
    description:
      "為照自己的速度掌握概念的孩子打造的小小數學練習 — 從最初的辨認到九九乘法。iOS 與 Android 都能使用。",
    siteName: "LittleSteps",
    locale: "zh_TW",
    alternateLocale: ["ko_KR", "en_US", "ja_JP"],
    type: "website",
    url: SITE_URL_TW,
  },
  twitter: {
    card: "summary_large_image",
    title: "LittleSteps — 雖然慢，但方向是對的",
    description:
      "為照自己的速度學習的孩子打造的小小數學練習。iOS 與 Android 都能使用。",
  },
  itunes: {
    appId: "6763979294",
  },
};

// 서브내비 탭(번체) — 세그먼트가 좁아 라벨은 간결하게.
const NAV_ITEMS: NavItem[] = [
  { label: "介紹", targetId: "intro" },
  { label: "影片", targetId: "demo" },
  { label: "開始", targetId: "start" },
  { label: "工具", targetId: "apps" },
];

export default function Page() {
  return (
    <PracticeModalProvider locale="zh">
      <JsonLd locale="zh" />
      <SetHtmlLang lang="zh-Hant" />
      <SiteHeader locale="zh" />
      <main>
        <SectionHero locale="zh" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="zh" />
        <SectionEmpathy locale="zh" />
        <SectionDemo locale="zh" />
        <SectionWhy locale="zh" />
        <SectionStart locale="zh" />
        <SectionApps locale="zh" />
      </main>
      <SiteFooter locale="zh" />
      <StickyDownloadBar locale="zh" />
    </PracticeModalProvider>
  );
}
