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
const SITE_URL_EN = `${SITE_URL}/en`;
// OG 이미지는 네 언어가 같은 마스코트 이미지를 쓴다 (글자가 없어 언어 중립).
const OG_IMAGE = {
  url: `${SITE_URL}/og-image-mascot.png?v=20260901c`,
  width: 1200,
  height: 1200,
  alt: "LittleSteps mascot — a turtle character holding a tablet",
};

export const metadata: Metadata = {
  title: "LittleSteps — One right step at a time",
  description:
    "Learning tools for children with developmental delays, developmental disabilities, learning differences, borderline intelligence, and other kids who learn at their own pace — to build math foundations step by step. Now on iOS and Android.",
  alternates: {
    canonical: SITE_URL_EN,
    languages: {
      ko: SITE_URL + "/",
      en: SITE_URL_EN,
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "LittleSteps — One right step at a time",
    description:
      "Small math practices for children who pick up concepts at their own pace — from earliest cognition through multiplication tables. Now on iOS and Android.",
    siteName: "LittleSteps",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    type: "website",
    url: SITE_URL_EN,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "LittleSteps — One right step at a time",
    description:
      "Small math practices for children who learn at their own pace. Available on iOS and Android.",
    images: [OG_IMAGE.url],
  },
  itunes: {
    appId: "6763979294",
  },
};

// 서브내비 탭(영문) — 세그먼트가 좁아 라벨은 간결하게.
const NAV_ITEMS: NavItem[] = [
  { label: "About", targetId: "intro" },
  { label: "Watch", targetId: "demo" },
  { label: "Start", targetId: "start" },
  { label: "Tools", targetId: "apps" },
];

export default function Page() {
  return (
    <PracticeModalProvider locale="en">
      <JsonLd locale="en" />
      <SetHtmlLang lang="en" />
      <SiteHeader locale="en" />
      <main>
        <SectionHero locale="en" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="en" />
        <SectionEmpathy locale="en" />
        <SectionDemo locale="en" />
        <SectionWhy locale="en" />
        <SectionStart locale="en" />
        <SectionApps locale="en" />
      </main>
      <SiteFooter locale="en" />
      <StickyDownloadBar locale="en" />
    </PracticeModalProvider>
  );
}
