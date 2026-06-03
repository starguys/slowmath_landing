"use client";

import { useEffect, useState } from "react";

const IOS_KR = "https://apps.apple.com/kr/app/id6763979294";
const IOS_US = "https://apps.apple.com/us/app/id6763979294";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.everydaysummers.slowkids";

const imgStyle = { height: 44, width: "auto", display: "block" } as const;

/**
 * 애플·구글 공식 다운로드 배지(이미지). ko/en 동일 배지, iOS 지역 URL만 분기.
 * - 모바일: 세로 배치 (column)
 * - 데스크탑(sm 이상): 가로 배치 (row)
 * - OS 감지: iOS 사용자에겐 Apple 배지를 위로, 그 외에는 Google Play를 위로
 */
export default function StoreBadges({ locale = "ko" }: { locale?: "ko" | "en" }) {
  const ko = locale === "ko";
  const [iosFirst, setIosFirst] = useState(false);

  useEffect(() => {
    const ua = (typeof navigator !== "undefined" ? navigator.userAgent : "") || "";
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    if (isIOS) setIosFirst(true);
  }, []);

  const appleBadge = (
    <a
      key="apple"
      href={ko ? IOS_KR : IOS_US}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ko ? "App Store에서 느린아이 다운로드" : "Download SlowKids on the App Store"}
    >
      <img src="/badge-apple.png" alt="Download on the App Store" style={imgStyle} />
    </a>
  );
  const googleBadge = (
    <a
      key="google"
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ko ? "Google Play에서 느린아이 다운로드" : "Get it on Google Play"}
    >
      <img src="/badge-google.png" alt="Get it on Google Play" style={imgStyle} />
    </a>
  );

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
      {iosFirst ? appleBadge : googleBadge}
      {iosFirst ? googleBadge : appleBadge}
    </div>
  );
}
