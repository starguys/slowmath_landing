"use client";

import { useEffect, useState } from "react";
import { type Locale } from "./_home/apps";

const IOS_KR = "https://apps.apple.com/kr/app/id6763979294";
const IOS_US = "https://apps.apple.com/us/app/id6763979294";
const IOS_JP = "https://apps.apple.com/jp/app/id6763979294";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.everydaysummers.slowkids";

const badgeStyle = { height: 32, width: "auto", display: "block" } as const;

/** 모바일 sticky 하단 다운로드 바 — hero 보일 땐 숨김, 스크롤해서 hero 벗어나면 노출 */
export default function StickyDownloadBar({ locale = "ko" }: { locale?: Locale }) {
  const [visible, setVisible] = useState(false);
  const isKo = locale === "ko";
  const isJa = locale === "ja";
  const iosHref = isKo ? IOS_KR : isJa ? IOS_JP : IOS_US;
  const appleAria = isKo
    ? "App Store에서 느린아이 다운로드"
    : isJa
      ? "App StoreでLittleStepsをダウンロード"
      : "Download LittleSteps on the App Store";
  const googleAria = isKo
    ? "Google Play에서 느린아이 다운로드"
    : isJa
      ? "Google PlayでLittleStepsを入手"
      : "Get LittleSteps on Google Play";
  const badgeLabel = isKo ? "무료 체험" : isJa ? "無料体験" : "Free trial";

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const obs = new IntersectionObserver(
      (entries) => {
        // hero가 약간이라도 보이면 숨김, 완전히 벗어나면 노출
        setVisible(!entries[0].isIntersecting);
      },
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      // 모바일(700px 미만)에서만 노출. display 는 인라인이 아닌 클래스로 제어해야
      // 브레이크포인트(700px) hidden 이 인라인 display 에 덮이지 않는다.
      className="hidden max-sm:flex"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        borderTop: "1px solid #FFDFA1",
        padding: "8px 12px",
        paddingBottom: "calc(8px + env(safe-area-inset-bottom))",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.06)",
        zIndex: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href={iosHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={appleAria}
      >
        <img src="/badge-apple.png" alt="Download on the App Store" style={badgeStyle} />
      </a>
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={googleAria}
      >
        <img src="/badge-google.png" alt="Get it on Google Play" style={badgeStyle} />
      </a>
      <span
        style={{
          color: "#D87F27",
          background: "#FFEFD0",
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: "0.85rem",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          marginLeft: 2,
        }}
      >
        {badgeLabel}
      </span>
    </div>
  );
}
