import SiteHeader from "./_home/SiteHeader";
import SectionHero from "./_home/SectionHero";
import SubNav, { type NavItem } from "./_home/SubNav";
import SectionIntro from "./_home/SectionIntro";
import SectionEmpathy from "./_home/SectionEmpathy";
import SectionDemo from "./_home/SectionDemo";
import SectionWhy from "./_home/SectionWhy";
import SectionExpert from "./_home/SectionExpert";
import SectionStart from "./_home/SectionStart";
import SectionApps from "./_home/SectionApps";
import SiteFooter from "./_home/SiteFooter";
import StickyDownloadBar from "./StickyDownloadBar";

// 서브내비 탭(히어로 아래 sticky). Figma navi 는 4탭 균등 세그먼트.
const NAV_ITEMS: NavItem[] = [
  { label: "느린아이란?", targetId: "intro" },
  { label: "체험 영상", targetId: "demo" },
  { label: "어디서 시작?", targetId: "start" },
  { label: "전체 도구", targetId: "apps" },
];

export default function Page() {
  return (
    <>
      <SiteHeader locale="ko" />
      <main>
        <SectionHero locale="ko" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="ko" />
        <SectionEmpathy locale="ko" />
        <SectionDemo locale="ko" />
        <SectionWhy locale="ko" />
        <SectionExpert locale="ko" />
        <SectionStart locale="ko" />
        <SectionApps locale="ko" />
      </main>
      <SiteFooter locale="ko" />
      <StickyDownloadBar locale="ko" />
    </>
  );
}
