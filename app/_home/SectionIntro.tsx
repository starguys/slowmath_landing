import { type Locale } from "./apps";

/**
 * "느린아이란?" 인트로 밴드 (Figma 124:5059, PC=MO 동일).
 * 오렌지(#ffdfa1) 풀블리드 밴드 안에 흰 카드 — 단일 컬럼 중앙정렬(640px). ko/en 분기.
 */
const C = {
  ko: {
    heading: "느린아이란?",
    emLead: "일반 학습도구가 너무 빠르게 진행되어 아이가 따라가지 못한다는 ",
    emStrong: "학부모의 고민에서 시작",
    emRest: "했습니다.",
    b1Lead: "느린아이는 ",
    b1Strong: "발달지연·발달장애·느린학습자·경계선지능 등 느린아이",
    b1Rest: "들이 수학의 기초 개념을 스스로 익힐 수 있도록 만들어진 학습도구 모음입니다.",
    b2Lead: "충분한 생각 시간, 단계적 힌트, 음성 안내를 통해 ",
    b2Strong: "아이가 스스로 해내는 경험을 반복",
    b2Rest: "하고, 그 작은 성공이 독립의 자양분이 되도록 돕습니다.",
    b2Line2: "학부모·특수교사·인지치료사의 수업 보조 도구로도 활용됩니다.",
  },
  en: {
    heading: "What is LittleSteps?",
    emLead: "Standard learning tools move so fast that children can't keep up — ",
    emStrong: "LittleSteps began with that very worry from parents.",
    emRest: "",
    b1Lead: "LittleSteps is a set of learning tools designed for ",
    b1Strong:
      "children with developmental delays, developmental disabilities, learning differences, borderline intelligence, and other kids who learn at their own pace",
    b1Rest: " to pick up the basics of math on their own.",
    b2Lead: "With enough thinking time, layered hints, and voice guidance, ",
    b2Strong: "children get to do it themselves",
    b2Rest: " — and that small success becomes the seed of independence.",
    b2Line2:
      "Used by parents, special education teachers, and cognitive therapists alike.",
  },
  ja: {
    heading: "LittleStepsとは?",
    emLead: "一般的な学習教材は進み方が速すぎて、子どもがついていけないという ",
    emStrong: "保護者の悩みから生まれました。",
    emRest: "",
    b1Lead: "LittleStepsは、",
    b1Strong:
      "発達のゆっくりな子・発達障害・境界知能など、自分のペースで学ぶ子",
    b1Rest: "たちが算数の基礎を自分で身につけられるように作られた学習ツール集です。",
    b2Lead: "十分な考える時間、段階的なヒント、音声ガイドを通して ",
    b2Strong: "子どもが自分でやり遂げる経験をくり返し",
    b2Rest: "、その小さな成功が自立の栄養になるよう手助けします。",
    b2Line2: "保護者・特別支援の先生・認知療育の先生の授業補助ツールとしても使えます。",
  },
} as const;

export default function SectionIntro({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="flex w-full scroll-mt-[64px] flex-col items-center bg-[#ffdfa1] px-4 py-14"
    >
      <div className="flex w-full max-w-[640px] flex-col items-center gap-4 rounded-[16px] bg-white px-4 py-8">
        <h2
          id="intro-heading"
          className="w-full text-[20px] font-bold leading-[28px] tracking-[-0.6px] text-[#4a4035]"
        >
          {t.heading}
        </h2>

        <div className="flex w-full items-center justify-center rounded-[8px] border border-[#f0a050] px-4 py-2">
          <p className="flex-1 text-[14px] font-medium leading-[20px] tracking-[-0.2px] text-[#f0a050]">
            {t.emLead}
            <strong className="font-bold">{t.emStrong}</strong>
            {t.emRest}
          </p>
        </div>

        <div className="flex w-full flex-col gap-[20px] text-[14px] font-light leading-[20px] tracking-[-0.2px] text-[#4a4035]">
          <p>
            {t.b1Lead}
            <strong className="font-bold">{t.b1Strong}</strong>
            {t.b1Rest}
          </p>
          <p>
            {t.b2Lead}
            <strong className="font-bold">{t.b2Strong}</strong>
            {t.b2Rest}
            <br />
            {t.b2Line2}
          </p>
        </div>
      </div>
    </section>
  );
}
