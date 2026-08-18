import LazyVideo from "../LazyVideo";
import { type Locale } from "./apps";

const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function IconQuiet() {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-9"
      aria-hidden="true"
    >
      <path
        d="M6 10a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H16l-6 5v-5H9a3 3 0 0 1-3-3V10Z"
        stroke="#f0a050"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="15.5" r="1.6" fill="#f0a050" />
      <circle cx="18" cy="15.5" r="1.6" fill="#f0a050" />
      <circle cx="23" cy="15.5" r="1.6" fill="#f0a050" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-9"
      aria-hidden="true"
    >
      <path
        d="M18.5 4c1 4.4-1.8 6.6-3.9 9.5-1.7 2.4-2.6 4.6-2.6 6.9a8 8 0 0 0 16 0c0-3.1-1.3-5.9-3.1-8-.4 1.6-1.4 2.4-2.5 2.7C20.6 18.4 22 14.2 18.5 4Z"
        fill="#f0a050"
      />
    </svg>
  );
}

function IconTouch() {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-9"
      aria-hidden="true"
    >
      <rect x="5" y="5" width="26" height="26" rx="7" fill="#f0a050" />
      <path
        d="m12 18.5 4 4 8-9"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = [<IconQuiet key="q" />, <IconRepeat key="r" />, <IconTouch key="t" />];

// 포인트 카드 한 줄 = 세그먼트 배열({ a: true } 는 주황 볼드 강조). 줄바꿈은 Figma(142:16825) 시안대로 <p> 단위 고정.
type Seg = { t: string; a?: boolean };
type DemoCopy = {
  h1: string;
  h2: string;
  subA: string;
  subB: string;
  subStrong: string;
  subC: string;
  videoLabel: string;
  points: Seg[][][];
};

/**
 * 데모 (Figma 142:16820). 단일 컬럼 중앙정렬(640px) — 영상 위 + 포인트 아래 스택.
 * 아이콘은 로케일 공통, 텍스트만 ko/en 분기. 포인트 문구는 줄 단위 세그먼트로 보관해
 * Figma 의 줄바꿈(각 카드 2줄)을 그대로 재현한다.
 */
const C: Record<Locale, DemoCopy> = {
  ko: {
    h1: "말보다 먼저,",
    h2: "직접 보여드릴게요!",
    subA: "천천히 한 걸음. 화려한 반응 대신,",
    subB: "아이가 ",
    subStrong: "자신의 속도로 나아가는 장면",
    subC: "입니다.",
    videoLabel: "느린아이 앱으로 학습하는 아이의 모습",
    points: [
      [[{ t: "조용한 화면," }], [{ t: "충분히 " }, { t: "생각할 시간", a: true }]],
      [[{ t: "틀려도 다시, 작게 반복하며" }], [{ t: "쌓이는 자신감", a: true }]],
      [[{ t: "아이가 스스로", a: true }, { t: " 터치하고" }], [{ t: "확인하는 순간들" }]],
    ],
  },
  en: {
    h1: "Before words,",
    h2: "let us show you!",
    subA: "One right step at a time.",
    subB: "Instead of flashy reactions, ",
    subStrong: "scenes where a child moves forward at their own pace",
    subC: ".",
    videoLabel: "A child learning with the LittleSteps app",
    points: [
      [[{ t: "A quiet screen, plenty of " }, { t: "time to think", a: true }]],
      [[{ t: "Try again — " }, { t: "confidence built from small repetitions", a: true }]],
      [[{ t: "Moments the child " }, { t: "taps and confirms on their own", a: true }]],
    ],
  },
  ja: {
    h1: "言葉より先に、",
    h2: "見ていただきますね!",
    subA: "ゆっくり一歩ずつ。派手な演出のかわりに、",
    subB: "子どもが ",
    subStrong: "自分のペースで進んでいく場面",
    subC: "です。",
    videoLabel: "LittleStepsアプリで学ぶ子どもの様子",
    points: [
      [[{ t: "静かな画面と、" }, { t: "十分な考える時間", a: true }]],
      [[{ t: "まちがえても、小さな繰り返しから" }], [{ t: "積み上がる自信", a: true }]],
      [[{ t: "子どもが自分で", a: true }, { t: " タッチして" }], [{ t: "確かめる瞬間" }]],
    ],
  },
};

export default function SectionDemo({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="lazy-section w-full scroll-mt-[64px] bg-white"
    >
      <div className="mx-auto w-full max-w-[640px] px-4 py-[64px]">
        {/* 제목 */}
        <div className="flex flex-col items-center gap-3 text-center text-[#4a4035]">
          <h2
            id="demo-heading"
            className="text-[30px] font-bold leading-[42px] tracking-[-0.6px]"
          >
            {t.h1}
            <br />
            <span className="text-[#f0a050]">{t.h2}</span>
          </h2>
          <p className="text-[16px] font-medium leading-[24px] tracking-[-0.2px]">
            {t.subA}
            <br />
            {t.subB}
            <span className="font-bold">{t.subStrong}</span>
            {t.subC}
          </p>
        </div>

        {/* 영상 + 포인트 (세로 스택) */}
        <div className="mt-10 flex flex-col items-center gap-10">
          {/* 영상 프레임 */}
          <div className="w-full max-w-[320px] shrink-0 overflow-hidden rounded-[16px] shadow-[0_18px_45px_-14px_rgba(43,63,108,0.30)]">
            <LazyVideo
              src={`${ASSET_BASE}/video/landing-4.mp4`}
              poster="/figma/demo/poster.jpg"
              ariaLabel={t.videoLabel}
              className="block aspect-[320/462] w-full object-cover"
            />
          </div>

          {/* 3가지 포인트 */}
          <ul className="flex w-full flex-col items-center gap-3">
            {t.points.map((lines, i) => (
              <li
                key={i}
                className="flex w-full max-w-[320px] items-center gap-4 rounded-[12px] border border-[#f0a050] px-6 py-4"
              >
                <span className="shrink-0">{ICONS[i]}</span>
                <div className="min-w-0 flex-1 text-[16px] font-medium leading-[24px] tracking-[-0.2px] text-[#4a4035] [word-break:break-word]">
                  {lines.map((line, j) => (
                    <p key={j}>
                      {line.map((seg, k) => (
                        <span
                          key={k}
                          className={seg.a ? "font-bold text-[#f0a050]" : undefined}
                        >
                          {seg.t}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
