import { appName, appsByCategory, CATEGORIES, iconSrc, type Locale } from "./apps";
import { PracticeLink } from "./PracticeModal";

/**
 * 전체 학습도구 그리드 (Figma 142:16990).
 * shell/apps.js 와 동일한 7개 카테고리(기초 인지 → 수 개념 → 수 관계 → 덧셈 전 개념 → 덧셈 → 뺄셈 → 곱셈)로
 * 나눠서, 각 카테고리별 소제목 + 부제 아래에 아이콘 그리드를 반복 렌더링한다.
 * 콘텐츠 640px 중앙정렬. 모바일 2열 / 데스크탑(696~) 4열 그리드. ko/en 은 locale prop 으로 분기.
 */
const C = {
  ko: {
    heading: "전체 학습도구 한눈에 보기",
    subtitle: "카테고리별로 훑어보고 관심 가는 것을 바로 열어볼 수 있어요",
  },
  en: {
    heading: "All learning tools at a glance",
    subtitle: "Browse by category and open any one you'd like to try",
  },
  ja: {
    heading: "すべての学習ツールを一目で",
    subtitle: "カテゴリごとに眺めて、気になるものをそのまま開けます",
  },
} as const;

export default function SectionApps({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  const groups = appsByCategory(locale);
  const catMeta = Object.fromEntries(CATEGORIES.map((c) => [c.key, c])) as Record<
    (typeof CATEGORIES)[number]["key"],
    (typeof CATEGORIES)[number]
  >;
  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="lazy-section w-full scroll-mt-[64px] bg-white"
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-[40px] px-4 py-[80px]">
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

        {/* 카테고리별 그룹 */}
        <div className="flex w-full flex-col gap-[36px]">
          {groups.map(({ category, slugs }) => {
            if (slugs.length === 0) return null;
            const meta = catMeta[category];
            return (
              <div key={category} className="flex w-full flex-col gap-[16px]">
                {/* 카테고리 소제목 + 부제 */}
                <div className="flex w-full flex-col gap-[2px] text-left text-[#4a4035]">
                  <h3 className="text-[18px] font-bold leading-[26px] tracking-[-0.4px]">
                    {meta.name[locale]}
                  </h3>
                  <p className="text-[13px] font-light leading-[20px] tracking-[-0.1px] text-[#7B6545]">
                    {meta.desc[locale]}
                  </p>
                </div>

                {/* 아이콘 그리드: 모바일 2열 / 데스크탑(696~) 4열 */}
                <ul className="grid w-full grid-cols-2 gap-[16px] sm:grid-cols-4">
                  {slugs.map((slug) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
