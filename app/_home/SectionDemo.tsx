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

/**
 * 데모 (Figma 124:5085, PC=MO 동일). 단일 컬럼 중앙정렬(640px) — 영상 위 + 포인트 아래 스택.
 * 아이콘은 로케일 공통, 텍스트만 ko/en 분기.
 */
const C = {
  ko: {
    h1: "말보다 먼저,",
    h2: "직접 보여드릴게요!",
    subA: "천천히 한 걸음. 화려한 반응 대신,",
    subB: "아이가 ",
    subStrong: "자신의 속도에 머무는 장면",
    subC: "입니다.",
    videoLabel: "느린아이 앱으로 학습하는 아이의 모습",
    points: [
      { pre: "조용한 화면, 충분히 ", strong: "생각할 시간", post: "" },
      { pre: "틀려도 다시, 작게 반복하며 ", strong: "쌓이는 자신감", post: "" },
      { pre: "", strong: "아이가 스스로", post: " 터치하고 확인하는 순간들" },
    ],
  },
  en: {
    h1: "Before words,",
    h2: "let us show you!",
    subA: "One slow step at a time.",
    subB: "Instead of flashy reactions, ",
    subStrong: "scenes where a child stays at their own pace",
    subC: ".",
    videoLabel: "A child learning with the SlowKids app",
    points: [
      { pre: "A quiet screen, plenty of ", strong: "time to think", post: "" },
      { pre: "Try again — ", strong: "confidence built from small repetitions", post: "" },
      { pre: "Moments the child ", strong: "taps and confirms on their own", post: "" },
    ],
  },
} as const;

export default function SectionDemo({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="demo"
      aria-labelledby="demo-heading"
      className="lazy-section w-full scroll-mt-[64px] bg-white"
    >
      <div className="mx-auto w-full max-w-[640px] px-6 py-[72px]">
        {/* 제목 */}
        <div className="flex flex-col items-center gap-3 text-center text-[#4a4035]">
          <h2
            id="demo-heading"
            className="text-[32px] font-bold leading-[42px] tracking-[-0.6px]"
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
          <div className="w-[320px] shrink-0 overflow-hidden rounded-[16px] shadow-[0_18px_45px_-14px_rgba(43,63,108,0.30)]">
            <LazyVideo
              src={`${ASSET_BASE}/video/landing-4.mp4`}
              poster="/figma/demo/poster.jpg"
              ariaLabel={t.videoLabel}
              className="block aspect-[320/462] w-full object-cover"
            />
          </div>

          {/* 3가지 포인트 */}
          <ul className="flex w-full flex-col gap-3">
            {t.points.map((p, i) => (
              <li
                key={p.strong}
                className="flex items-center gap-4 rounded-[12px] border border-[#f0a050] px-6 py-4"
              >
                <span className="shrink-0">{ICONS[i]}</span>
                <p className="text-[16px] font-medium leading-[24px] tracking-[-0.2px] text-[#4a4035]">
                  {p.pre}
                  <span className="font-bold text-[#f0a050]">{p.strong}</span>
                  {p.post}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
