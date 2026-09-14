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
const SITE_URL_CN = `${SITE_URL}/cn`;
// OG 이미지는 다섯 언어가 같은 마스코트 이미지를 쓴다 (글자가 없어 언어 중립).
const OG_IMAGE = {
  url: `${SITE_URL}/og-image-mascot.png?v=20260901c`,
  width: 1200,
  height: 1200,
  alt: "LittleSteps 吉祥物 — 拿着平板的乌龟角色",
};

export const metadata: Metadata = {
  title: "LittleSteps — 虽然慢，但方向是对的",
  description:
    "为发育迟缓、边缘智力，或任何比同龄孩子学得慢的孩子打造的学习工具 — 一步一步累积数学的基础。iOS 与 Android 都能使用。",
  alternates: {
    canonical: SITE_URL_CN,
    languages: {
      ko: SITE_URL + "/",
      "zh-Hant": SITE_URL + "/tw",
      "zh-Hans": SITE_URL_CN,
      en: SITE_URL + "/en",
      ja: SITE_URL + "/jp",
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "LittleSteps — 虽然慢，但方向是对的",
    description:
      "为照自己的速度掌握概念的孩子打造的小小数学练习 — 从最初的辨认到乘法口诀。iOS 与 Android 都能使用。",
    siteName: "LittleSteps",
    locale: "zh_CN",
    alternateLocale: ["ko_KR", "zh_TW", "en_US", "ja_JP"],
    type: "website",
    url: SITE_URL_CN,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "LittleSteps — 虽然慢，但方向是对的",
    description:
      "为照自己的速度学习的孩子打造的小小数学练习。iOS 与 Android 都能使用。",
    images: [OG_IMAGE.url],
  },
  itunes: {
    appId: "6763979294",
  },
};

// 서브내비 탭(간체) — 세그먼트가 좁아 라벨은 간결하게.
const NAV_ITEMS: NavItem[] = [
  { label: "介绍", targetId: "intro" },
  { label: "视频", targetId: "demo" },
  { label: "开始", targetId: "start" },
  { label: "工具", targetId: "apps" },
];

export default function Page() {
  return (
    <PracticeModalProvider locale="zhcn">
      <JsonLd locale="zhcn" />
      <SetHtmlLang lang="zh-Hans" />
      <SiteHeader locale="zhcn" />
      <main>
        <SectionHero locale="zhcn" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="zhcn" />
        <SectionEmpathy locale="zhcn" />
        <SectionDemo locale="zhcn" />
        <SectionWhy locale="zhcn" />
        <SectionStart locale="zhcn" />
        <SectionApps locale="zhcn" />
      </main>
      <SiteFooter locale="zhcn" />
      <StickyDownloadBar locale="zhcn" />
    </PracticeModalProvider>
  );
}
