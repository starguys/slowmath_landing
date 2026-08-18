import { type Locale } from "./apps";

// 공감(Empathy) 섹션 (Figma 124:5065, PC=MO 동일): 단일 컬럼 중앙정렬(640px) — 인용 박스 + 마무리 박스 세로 스택.
const C = {
  ko: {
    titleAccent: "이런 말, ",
    titleRest1: "혼잣말처럼",
    titleRest2: "해보신 적 있으신가요?",
    sub1: "수십 번 들어본 이야기일지도 모릅니다.",
    sub2: "하지만 이 말들은 언제나 새롭게 아픕니다.",
    tag: "시작하기 전에",
    worries: [
      { lead: "학습지를 사도 ", strong: "두 장 넘기면 울어버려요" },
      { lead: "숫자 1부터 10까지, 몇 달째 ", strong: "같은 자리에 머물러 있어요" },
      { lead: "한 번 틀리면 ", strong: "다시는 안 하려고 해요" },
      { lead: "또래 교재는 너무 빠르고, ", strong: "유아 교재는 너무 유치해요" },
    ],
    closingHeading: "그 마음, 저희도 알아요",
    closingLead: "그래서 아이의 속도에 맞춘 작은 연습들을 만들었습니다.",
    closingLead2: "한 화면, 한 걸음, ",
    closingStrong: "아이의 속도에 맞춰 천천히 함께 걸어요",
    cta: "자세히 보기",
  },
  en: {
    titleAccent: "These words, ",
    titleRest1: "have you ever",
    titleRest2: "said them quietly to yourself?",
    sub1: "You may have heard these dozens of times.",
    sub2: "But these words sting fresh every single time.",
    tag: "Before we begin",
    worries: [
      { lead: "We buy a workbook, and ", strong: "two pages in, the tears start." },
      {
        lead: "Numbers 1 to 10 — ",
        strong: "months later, still stuck in the same spot.",
      },
      { lead: "One wrong answer, and ", strong: "they won't try again." },
      {
        lead: "Peer-grade books are too fast, ",
        strong: "younger-grade ones too babyish.",
      },
    ],
    closingHeading: "We hear you.",
    closingLead: "That's why we made small practices paced to your child.",
    closingLead2: "One screen, one step — ",
    closingStrong: "walking together, at your child's pace.",
    cta: "Learn more",
  },
  ja: {
    titleAccent: "こんな言葉、",
    titleRest1: "ひとりごとのように",
    titleRest2: "つぶやいたことはありませんか?",
    sub1: "何十回と聞いてきた話かもしれません。",
    sub2: "それでもこの言葉は、いつも新しく胸に刺さります。",
    tag: "はじめる前に",
    worries: [
      { lead: "ドリルを買っても ", strong: "2ページ進むと泣いてしまいます" },
      { lead: "1から10まで、何ヶ月も ", strong: "同じところで止まっています" },
      { lead: "一度まちがえると ", strong: "もうやろうとしません" },
      { lead: "同学年の教材は速すぎて、", strong: "年少向けは幼すぎるんです" },
    ],
    closingHeading: "その気持ち、私たちにも分かります",
    closingLead: "だから、子どものペースに合わせた小さな練習を作りました。",
    closingLead2: "1画面、1ステップ。",
    closingStrong: "子どものペースに合わせて、ゆっくり一緒に歩きます",
    cta: "詳しく見る",
  },
} as const;

export default function SectionEmpathy({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section id="empathy" className="w-full scroll-mt-[64px] bg-[#ffefd0]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-[40px] px-4 py-[64px]">
        {/* 제목 */}
        <div className="flex w-full flex-col items-center gap-[12px] text-center text-[#4a4035]">
          <h2 className="w-full text-[30px] font-bold leading-[42px] tracking-[-0.6px]">
            <span className="text-[#f0a050]">{t.titleAccent}</span>
            {t.titleRest1}
            <br />
            {t.titleRest2}
          </h2>
          <p className="w-full text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
            {t.sub1}
            <br />
            {t.sub2}
          </p>
        </div>

        {/* 인용(부모의 혼잣말) 박스 */}
        <div className="flex w-full flex-col items-center gap-[16px] rounded-[16px] bg-[#ffdfa1] px-[16px] py-[24px]">
          <span className="flex items-center justify-center whitespace-nowrap rounded-full bg-[#f0a050] px-[12px] py-[4px] text-[12px] font-medium leading-[18px] text-white">
            {t.tag}
          </span>
          <div className="flex w-full flex-col gap-[12px]">
            {t.worries.map((w) => (
              <div
                key={w.strong}
                className="flex w-full flex-col items-start rounded-[64px] bg-white px-[24px] py-[12px]"
              >
                <p className="w-full text-center text-[14px] font-medium leading-[20px] tracking-[-0.2px] text-[#4a4035]">
                  {w.lead}
                  <span className="font-bold">{w.strong}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 마무리(공감) 박스 */}
        <div className="flex w-full flex-col items-end gap-[8px] rounded-[16px] bg-[#f0a050] px-[24px] pb-[12px] pt-[24px]">
          <div className="flex w-full flex-col gap-[8px] text-white">
            <h3 className="text-[18px] font-bold leading-[22px] tracking-[-0.6px]">
              {t.closingHeading}
            </h3>
            <p className="text-[14px] font-medium leading-[20px] tracking-[-0.2px]">
              {t.closingLead}
              <br />
              {t.closingLead2}
              <span className="font-bold">{t.closingStrong}</span>
            </p>
          </div>
          <a
            href="#apps"
            className="flex items-center justify-center gap-[8px] self-end rounded-[12px] p-[8px] text-[14px] font-bold leading-[20px] tracking-[-0.2px] text-white"
          >
            {t.cta}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="shrink-0"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
