"use client";

import { useEffect, useState } from "react";

const IOS_KR = "https://apps.apple.com/kr/app/id6763979294";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.everydaysummers.slowkids";

const badgeStyle = { height: 32, width: "auto", display: "block" } as const;

/** 모바일 sticky 하단 다운로드 바 — hero 보일 땐 숨김, 스크롤해서 hero 벗어나면 노출 */
export default function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);

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
      className="sm:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        borderTop: "1px solid #EDE0C8",
        padding: "8px 12px",
        paddingBottom: "calc(8px + env(safe-area-inset-bottom))",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.06)",
        zIndex: 50,
        display: "flex",
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
        href={IOS_KR}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store에서 느린아이 다운로드"
      >
        <img src="/badge-apple.png" alt="Download on the App Store" style={badgeStyle} />
      </a>
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play에서 느린아이 다운로드"
      >
        <img src="/badge-google.png" alt="Get it on Google Play" style={badgeStyle} />
      </a>
      <span
        style={{
          color: "#1E6FB8",
          background: "#E8F2FB",
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: "0.85rem",
          fontWeight: 800,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          marginLeft: 2,
        }}
      >
        무료 체험
      </span>
    </div>
  );
}
