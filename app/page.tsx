import SiteHeader from "./_home/SiteHeader";
import SectionHero from "./_home/SectionHero";
import SubNav, { type NavItem } from "./_home/SubNav";
import SectionIntro from "./_home/SectionIntro";
import SectionEmpathy from "./_home/SectionEmpathy";
import SectionDemo from "./_home/SectionDemo";
import SectionWhy from "./_home/SectionWhy";
import SectionExpert from "./_home/SectionExpert";
import SectionReviews from "./_home/SectionReviews";
import SectionStart from "./_home/SectionStart";
import SectionApps from "./_home/SectionApps";
import SiteFooter from "./_home/SiteFooter";
import StickyDownloadBar from "./StickyDownloadBar";
import { PracticeModalProvider } from "./_home/PracticeModal";
import JsonLd from "./_seo/JsonLd";

// 서브내비 탭. Figma navi 는 4탭 균등 세그먼트(탭당 ~80px) — 라벨은 한 줄에 들어가게 짧게.
const NAV_ITEMS: NavItem[] = [
  { label: "느린아이", targetId: "intro" },
  { label: "체험영상", targetId: "demo" },
  { label: "시작하기", targetId: "start" },
  { label: "학습도구", targetId: "apps" },
];

export default function Page() {
  return (
    <PracticeModalProvider locale="ko">
      <JsonLd locale="ko" />
      <SiteHeader locale="ko" />
      <main>
        <SectionHero locale="ko" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="ko" />
        <SectionEmpathy locale="ko" />
        <SectionDemo locale="ko" />
        <SectionWhy locale="ko" />
        <SectionExpert locale="ko" />
        <SectionReviews locale="ko" />
        <SectionStart locale="ko" />
        <SectionApps locale="ko" />
      </main>
      <SiteFooter locale="ko" />
      <StickyDownloadBar locale="ko" />
    </PracticeModalProvider>
  );
}
