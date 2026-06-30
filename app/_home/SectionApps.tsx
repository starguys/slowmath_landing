import { APP_ORDER, appName, iconSrc, type Locale } from "./apps";
import { PracticeLink } from "./PracticeModal";

/**
 * 전체 학습 도구 그리드 (Figma 124:5255, PC=MO 동일).
 * Figma 시안 37개 타일 — 전용 일러스트 아이콘(/figma/apps/<slug>.svg) + 이름, 타일 전체가 앱으로 링크.
 * 단일 컬럼 중앙정렬(640px), 3열 그리드. ko/en 은 locale prop 으로 분기.
 */
const C = {
  ko: {
    heading: "전체 학습 도구 한눈에 보기",
    subtitle: "이모지로 훑어보고 관심 가는 것을 바로 열어볼 수 있어요",
  },
  en: {
    heading: "All learning tools at a glance",
    subtitle: "Skim through them all and open any one you'd like to try",
  },
} as const;

export default function SectionApps({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="lazy-section w-full scroll-mt-[64px] bg-white"
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-[40px] px-6 py-[80px]">
        {/* 제목 */}
        <div className="flex w-full flex-col gap-[4px] text-left text-[#4a4035]">
          <h2
            id="apps-heading"
            className="text-[24px] font-bold leading-[34px] tracking-[-0.6px]"
          >
            {t.heading}
          </h2>
          <p className="text-[16px] font-light leading-[24px] tracking-[-0.2px]">
            {t.subtitle}
          </p>
        </div>

        {/* 아이콘 그리드 (3열) */}
        <ul className="grid w-full grid-cols-3 gap-[16px]">
          {APP_ORDER.map((slug) => (
            <li key={slug} className="flex">
              <PracticeLink
                slug={slug}
                locale={locale}
                className="flex w-full cursor-pointer flex-col items-center justify-center gap-[8px] rounded-[16px] border border-[#dadada] py-[20px] text-[#4a4035] transition-colors hover:border-[#f0a050] hover:bg-[#fffbf5]"
              >
                <img
                  src={iconSrc(slug)}
                  alt=""
                  width={48}
                  height={48}
                  className="block size-[48px] shrink-0"
                />
                <span className="text-center text-[12px] font-medium leading-[18px]">
                  {appName(slug, locale)}
                </span>
              </PracticeLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
