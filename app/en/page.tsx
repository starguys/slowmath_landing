import type { Metadata } from "next";
import SiteHeader from "../_home/SiteHeader";
import SectionHero from "../_home/SectionHero";
import SubNav, { type NavItem } from "../_home/SubNav";
import SectionIntro from "../_home/SectionIntro";
import SectionEmpathy from "../_home/SectionEmpathy";
import SectionDemo from "../_home/SectionDemo";
import SectionWhy from "../_home/SectionWhy";
import SectionExpert from "../_home/SectionExpert";
import SectionStart from "../_home/SectionStart";
import SectionApps from "../_home/SectionApps";
import SiteFooter from "../_home/SiteFooter";
import StickyDownloadBar from "../StickyDownloadBar";
import SetHtmlLang from "./SetHtmlLang";

const SITE_URL = "https://slowkids.net";
const SITE_URL_EN = `${SITE_URL}/en`;

export const metadata: Metadata = {
  title: "SlowKids — Math at every child's pace",
  description:
    "Learning tools for children with developmental delays, developmental disabilities, slow learning, or borderline intelligence — to build math foundations at their own pace. Now on iOS and Android.",
  alternates: {
    canonical: SITE_URL_EN,
    languages: {
      ko: SITE_URL + "/",
      en: SITE_URL_EN,
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "SlowKids — Math at every child's pace",
    description:
      "Small math practices for children who pick up concepts more slowly than peers — from earliest cognition through multiplication tables. Now on iOS and Android.",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    type: "website",
    url: SITE_URL_EN,
  },
  twitter: {
    card: "summary_large_image",
    title: "SlowKids — Math at every child's pace",
    description:
      "Small math practices for children who learn slowly. Available on iOS and Android.",
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
    <>
      <SetHtmlLang lang="en" />
      <SiteHeader locale="en" />
      <main>
        <SectionHero locale="en" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="en" />
        <SectionEmpathy locale="en" />
        <SectionDemo locale="en" />
        <SectionWhy locale="en" />
        <SectionExpert locale="en" />
        <SectionStart locale="en" />
        <SectionApps locale="en" />
      </main>
      <SiteFooter locale="en" />
      <StickyDownloadBar locale="en" />
    </>
  );
}
