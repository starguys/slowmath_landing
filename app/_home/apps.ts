// 앱 카탈로그 공유 데이터 — SectionApps / SectionStart 공용 (ko/en 이름, 아이콘, 링크)
export type Locale = "ko" | "en";

/** slug(slowmath_ 접두어 제거) → /figma/apps/<key>.svg (Figma 전용 일러스트 아이콘) */
export function iconSrc(slug: string) {
  return `/figma/apps/${slug.replace(/^slowmath_/, "")}.svg`;
}

/** 앱 상세 링크. en 로케일은 ?lang=en 을 붙여 영어로 진입. */
export function appHref(slug: string, locale: Locale) {
  return locale === "en" ? `/${slug}/?lang=en` : `/${slug}/`;
}

/** 37개 학습도구의 한/영 이름 (Figma 124:5255 시안 라벨 기준) */
export const APP_NAMES: Record<string, { ko: string; en: string }> = {
  // 기초 인지
  slowmath_color: { ko: "색깔 익히기", en: "Color recognition" },
  slowmath_shape: { ko: "도형 익히기", en: "Shapes" },
  slowmath_linedraw: { ko: "선 긋기", en: "Line drawing" },
  slowmath_dot2dot: { ko: "점선 따라 그리기", en: "Dot to dot" },
  slowmath_colorcopy: { ko: "똑같이 맞추기", en: "Pattern copy" },
  slowmath_pattern: { ko: "패턴 연습", en: "Pattern practice" },
  slowmath_sameshape: { ko: "같은 모양 찾기", en: "Same shape finder" },
  // 수 개념
  slowmath_number: { ko: "숫자 익히기", en: "Numbers" },
  slowmath_numberdraw: { ko: "숫자 쓰기", en: "Writing numbers" },
  slowmath_koreannum: { ko: "한글 숫자", en: "Korean numbers" },
  slowmath_dice: { ko: "세기", en: "Counting" },
  slowmath_counting: { ko: "우리말 세기", en: "Korean counting" },
  slowmath_matching: { ko: "숫자 매칭", en: "Number matching" },
  slowmath_money: { ko: "동전과 지폐", en: "Coins & bills" },
  slowmath_fraction: { ko: "분수 익히기", en: "Fractions" },
  // 수 관계
  slowmath_comparing: { ko: "비교하기 기초 1", en: "Compare basics 1" },
  slowmath_comparing2: { ko: "비교하기 기초 2", en: "Compare basics 2" },
  slowmath_compare: { ko: "수의 크기", en: "Number size" },
  slowmath_clock: { ko: "시계 보기", en: "Reading the clock" },
  slowmath_calendar: { ko: "달력 보기 연습", en: "Reading the calendar" },
  slowmath_oddeven: { ko: "홀수 짝수 익히기", en: "Odd & Even" },
  slowmath_gap: { ko: "수의 간격", en: "Number gap" },
  slowmath_gap2: { ko: "수의 간격 연습", en: "Number gap practice" },
  slowmath_fractioncompare: { ko: "분수의 크기", en: "Compare fractions" },
  // 덧셈 전 개념
  slowmath_combining: { ko: "모으기 연습", en: "Combining numbers" },
  slowmath_splitting: { ko: "가르기 연습", en: "Splitting numbers" },
  slowmath_complement: { ko: "보수 연습", en: "Pairs to 10" },
  // 덧셈
  slowmath_plusone: { ko: "더하기 1", en: "Plus one (+1)" },
  slowmath_plustwo: { ko: "더하기 2", en: "Plus two (+2)" },
  slowmath_plusthree: { ko: "더하기 3", en: "Plus three (+3)" },
  slowmath_easy: { ko: "한 자리 덧셈", en: "1-digit addition" },
  slowmath_circle: { ko: "한 자리 덧셈 연습", en: "1-digit addition practice" },
  slowmath_carry: { ko: "받아올림 연습", en: "Carrying practice" },
  slowmath_verticaladd: { ko: "세로 덧셈", en: "Vertical addition" },
  slowmath_moneycalc: { ko: "돈 계산하기", en: "Pay the price" },
  // 뺄셈
  slowmath_minusone: { ko: "빼기 1", en: "Minus one (−1)" },
  slowmath_minustwo: { ko: "빼기 2", en: "Minus two (−2)" },
  slowmath_minusthree: { ko: "빼기 3", en: "Minus three (−3)" },
  slowmath_easysub: { ko: "한 자리 뺄셈", en: "1-digit subtraction" },
  slowmath_subtract: { ko: "한 자리 뺄셈 연습", en: "1-digit subtraction practice" },
  slowmath_borrow: { ko: "받아내림 연습", en: "Borrowing practice" },
  slowmath_verticalsub: { ko: "세로 뺄셈", en: "Vertical subtraction" },
  slowmath_changecalc: { ko: "거스름돈 계산하기", en: "Counting change" },
  // 곱셈
  slowmath_timestables: { ko: "구구단 연습", en: "Times tables" },
  slowmath_easymul: { ko: "한 자리 곱셈", en: "1-digit multiplication" },
};

/** 전체 도구 그리드 노출 순서 (Figma 시안 37개 순서) */
export const APP_ORDER: string[] = Object.keys(APP_NAMES);

