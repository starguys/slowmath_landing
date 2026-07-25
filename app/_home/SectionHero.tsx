import { type Locale } from "./apps";

// 서브카드 한 줄 = 색/굵기 세그먼트 배열. 줄바꿈은 Figma(142:16782) 시안과 동일하게 <p> 단위로 고정.
type Seg = { t: string; c?: "o" | "b"; bold?: boolean };
type HeroCopy = {
  h1: string[][];
  cardLines: Seg[][];
  descLines: Seg[][];
};

/**
 * 히어로 (Figma 142:16779). 단일 컬럼 중앙정렬(640px).
 * 그라데이션 배경 + 슬로건 + 거북이 마스코트 + 흰 서브카드. ko/en 은 locale 분기.
 * h1 은 [pre, accent, post] 3분할, 서브카드 문구는 줄 단위 세그먼트로 보관해
 * 색 강조와 함께 Figma 의 줄바꿈(굵은 문구 3줄 / 설명 3줄)을 그대로 재현한다.
 */
const C: Record<Locale, HeroCopy> = {
  ko: {
    h1: [
      ["느리지만 ", "올바른 방향", "으로"],
      ["", "한 걸음씩", " 나아갑니다"],
    ],
    cardLines: [
      [{ t: "카이스트 출신, 자폐스펙트럼" }],
      [{ t: "발달장애 아이의 아빠", c: "o" }, { t: "가" }],
      [{ t: "경험을 바탕으로 직접 만든 " }, { t: "느린아이", c: "b" }],
    ],
    descLines: [
      [
        { t: "발달지연·발달장애·느린학습자·경계선지능 등 느린아이", bold: true },
        { t: "들이" },
      ],
      [{ t: "자신의 속도로 수학의 기초를 차근차근 쌓도록" }],
      [{ t: "설계된 학습도구입니다." }],
    ],
  },
  en: {
    h1: [
      ["Slowly but in ", "the right direction", ","],
      ["", "one step", " at a time"],
    ],
    cardLines: [
      [
        { t: "Made by a KAIST-trained engineer, the " },
        { t: "father of a child on the autism spectrum", c: "o" },
        { t: "," },
      ],
      [
        { t: "who built " },
        { t: "LittleSteps", c: "b" },
        { t: " from his own family's experience" },
      ],
    ],
    descLines: [
      [
        {
          t: "children with developmental delays, developmental disabilities, slow learning, borderline intelligence, and other slower learners",
          bold: true,
        },
      ],
      [
        {
          t: "— learning tools designed to build the foundations of math step by step, at their own pace.",
        },
      ],
    ],
  },
};

const ACCENT = { o: "text-[#f0a050]", b: "text-[#6bade8]" } as const;

export default function SectionHero({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="w-full scroll-mt-[64px] bg-gradient-to-b from-[#fffbf5] to-[#ffefd0]"
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-[48px] px-2 py-[72px]">
        <h1
          id="hero-heading"
          className="text-center font-bold tracking-[-0.6px] text-[#4a4035] text-[30px] leading-[42px]"
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
              ? "LittleSteps turtle character studying on a tablet"
              : "태블릿으로 공부하는 느린아이 거북이 캐릭터"
          }
          className="h-[183px] w-[224px] object-contain"
        />

        <div className="flex w-full flex-col items-center gap-[8px] rounded-[12px] bg-white px-[14px] py-[32px] text-center text-[#4a4035] [word-break:break-word]">
          <div className="w-full font-bold tracking-[-0.6px] text-[18px] leading-[22px]">
            {t.cardLines.map((line, i) => (
              <p key={i}>
                {line.map((seg, j) => (
                  <span key={j} className={seg.c ? ACCENT[seg.c] : undefined}>
                    {seg.t}
                  </span>
                ))}
              </p>
            ))}
          </div>
          <div className="w-full font-medium tracking-[-0.2px] opacity-70 text-[14px] leading-[20px]">
            {t.descLines.map((line, i) => (
              <p key={i}>
                {line.map((seg, j) => (
                  <span key={j} className={seg.bold ? "font-bold" : undefined}>
                    {seg.t}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
