"use client";

import { type Locale } from "./apps";

/**
 * 언어 토글 (KR/EN/JP).
 * href 는 canonical 경로(/ · /en/ · /jp/) — Googlebot 이 이 링크를 따라가면 "리디렉션" 리포트에 잡히던
 * 문제(?lang= 쿼리 후 layout.tsx 의 replaceState 로 제거됨)를 원천 차단.
 * 사용자가 실제로 클릭할 때만 onClick 에서 localStorage 의 lang-pref 를 세팅해 layout.tsx 스크립트가
 * 다시 자동 리디렉트하지 못하게 한다.
 */
type Props = {
  locale: Locale;
  activeCls: string;
  inactiveCls: string;
};

export default function LangSwitcher({ locale, activeCls, inactiveCls }: Props) {
  const setPref = (lang: Locale) => {
    try {
      localStorage.setItem("lang-pref", lang);
    } catch {}
  };
  const cls = (active: boolean) =>
    `flex flex-col items-center justify-center px-4 py-2 text-[12px] font-bold leading-[18px] ${active ? activeCls : inactiveCls}`;
  const label =
    locale === "en" ? "Language" : locale === "ja" ? "言語選択" : "언어 선택";
  return (
    <nav
      aria-label={label}
      className="flex shrink-0 items-center overflow-hidden rounded-[8px]"
    >
      <a
        href="/"
        aria-label="한국어"
        aria-current={locale === "ko" ? "page" : undefined}
        onClick={() => setPref("ko")}
        className={cls(locale === "ko")}
      >
        KR
      </a>
      <a
        href="/en/"
        aria-label="English"
        aria-current={locale === "en" ? "page" : undefined}
        onClick={() => setPref("en")}
        className={cls(locale === "en")}
      >
        EN
      </a>
      <a
        href="/jp/"
        aria-label="日本語"
        aria-current={locale === "ja" ? "page" : undefined}
        onClick={() => setPref("ja")}
        className={cls(locale === "ja")}
      >
        JP
      </a>
    </nav>
  );
}
