import { type Locale } from "./apps";

/**
 * 히어로 (Figma 124:5044, PC=MO 동일). 단일 컬럼 중앙정렬(640px), 모바일 사이즈.
 * 그라데이션 배경 + 슬로건 + 거북이 마스코트 + 흰 서브카드. ko/en 은 locale 분기.
 * h1/카드 강조 텍스트는 [pre, accent, post] 3분할로 보관해 색 강조를 유지한다.
 */
const C = {
  ko: {
    h1: [
      ["느리지만 ", "올바른 방향", "으로"],
      ["", "한 걸음씩", " 나아갑니다"],
    ],
    cardBold: [
      ["카이스트 출신, 자폐스펙트럼 ", "발달장애 아이의 아빠", "가"],
      ["경험을 바탕으로 직접 만든 ", "느린아이", ""],
    ],
    descBold: "발달지연·발달장애·느린학습자·경계선지능 아동",
    descMid: "이 자신의 속도로",
    descLine2: "수학의 기초를 차근차근 쌓도록 설계된 학습 도구입니다.",
  },
  en: {
    h1: [
      ["Slowly but in ", "the right direction", ","],
      ["", "one step", " at a time"],
    ],
    cardBold: [
      [
        "Made by a KAIST-trained engineer, the ",
        "father of a child on the autism spectrum",
        ",",
      ],
      ["who built ", "SlowKids", " from his own family's experience"],
    ],
    descBold:
      "children with developmental delays, developmental disabilities, slow learning, or borderline intelligence",
    descMid: "",
    descLine2:
      "— learning tools designed to build the foundations of math step by step, at their own pace.",
  },
} as const;

export default function SectionHero({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="w-full scroll-mt-[64px] bg-gradient-to-b from-[#fffbf5] to-[#ffefd0]"
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-[48px] px-6 py-[72px]">
        <h1
          id="hero-heading"
          className="text-center font-bold tracking-[-0.6px] text-[#4a4035] text-[32px] leading-[42px]"
        >
          <span className="block">
            {t.h1[0][0]}
            <span className="text-[#6bade8]">{t.h1[0][1]}</span>
            {t.h1[0][2]}
          </span>
          <span className="block">
            {t.h1[1][0]}
            <span className="text-[#f0a050]">{t.h1[1][1]}</span>
            {t.h1[1][2]}
          </span>
        </h1>

        <img
          src="/figma/hero/mascot.png"
          alt={
            locale === "en"
              ? "SlowKids turtle character studying on a tablet"
              : "태블릿으로 공부하는 느린아이 거북이 캐릭터"
          }
          className="h-[210px] w-[258px] object-contain"
        />

        <div className="flex w-full flex-col items-center gap-[8px] rounded-[12px] bg-white px-[24px] py-[32px] text-center text-[#4a4035]">
          <div className="font-bold tracking-[-0.6px] text-[18px] leading-[22px]">
            <p>
              {t.cardBold[0][0]}
              <span className="text-[#f0a050]">{t.cardBold[0][1]}</span>
              {t.cardBold[0][2]}
            </p>
            <p>
              {t.cardBold[1][0]}
              <span className="text-[#6bade8]">{t.cardBold[1][1]}</span>
              {t.cardBold[1][2]}
            </p>
          </div>
          <div className="font-medium tracking-[-0.2px] opacity-70 text-[14px] leading-[20px]">
            <p>
              <span className="font-bold">{t.descBold}</span>
              {t.descMid}
            </p>
            <p>{t.descLine2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
