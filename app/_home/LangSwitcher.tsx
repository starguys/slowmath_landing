"use client";

import { type Locale } from "./apps";
import { IS_EN_SITE, SITE_URL } from "../_seo/site";

/**
 * 언어 토글 (KR/CN/TW/JP/EN/ES).
 * href 는 canonical 경로(/ · /cn/ · /tw/ · /jp/ · /en/ · /es/) — Googlebot 이 이 링크를 따라가면 "리디렉션" 리포트에 잡히던
 * 문제(?lang= 쿼리 후 layout.tsx 의 replaceState 로 제거됨)를 원천 차단.
 * 사용자가 실제로 클릭할 때만 onClick 에서 localStorage 의 lang-pref 를 세팅해 layout.tsx 스크립트가
 * 다시 자동 리디렉트하지 못하게 한다.
 */
type Props = {
  locale: Locale;
  activeCls: string;
  inactiveCls: string;
};

// 영어판 전용 배포에는 다른 언어 페이지가 없다(빌드에서 덜어낸다).
// 그 버튼들은 집이 있는 slowkids.net 을 가리켜야 404 가 되지 않는다.
const other = (p: string) => (IS_EN_SITE ? `${SITE_URL}${p}` : p);
// 영어 버튼은 전용 배포에서 자기 뿌리를 가리킨다.
const enHome = () => (IS_EN_SITE ? "/" : "/en/");

export default function LangSwitcher({ locale, activeCls, inactiveCls }: Props) {
  const setPref = (lang: Locale) => {
    try {
      localStorage.setItem("lang-pref", lang);
    } catch {}
  };
  const cls = (active: boolean) =>
    `flex flex-col items-center justify-center px-3 py-2 text-[12px] font-bold leading-[18px] ${active ? activeCls : inactiveCls}`;
  const label =
    locale === "zh"
      ? "語言選擇"
      : locale === "zhcn"
        ? "语言选择"
        : locale === "en"
          ? "Language"
          : locale === "ja"
            ? "言語選択"
            : locale === "es"
              ? "Selección de idioma"
              : "언어 선택";
  return (
    <nav
      aria-label={label}
      className="flex shrink-0 items-center overflow-hidden rounded-[8px]"
    >
      <a
        href={other("/")}
        aria-label="한국어"
        aria-current={locale === "ko" ? "page" : undefined}
        onClick={() => setPref("ko")}
        className={cls(locale === "ko")}
      >
        KR
      </a>
      <a
        href={other("/cn/")}
        aria-label="简体中文"
        aria-current={locale === "zhcn" ? "page" : undefined}
        onClick={() => setPref("zhcn")}
        className={cls(locale === "zhcn")}
      >
        CN
      </a>
      <a
        href={other("/tw/")}
        aria-label="繁體中文"
        aria-current={locale === "zh" ? "page" : undefined}
        onClick={() => setPref("zh")}
        className={cls(locale === "zh")}
      >
        TW
      </a>
      <a
        href={other("/jp/")}
        aria-label="日本語"
        aria-current={locale === "ja" ? "page" : undefined}
        onClick={() => setPref("ja")}
        className={cls(locale === "ja")}
      >
        JP
      </a>
      <a
        href={enHome()}
        aria-label="English"
        aria-current={locale === "en" ? "page" : undefined}
        onClick={() => setPref("en")}
        className={cls(locale === "en")}
      >
        EN
      </a>
      <a
        href={other("/es/")}
        aria-label="Español"
        aria-current={locale === "es" ? "page" : undefined}
        onClick={() => setPref("es")}
        className={cls(locale === "es")}
      >
        ES
      </a>
    </nav>
  );
}
