"use client";

/**
 * 언어 토글 (KR/EN).
 * href 는 canonical 경로(/ · /en/) — Googlebot 이 이 링크를 따라가면 "리디렉션" 리포트에 잡히던
 * 문제(?lang= 쿼리 후 layout.tsx 의 replaceState 로 제거됨)를 원천 차단.
 * 사용자가 실제로 클릭할 때만 onClick 에서 localStorage 의 lang-pref 를 세팅해 layout.tsx 스크립트가
 * 다시 자동 리디렉트하지 못하게 한다.
 */
type Props = {
  koActive: boolean;
  activeCls: string;
  inactiveCls: string;
};

export default function LangSwitcher({ koActive, activeCls, inactiveCls }: Props) {
  const setPref = (lang: "ko" | "en") => {
    try {
      localStorage.setItem("lang-pref", lang);
    } catch {}
  };
  return (
    <nav
      aria-label={koActive ? "언어 선택" : "Language"}
      className="flex shrink-0 items-center overflow-hidden rounded-[8px]"
    >
      <a
        href="/"
        aria-label="한국어"
        aria-current={koActive ? "page" : undefined}
        onClick={() => setPref("ko")}
        className={`flex flex-col items-center justify-center px-4 py-2 text-[12px] font-bold leading-[18px] ${koActive ? activeCls : inactiveCls}`}
      >
        KR
      </a>
      <a
        href="/en/"
        aria-label="English"
        aria-current={!koActive ? "page" : undefined}
        onClick={() => setPref("en")}
        className={`flex flex-col items-center justify-center px-4 py-2 text-[12px] font-bold leading-[18px] ${!koActive ? activeCls : inactiveCls}`}
      >
        EN
      </a>
    </nav>
  );
}
