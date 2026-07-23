import { type Locale } from "./apps";

const APPLE_KR = "https://apps.apple.com/kr/app/id6763979294";
const APPLE_US = "https://apps.apple.com/us/app/id6763979294";
const GOOGLE_URL =
  "https://play.google.com/store/apps/details?id=com.everydaysummers.slowkids";

/**
 * 상단 브랜드 바(헤더). 좌측 워드마크 + 우측 앱스토어/구글플레이 배지.
 * 콘텐츠 640px 중앙정렬. 배지는 모바일(<696) 세로 스택 / 데스크탑(696~) 가로.
 * ko/en 분기(워드마크·iOS 지역 URL).
 */
const C = {
  ko: {
    home: "/",
    homeLabel: "느린아이 시리즈 홈",
    wm: ["느린", "아이", " 시리즈"],
    apple: APPLE_KR,
    appleAlt: "App Store에서 느린아이 다운로드",
    googleAlt: "Google Play에서 느린아이 다운로드",
  },
  en: {
    home: "/en",
    homeLabel: "LittleSteps home",
    wm: ["Little", "Steps", ""],
    apple: APPLE_US,
    appleAlt: "Download LittleSteps on the App Store",
    googleAlt: "Get LittleSteps on Google Play",
  },
} as const;

export default function SiteHeader({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <header className="w-full border-b border-[#dadada] bg-white">
      <div className="mx-auto flex w-full max-w-[640px] items-center gap-4 px-5 py-[16px]">
        <a
          href={t.home}
          aria-label={t.homeLabel}
          className="min-w-0 flex-1 font-bold tracking-[-0.6px] text-[20px] leading-[28px]"
        >
          <span className="text-[#6bade8]">{t.wm[0]}</span>
          <span className="text-[#f0a050]">{t.wm[1]}</span>
          <span className="text-[#4a4035]">{t.wm[2]}</span>
        </a>

        <div className="flex shrink-0 flex-col items-end gap-2 sm:flex-row sm:items-center">
          <a href={t.apple} target="_blank" rel="noopener noreferrer">
            <img
              src="/badge-apple.png"
              alt={t.appleAlt}
              className="h-[28px] w-auto"
            />
          </a>
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
            <img
              src="/badge-google.png"
              alt={t.googleAlt}
              className="h-[28px] w-auto"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
