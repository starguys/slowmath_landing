"use client";

import { useEffect } from "react";

/**
 * output: "export" + App Router는 root layout이 하나뿐이라 /jp도 <html lang="ko">로
 * 나간다. postbuild 패치가 배포 환경에서 불안정해, 클라이언트에서 확실하게 보정한다.
 * (hreflang/canonical은 이미 정상이라 SEO 핵심 신호엔 영향 없음 — 정확도/접근성 보강용)
 */
export default function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);
  return null;
}