/** 한국어 학습 전용 앱 — 영어 랜딩 카탈로그에서 제외 */
export const APPS_HIDDEN_IN_EN: ReadonlySet<string> = new Set([
  "slowmath_koreannum",
]);

export function appName(slug: string, locale: Locale) {
  return APP_NAMES[slug]?.[locale] ?? slug;
}

/** 카테고리 키 — slowmath_all/shell/apps.js 와 동일한 8분류 중 데모 제외한 7개 */
export type Category =
  | "foundations"
  | "number-sense"
  | "number-relations"
  | "pre-addition"
  | "addition"
  | "subtraction"
  | "multiplication";

/** 카테고리 노출 순서 + 다국어 이름/부제 (부제 문구는 shell/apps.js 와 동일) */
export const CATEGORIES: {
  key: Category;
  name: { ko: string; en: string };
  desc: { ko: string; en: string };
}[] = [
  {
    key: "foundations",
    name: { ko: "기초 인지", en: "Foundations" },
    desc: { ko: "눈과 손이 먼저 익숙해지는 시간", en: "Eyes and hands first" },
  },
  {
    key: "number-sense",
    name: { ko: "수 개념", en: "Number sense" },
    desc: { ko: "숫자가 ‘양’으로 보이기 시작할 때", en: "When numbers become amounts" },
  },
  {
    key: "number-relations",
    name: { ko: "수 관계", en: "Number relations" },
    desc: { ko: "크고 작고, 같고 다름을 읽는 연습", en: "Bigger, smaller, same, different" },
  },
  {
    key: "pre-addition",
    name: { ko: "덧셈 전 개념", en: "Pre-addition" },
    desc: { ko: "모으고 가르며 수를 만져보는 경험", en: "Combining and splitting numbers" },
  },
  {
    key: "addition",
    name: { ko: "덧셈", en: "Addition" },
    desc: { ko: "작은 걸음부터 쌓아올리는 계산", en: "Building from small steps" },
  },
  {
    key: "subtraction",
    name: { ko: "뺄셈", en: "Subtraction" },
    desc: { ko: "한 걸음씩 덜어내는 계산", en: "Taking away, one step at a time" },
  },
  {
    key: "multiplication",
    name: { ko: "곱셈", en: "Multiplication" },
    desc: { ko: "개념을 이해하는 수의 규칙", en: "Patterns in numbers" },
  },
];

/** slug → 카테고리 매핑 (shell/apps.js 와 동일 분류. oddeven 은 apps.js 상 수 관계) */
export const APP_CATEGORY: Record<string, Category> = {
  slowmath_color: "foundations",
  slowmath_shape: "foundations",
  slowmath_linedraw: "foundations",
  slowmath_dot2dot: "foundations",
  slowmath_colorcopy: "foundations",
  slowmath_pattern: "foundations",
  slowmath_sameshape: "foundations",

  slowmath_number: "number-sense",
  slowmath_numberdraw: "number-sense",
  slowmath_koreannum: "number-sense",
  slowmath_dice: "number-sense",
  slowmath_counting: "number-sense",
  slowmath_matching: "number-sense",
  slowmath_money: "number-sense",
  slowmath_fraction: "number-sense",

  slowmath_comparing: "number-relations",
  slowmath_comparing2: "number-relations",
  slowmath_compare: "number-relations",
  slowmath_clock: "number-relations",
  slowmath_calendar: "number-relations",
  slowmath_oddeven: "number-relations",
  slowmath_gap: "number-relations",
  slowmath_gap2: "number-relations",
  slowmath_fractioncompare: "number-relations",

  slowmath_combining: "pre-addition",
  slowmath_splitting: "pre-addition",
  slowmath_complement: "pre-addition",

  slowmath_plusone: "addition",
  slowmath_plustwo: "addition",
  slowmath_plusthree: "addition",
  slowmath_easy: "addition",
  slowmath_circle: "addition",
  slowmath_carry: "addition",
  slowmath_verticaladd: "addition",
  slowmath_moneycalc: "addition",

  slowmath_minusone: "subtraction",
  slowmath_minustwo: "subtraction",
  slowmath_minusthree: "subtraction",
  slowmath_easysub: "subtraction",
  slowmath_subtract: "subtraction",
  slowmath_borrow: "subtraction",
  slowmath_verticalsub: "subtraction",
  slowmath_changecalc: "subtraction",

  slowmath_timestables: "multiplication",
  slowmath_easymul: "multiplication",
};

/** 카테고리별로 그룹화된 APP_ORDER (원본 노출 순서 보존, 카테고리 내부에서도 원본 순서 유지)
 *  locale='en' 이면 APPS_HIDDEN_IN_EN 에 포함된 한국어 전용 앱은 제외한다. */
export function appsByCategory(locale: Locale = "ko"): { category: Category; slugs: string[] }[] {
  return CATEGORIES.map(({ key }) => ({
    category: key,
    slugs: APP_ORDER.filter((slug) => {
      if (APP_CATEGORY[slug] !== key) return false;
      if (locale === "en" && APPS_HIDDEN_IN_EN.has(slug)) return false;
      return true;
    }),
  }));
}
