const IOS_KR = "https://apps.apple.com/kr/app/id6763979294";
const IOS_US = "https://apps.apple.com/us/app/id6763979294";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.everydaysummers.slowkids";

const imgStyle = { height: 44, width: "auto", display: "block" } as const;

/** 애플·구글 공식 다운로드 배지(이미지). ko/en 동일 배지, iOS 지역 URL만 분기 */
export default function StoreBadges({ locale = "ko" }: { locale?: "ko" | "en" }) {
  const ko = locale === "ko";
  return (
    <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
      <a
        href={ko ? IOS_KR : IOS_US}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ko ? "App Store에서 느린아이 다운로드" : "Download SlowKids on the App Store"}
      >
        <img src="/badge-apple.png" alt="Download on the App Store" style={imgStyle} />
      </a>
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ko ? "Google Play에서 느린아이 다운로드" : "Get it on Google Play"}
      >
        <img src="/badge-google.png" alt="Get it on Google Play" style={imgStyle} />
      </a>
    </div>
  );
}
