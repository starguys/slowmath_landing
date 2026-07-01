import { appName, iconSrc, type Locale } from "./apps";
import { PracticeLink } from "./PracticeModal";

/**
 * "어디서 시작할까요?" 시작점 안내 섹션 (Figma 142:16911).
 * 단계별(1~4단계) 추천 카드 — 단계 배지 + 제목/부제 + 추천 도구 칩(Figma 일러스트 아이콘).
 * 콘텐츠 640px 중앙정렬. 모바일 카드 1열 스택 / 데스크탑(696~) 2×2 그리드. ko/en 은 locale 분기.
 */
const C = {
  ko: {
    heading: "어디서 시작할까요?",
    subtitle: "아이의 현재 수준에 맞는 도구를 바로 찾아보세요",
    tiers: [
      {
        step: "1단계",
        title: "숫자와 색깔을 아직 몰라요",
        subtitle: "수 감각의 출발점! 숫자 이름·색깔 이름·눈으로 세기부터 시작해요.",
      },
      {
        step: "2단계",
        title: "연필 쥐기·쓰기가 힘들어요",
        subtitle:
          "글씨 쓰기 전 꼭 필요한 손 조절 능력과 눈-손 협응을 차근차근 키워요.",
      },
      {
        step: "3단계",
        title: "비교·규칙 찾기가 어려워요",
        subtitle:
          "크기 비교, 위치 언어, 반복 패턴으로 수학적 사고력의 기초를 닦아요.",
      },
      {
        step: "4단계",
        title: "숫자는 알지만 더하기가 어려워요",
        subtitle:
          "수와 양을 연결하고, 합치고 나누는 경험을 통해 덧셈 개념을 쌓아요.",
      },
    ],
  },
  en: {
    heading: "Where to start?",
    subtitle: "Find the right tool for where your child is right now",
    tiers: [
      {
        step: "Stage 1",
        title: "Numbers and colors are still new",
        subtitle:
          "Where number sense begins — names of numbers, names of colors, counting by eye.",
      },
      {
        step: "Stage 2",
        title: "Holding a pencil, writing is hard",
        subtitle:
          "Build the hand control and eye-hand coordination needed before letters and numbers.",
      },
      {
        step: "Stage 3",
        title: "Comparison and pattern finding is hard",
        subtitle:
          "Size comparison, position words, and repeating patterns — the base of math thinking.",
      },
      {
        step: "Stage 4",
        title: "Numbers are known, but adding is hard",
        subtitle:
          "Connect numbers with amounts; combine and split to build the idea of addition.",
      },
    ],
  },
} as const;

// 단계별 배지 색상 + 추천 도구 slug (이름/링크/아이콘은 공유 모듈에서 로케일별로 가져옴)
const TIER_META = [
  {
    badge: "bg-[#e1effa] text-[#568aba]",
    tools: ["slowmath_number", "slowmath_dice", "slowmath_color"],
  },
  {
    badge: "bg-[#6bade8] text-white",
    tools: ["slowmath_linedraw", "slowmath_dot2dot", "slowmath_numberdraw"],
  },
  {
    badge: "bg-[#ffefd0] text-[#d87f27]",
    tools: [
      "slowmath_comparing",
      "slowmath_comparing2",
      "slowmath_compare",
      "slowmath_pattern",
    ],
  },
  {
    badge: "bg-[#f0a050] text-white",
    tools: [
      "slowmath_matching",
      "slowmath_combining",
      "slowmath_splitting",
      "slowmath_easy",
    ],
  },
];

export default function SectionStart({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="start"
      aria-labelledby="start-heading"
      className="lazy-section w-full scroll-mt-[64px] bg-gradient-to-b from-[#fffbf5] to-[#ffefd0]"
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-10 px-4 py-20">
        {/* 섹션 헤더 */}
        <header className="flex w-full flex-col gap-1 text-[#4a4035]">
          <h2
            id="start-heading"
            className="w-full text-[24px] font-bold leading-[34px] tracking-[-0.6px]"
          >
            {t.heading}
          </h2>
          <p className="w-full text-[16px] font-light leading-[24px] tracking-[-0.2px]">
            {t.subtitle}
          </p>
        </header>

        {/* 단계 카드: 모바일 세로 스택 / 데스크탑(696~) 2×2 그리드. 카드 내부는 텍스트(위) + 도구 풀폭 행(아래) */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {t.tiers.map((tier, i) => {
            const meta = TIER_META[i];
            return (
              <article
                key={tier.step}
                className="flex w-full flex-col gap-8 rounded-[12px] bg-white p-6"
              >
                {/* 텍스트 블록 (위) */}
                <div className="flex w-full flex-col gap-4">
                  <div className="flex">
                    <span
                      className={`inline-flex items-center justify-center rounded-[100px] px-3 py-1 text-[12px] font-bold leading-[18px] ${meta.badge}`}
                    >
                      {tier.step}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 text-[#4a4035]">
                    <h3 className="text-[24px] font-bold leading-[34px] tracking-[-0.6px]">
                      {tier.title}
                    </h3>
                    <p className="text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
                      {tier.subtitle}
                    </p>
                  </div>
                </div>

                {/* 추천 도구 행 (아래, 풀폭). 데스크탑(696~) 2×2 그리드에선 같은 행의 카드
                    높이가 같아지므로, mt-auto 로 도구 묶음을 카드 하단에 붙여 정렬한다
                    (제목 줄 수가 달라 텍스트 높이가 다른 카드끼리도 도구가 바닥에서 정렬됨). */}
                <div className="flex w-full flex-col gap-2 sm:mt-auto">
                  {meta.tools.map((slug) => (
                    <PracticeLink
                      key={slug}
                      slug={slug}
                      locale={locale}
                      className="flex w-full cursor-pointer items-center gap-6 rounded-[8px] border border-[#dadada] px-4 py-2 transition-colors hover:border-[#f3b373] hover:bg-[#fffbf5]"
                    >
                      <img
                        src={iconSrc(slug)}
                        alt=""
                        width={40}
                        height={40}
                        className="block size-10 shrink-0"
                      />
                      <span className="min-w-0 text-[14px] font-bold leading-[20px] text-[#4a4035]">
                        {appName(slug, locale)}
                      </span>
                    </PracticeLink>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
