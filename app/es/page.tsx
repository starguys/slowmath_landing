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
const SITE_URL_ES = `${SITE_URL}/es`;
// OG 이미지는 여섯 언어가 같은 마스코트 이미지를 쓴다 (글자가 없어 언어 중립).
const OG_IMAGE = {
  url: `${SITE_URL}/og-image-mascot.png?v=20260901c`,
  width: 1200,
  height: 1200,
  alt: "Mascota de LittleSteps — una tortuga con una tableta",
};

export const metadata: Metadata = {
  title: "LittleSteps — Despacio, pero en la dirección correcta",
  description:
    "Herramientas de aprendizaje para niños con retraso del desarrollo, funcionamiento intelectual límite o cualquier niño que aprende más despacio que sus compañeros — para construir las bases de las matemáticas paso a paso. Disponible en iOS y Android.",
  alternates: {
    canonical: SITE_URL_ES,
    languages: {
      ko: SITE_URL + "/",
      "zh-Hant": SITE_URL + "/tw",
      "zh-Hans": SITE_URL + "/cn",
      en: SITE_URL + "/en",
      ja: SITE_URL + "/jp",
      es: SITE_URL_ES,
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "LittleSteps — Despacio, pero en la dirección correcta",
    description:
      "Pequeñas prácticas de matemáticas para niños que asimilan los conceptos a su propio ritmo — desde la primera cognición hasta las tablas de multiplicar. Disponible en iOS y Android.",
    siteName: "LittleSteps",
    locale: "es_ES",
    alternateLocale: ["ko_KR", "zh_TW", "zh_CN", "en_US", "ja_JP"],
    type: "website",
    url: SITE_URL_ES,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "LittleSteps — Despacio, pero en la dirección correcta",
    description:
      "Pequeñas prácticas de matemáticas para niños que aprenden a su propio ritmo. Disponible en iOS y Android.",
    images: [OG_IMAGE.url],
  },
  itunes: {
    appId: "6763979294",
  },
};

// 서브내비 탭(스페인어) — 세그먼트가 좁아 라벨은 간결하게.
const NAV_ITEMS: NavItem[] = [
  { label: "Intro", targetId: "intro" },
  { label: "Vídeo", targetId: "demo" },
  { label: "Empezar", targetId: "start" },
  { label: "Prácticas", targetId: "apps" },
];

export default function Page() {
  return (
    <PracticeModalProvider locale="es">
      <JsonLd locale="es" />
      <SetHtmlLang lang="es" />
      <SiteHeader locale="es" />
      <main>
        <SectionHero locale="es" />
        <SubNav items={NAV_ITEMS} />
        <SectionIntro locale="es" />
        <SectionEmpathy locale="es" />
        <SectionDemo locale="es" />
        <SectionWhy locale="es" />
        <SectionStart locale="es" />
        <SectionApps locale="es" />
      </main>
      <SiteFooter locale="es" />
      <StickyDownloadBar locale="es" />
    </PracticeModalProvider>
  );
}
