import { type Locale } from "./apps";

/**
 * 다크 푸터 (Figma 124:5371, PC=MO 동일). 단일 컬럼 중앙정렬(콘텐츠 640px).
 * 브랜드 + 태그라인 → 문의(mailto) → 약관/개인정보 → 구분선 → 해시태그 + KR/EN 토글.
 * ko/en 분기(텍스트·법적 링크 경로·토글 활성 상태).
 */
const C = {
  ko: {
    wm: ["느린", "아이"],
    tagline1: "발달지연·발달장애·느린학습자·경계선지능 아동을 위한",
    tagline2: "간단하지만 강력한 학습 도구",
    contact: "제휴 · 피드백 문의",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    termsHref: "/terms",
    privacyHref: "/privacy",
    hashtags1: "#발달지연 #발달장애 #느린학습자 #경계선지능",
    hashtags2: "#학습장애 #ADHD #자폐스펙트럼 #특수교육",
  },
  en: {
    wm: ["Slow", "Kids"],
    tagline1:
      "For children with developmental delays, developmental disabilities, slow learning, or borderline intelligence",
    tagline2: "Simple but powerful learning tools",
    contact: "Partnership · Feedback",
    terms: "Terms",
    privacy: "Privacy",
    termsHref: "/en/terms",
    privacyHref: "/en/privacy",
    hashtags1: "#DevelopmentalDelay #DevelopmentalDisability #SlowLearners #BorderlineIQ",
    hashtags2: "#LearningDisability #ADHD #AutismSpectrum #SpecialEducation",
  },
} as const;

const ACTIVE = "bg-[#f4f4f4] text-[#1c1c1e]";
const INACTIVE = "bg-[#686868] text-[#b4b4b4]";

export default function SiteFooter({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  const koActive = locale === "ko";
  return (
    <footer className="w-full bg-[#363636]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-4 px-4 py-14">
        {/* 브랜드 + 태그라인 */}
        <div className="flex w-full flex-col items-center justify-center gap-2 [word-break:break-word]">
          <p className="w-full font-bold tracking-[-0.6px]">
            <span className="text-[24px] leading-[34px] text-[#6bade8]">
              {t.wm[0]}
            </span>
            <span className="text-[24px] leading-[34px] text-[#f0a050]">
              {t.wm[1]}
            </span>
          </p>
          <div className="w-full text-[14px] font-medium leading-[20px] tracking-[-0.2px] text-[#b4b4b4]">
            <p>{t.tagline1}</p>
            <p>{t.tagline2}</p>
          </div>
        </div>

        {/* 제휴·피드백 문의 — 버튼도 링크도 아닌 정보용 UI(라벨 + 이메일 텍스트).
            이메일은 클릭 대상이 아니라 표시용이므로 pointer 커서·hover 효과 없음(span).
            넓은 화면: 좌우 분할 / 좁은 화면(≤~370px): 이메일이 아래로 줄바꿈(잘림 방지) */}
        <div className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-[12px] bg-[#686868] px-4 py-[18px]">
          <span className="shrink-0 text-[14px] font-bold leading-[20px] tracking-[-0.2px] text-white">
            {t.contact}
          </span>
          <span className="whitespace-nowrap text-[13px] font-medium leading-[20px] tracking-[-0.2px] text-[#dadada]">
            contact@everydaysummer.net
          </span>
        </div>

        {/* 법적 링크 */}
        <div className="flex w-full items-start gap-2">
          <a
            href={t.termsHref}
            className="rounded-[12px] p-2 text-[14px] font-bold leading-[20px] tracking-[-0.2px] text-[#dadada] transition-colors hover:text-white"
          >
            {t.terms}
          </a>
          <a
            href={t.privacyHref}
            className="rounded-[12px] p-2 text-[14px] font-bold leading-[20px] tracking-[-0.2px] text-[#dadada] transition-colors hover:text-white"
          >
            {t.privacy}
          </a>
        </div>

        {/* 구분선 */}
        <div className="h-px w-full bg-[#4f4f4f]" aria-hidden="true" />

        {/* 해시태그 + 언어 토글 */}
        <div className="flex w-full items-start gap-4">
          <div className="min-w-0 flex-1 text-[12px] font-light leading-[18px] text-[#8f8f8f]">
            <p>{t.hashtags1}</p>
            <p>{t.hashtags2}</p>
          </div>
          <nav
            aria-label={locale === "en" ? "Language" : "언어 선택"}
            className="flex shrink-0 items-center overflow-hidden rounded-[8px]"
          >
            <a
              href="/?lang=ko"
              aria-label="한국어"
              aria-current={koActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center px-4 py-2 text-[12px] font-bold leading-[18px] ${koActive ? ACTIVE : INACTIVE}`}
            >
              KR
            </a>
            <a
              href="/en/?lang=en"
              aria-label="English"
              aria-current={!koActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center px-4 py-2 text-[12px] font-bold leading-[18px] ${!koActive ? ACTIVE : INACTIVE}`}
            >
              EN
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
