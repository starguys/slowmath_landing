import { type Locale } from "./apps";

// 아이콘은 로케일 공통(Figma /figma/why/*.svg), 텍스트만 로케일별 분기.
// 항목이 로케일마다 다를 때는 그 항목에 icon 을 직접 달아 이 순서를 덮어쓴다.
const ICONS = [
  "/figma/why/step.svg",
  "/figma/why/repeat.svg",
  "/figma/why/think.svg",
  "/figma/why/voice.svg",
  "/figma/why/sensory.svg",
  "/figma/why/focus.svg",
];

type Item = { title: string; desc: string; icon?: string };
type Copy = { heading: string; items: Item[] };

const C: Record<Locale, Copy> = {
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
      {
        title: "워크북 다운로드",
        desc: "워크북을 내려받아 인쇄하면 종이에 연필로도 연습할 수 있어요",
        icon: "/figma/why/workbook.svg",
      },
      {
        title: "학습 세트 구성",
        desc: "필요한 연습만 골라 우리 아이만의 매일 연습 코스를 만들 수 있어요",
        icon: "/figma/why/set.svg",
      },
    ],
  },
  zh: {
    heading: "LittleSteps 學習工具不一樣的地方",
    items: [
      {
        title: "分階段的難度",
        desc: "從孩子現在的程度開始，累積小小的成功往上走",
      },
      {
        title: "為反覆學習設計",
        desc: "用多種方式重複同一個概念，記得更久、更深",
      },
      {
        title: "充分的思考時間",
        desc: "選答案前可以調整思考時間，減少衝動作答",
      },
      {
        title: "支援語音引導",
        desc: "還不會讀字的孩子，只靠聲音也能自己學習",
      },
      {
        title: "顧及感官的設計",
        desc: "沒有閃爍、沒有突如其來的聲音，做成安靜的畫面",
      },
      {
        title: "一個畫面，一個活動",
        desc: "一次只放一個活動，不分心、能專注",
      },
      {
        title: "學習單下載",
        desc: "下載學習單列印出來，也能用紙筆做同樣的練習",
        icon: "/figma/why/workbook.svg",
      },
      {
        title: "每日練習組合",
        desc: "只挑需要的練習，組成專屬孩子的每日課程",
        icon: "/figma/why/set.svg",
      },
    ],
  },
  zhcn: {
    heading: "LittleSteps 学习工具不一样的地方",
    items: [
      {
        title: "分阶段的难度",
        desc: "从孩子现在的程度开始，累积小小的成功往上走",
      },
      {
        title: "为反复学习设计",
        desc: "用多种方式重复同一个概念，记得更久、更深",
      },
      {
        title: "充分的思考时间",
        desc: "选答案前可以调整思考时间，减少冲动作答",
      },
      {
        title: "支持语音引导",
        desc: "还不会读字的孩子，只靠声音也能自己学习",
      },
      {
        title: "顾及感官的设计",
        desc: "没有闪烁、没有突如其来的声音，做成安静的画面",
      },
      {
        title: "一个画面，一个活动",
        desc: "一次只放一个活动，不分心、能专注",
      },
      {
        title: "学习单下载",
        desc: "下载学习单打印出来，也能用纸笔做同样的练习",
        icon: "/figma/why/workbook.svg",
      },
      {
        title: "每日练习组合",
        desc: "只挑需要的练习，组成专属孩子的每日课程",
        icon: "/figma/why/set.svg",
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
      {
        title: "Printable workbooks",
        desc: "Download and print a workbook to practice the same thing on paper",
        icon: "/figma/why/workbook.svg",
      },
      {
        title: "Your own daily set",
        desc: "Pick only the practices you need and build a daily course",
        icon: "/figma/why/set.svg",
      },
    ],
  },
  ja: {
    heading: "LittleStepsの学習ツールがちがう理由",
    items: [
      {
        title: "段階的な難易度",
        desc: "今のレベルから、小さな成功を積み上げていきます",
      },
      {
        title: "反復学習の設計",
        desc: "同じ概念を色々な方法でくり返し、深く覚えます",
      },
      {
        title: "十分な考える時間",
        desc: "答える前の考える時間を調整でき、衝動的な選択を減らします",
      },
      {
        title: "音声ガイド対応",
        desc: "文字が読めない子も、音だけでひとりで学習できます",
      },
      {
        title: "感覚に配慮した設計",
        desc: "点滅や突然の大きな音がない、静かな画面にしました",
      },
      {
        title: "1画面、1つの活動",
        desc: "一度に一つの活動だけ、気が散らず集中できます",
      },
      {
        title: "ワークブックの印刷",
        desc: "ダウンロードして印刷すれば、紙と鉛筆でも練習できます",
        icon: "/figma/why/workbook.svg",
      },
      {
        title: "毎日の練習セット",
        desc: "必要な練習だけを選んで、その子だけの毎日コースを作れます",
        icon: "/figma/why/set.svg",
      },
    ],
  },
};

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
                src={item.icon ?? ICONS[i]}
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
