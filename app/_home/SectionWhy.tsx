import { type Locale } from "./apps";

// 아이콘은 로케일 공통(Figma /figma/why/*.svg), 텍스트만 ko/en 분기
const ICONS = [
  "/figma/why/step.svg",
  "/figma/why/repeat.svg",
  "/figma/why/think.svg",
  "/figma/why/voice.svg",
  "/figma/why/sensory.svg",
  "/figma/why/focus.svg",
];

const C = {
  ko: {
    heading: "느린아이 학습도구가 다른 이유",
    items: [
      {
        title: "단계별 난이도",
        desc: "아이의 현재 수준에서 시작해 작은 성공을 쌓으며 올라가요",
      },
      {
        title: "반복 학습 설계",
        desc: "같은 개념을 여러 방식으로 반복해 더 오래, 더 깊이 기억해요",
      },
      {
        title: "충분한 생각 시간",
        desc: "답 고르기 전, 생각 시간을 조절할 수 있어 충동적 선택을 줄여줘요",
      },
      {
        title: "음성 안내 지원",
        desc: "글을 읽지 못하는 아이도 소리만으로 혼자 학습할 수 있어요",
      },
      {
        title: "감각 배려 설계",
        desc: "번쩍임·갑작스러운 소리 없이, 조용한 화면으로 만들었어요",
      },
      {
        title: "한 화면, 한 활동",
        desc: "한 번에 하나의 활동만 담아 산만함 없이 집중할 수 있어요",
      },
    ],
  },
  en: {
    heading: "Why LittleSteps learning tools are different",
    items: [
      {
        title: "Staged difficulty",
        desc: "Starts where the child is right now and builds up through small wins",
      },
      {
        title: "Repetition by design",
        desc: "The same concept practiced from many angles, settling longer and deeper",
      },
      {
        title: "Enough thinking time",
        desc: "An adjustable wait before answering reduces impulsive picks",
      },
      {
        title: "Voice guidance",
        desc: "Prompts read aloud, so non-readers can work on their own",
      },
      {
        title: "Quiet by design",
        desc: "No flashing screens, no jarring sound effects — a calm screen",
      },
      {
        title: "One screen, one task",
        desc: "Just one activity at a time so attention can settle without competition",
      },
    ],
  },
  ja: {
    heading: "LittleStepsの学習ツールがちがう理由",
    items: [
      {
        title: "段階的な難易度",
        desc: "子どもの今の水準から始めて、小さな成功を積み重ねながら上がっていきます",
      },
      {
        title: "反復学習の設計",
        desc: "同じ概念を色々な方法でくり返すので、より長く・より深く記憶に残ります",
      },
      {
        title: "十分な考える時間",
        desc: "答えを選ぶ前の待ち時間を調整でき、衝動的な選択を減らします",
      },
      {
        title: "音声ガイド対応",
        desc: "文字が読めない子も、音だけでひとりで学習できます",
      },
      {
        title: "感覚に配慮した設計",
        desc: "点滅や突然の大きな音がない、静かな画面で作りました",
      },
      {
        title: "1画面、1つの活動",
        desc: "一度に一つの活動だけを載せ、気が散らずに集中できます",
      },
    ],
  },
} as const;

/**
 * "느린아이 학습도구가 다른 이유" (Figma 142:16850).
 * 콘텐츠 640px 중앙정렬 — 아이콘 좌측 카드. 모바일 1열 / 데스크탑(696~) 2열 그리드.
 */
export default function SectionWhy({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="w-full scroll-mt-[64px] bg-[#ffefd0] py-[64px]"
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-[40px] px-4">
        <h2
          id="why-title"
          className="w-full text-center font-bold leading-[42px] tracking-[-0.6px] text-[#4a4035] text-[30px]"
        >
          {t.heading}
        </h2>

        <ul className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-2">
          {t.items.map((item, i) => (
            <li
              key={item.title}
              className="flex items-center gap-[16px] rounded-[12px] bg-white px-[24px] py-[16px]"
            >
              <img
                src={ICONS[i]}
                alt=""
                width={40}
                height={40}
                className="block size-[40px] shrink-0"
              />
              <div className="flex min-w-0 flex-1 flex-col gap-[4px] text-[#4a4035]">
                <p className="w-full font-bold leading-[22px] tracking-[-0.6px] text-[18px]">
                  {item.title}
                </p>
                <p className="w-full font-medium leading-[20px] tracking-[-0.2px] text-[14px]">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
