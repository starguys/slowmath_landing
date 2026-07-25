import { type Locale } from "./apps";

/**
 * "특수교육 전문가가 느린아이를 추천하는 이유" 추천사 밴드 (Figma 124:5168, PC=MO 동일).
 * 오렌지(#ffdfa1) 밴드 안 흰 카드 — 제목 + 추천사 본문 + 구분선 + 전문가 프로필. ko/en 분기.
 */
const C = {
  ko: {
    headAccent1: "특수교육 ",
    headAccent2: "전문가",
    headMid: "가",
    headLine2: "느린아이를 추천하는 이유",
    quote: [
      "다른 아이들보다 더 많은 연습과 반복이 필요한 아이들을 가르쳐 본 경험이 있는 학부모님과 선생님들은 공감하실 겁니다. 우리 아이들에게 맞는 학습 교재와 자료를 찾기 어렵다는 것을요.",
      "잠깐의 흥미를 끌 수 있는 학습 교재는 많지만, 차근차근 익히면서 내실을 다질 수 있도록 도와주는 학습 자료들이 부족한 게 항상 아쉬웠습니다.",
      "그런데 느린아이는 이런 아쉬움과 답답함을 해소시켜 주기에 충분한 수학 학습 앱이라고 생각합니다.",
      "느린아이를 키우시는 부모님께서 직접 아이를 가르치시면서 만든 앱이라, 우리 아이들의 눈높이에 맞게 꼭 필요한 내용들이 꼼꼼하게 구성되어 있습니다.",
      "저 또한 실제 임상 현장에서 아이들이 더 재미있게 공부하고 좋아하는 모습을 보면서, 많은 분들께 이 앱을 꼭 추천드리고 싶습니다.",
      "또한 느린아이뿐만 아니라 이제 막 기초 인지를 배우기 시작한 아이, 취학 전 기초 다지기가 필요한 아이들에게도 아주 유용한 학습 길잡이가 되어 줄 것이라 생각합니다.",
    ],
    name: "장우영",
    credentials: [
      "맘앤맘 아동발달센터 원장",
      "인지·행동치료사",
      "부산대 특수교육학 박사",
      "부산디지털대 외래강사",
    ],
  },
  en: {
    headAccent1: "Special education ",
    headAccent2: "experts",
    headMid: " recommend LittleSteps",
    headLine2: "— here's why",
    quote: [
      "Any parent or teacher who has worked with children who need more practice and repetition than their peers will understand: it's genuinely hard to find learning materials and resources that fit our kids.",
      "There's no shortage of materials that grab a child's attention for a moment, but I always felt the lack of resources that help them build real, lasting mastery step by step.",
      "LittleSteps, I believe, is a math learning app more than capable of relieving that frustration.",
      "Because it was built by a parent of a child who learns at their own pace while actually teaching their own child, it's carefully put together around exactly what our kids need, at their level.",
      "In my own clinical practice I've watched children study with more joy and genuinely enjoy it — which is why I wholeheartedly recommend this app to so many families.",
      "And not only for kids who learn at their own pace — I think it makes an excellent learning guide for children just beginning basic cognition, and for any child who needs to firm up the fundamentals before starting school.",
    ],
    name: "Jang Woo-young",
    credentials: [
      "Director, Mom & Mom Child Development Center",
      "Cognitive-behavioral therapist",
      "Ph.D. in Special Education, Pusan National University",
      "Adjunct lecturer, Busan Digital University",
    ],
  },
} as const;

export default function SectionExpert({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="expert"
      aria-labelledby="expert-heading"
      className="lazy-section flex w-full scroll-mt-[64px] flex-col items-center bg-[#ffdfa1] px-4 py-14"
    >
      <figure className="m-0 flex w-full max-w-[640px] flex-col items-center gap-6 rounded-[16px] bg-white px-6 py-8">
        <h2
          id="expert-heading"
          className="w-full text-[24px] font-bold leading-[34px] tracking-[-0.6px] text-[#4a4035]"
        >
          <span className="text-[#f0a050]">{t.headAccent1}</span>
          <span className="text-[#6bade8]">{t.headAccent2}</span>
          {t.headMid}
          <br />
          {t.headLine2}
        </h2>

        <blockquote className="m-0 flex w-full flex-col gap-5 text-[14px] font-light leading-[20px] tracking-[-0.2px] text-[#4a4035]">
          {t.quote.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </blockquote>

        <hr className="m-0 w-full border-0 border-t border-[#e9e2d6]" />

        <figcaption className="flex w-full items-center justify-center gap-2 text-[#4a4035]">
          <p className="flex-1 text-[16px] font-bold leading-[24px] tracking-[-0.2px]">
            {t.name}
          </p>
          <div className="flex-1 text-[12px] font-light leading-[18px]">
            {t.credentials.map((c, i) => (
              <p key={i}>· {c}</p>
            ))}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
