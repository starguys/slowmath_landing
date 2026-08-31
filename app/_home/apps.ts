// 앱 카탈로그 공유 데이터 — SectionApps / SectionStart 공용 (ko/en/ja 이름, 아이콘, 링크)
export type Locale = "ko" | "en" | "ja";

/** slug(slowmath_ 접두어 제거) → /figma/apps/<key>.svg (Figma 전용 일러스트 아이콘) */
export function iconSrc(slug: string) {
  return `/figma/apps/${slug.replace(/^slowmath_/, "")}.svg`;
}

/** 앱 상세 링크. en/ja 로케일은 ?lang= 을 붙여 서브앱 언어를 지정. */
export function appHref(slug: string, locale: Locale) {
  if (locale === "en") return `/${slug}/?lang=en`;
  if (locale === "ja") return `/${slug}/?lang=ja`;
  return `/${slug}/`;
}

/** 학습도구의 한/영/일 이름 (Figma 124:5255 시안 라벨 + slowmath_all/shell/apps.js nameJa 기준) */
export const APP_NAMES: Record<string, { ko: string; en: string; ja: string }> = {
  // 기초 인지
  slowmath_color: { ko: "색깔 익히기", en: "Color recognition", ja: "色を覚える" },
  slowmath_shape: { ko: "도형 익히기", en: "Shapes", ja: "形を覚える" },
  slowmath_linedraw: { ko: "선 긋기", en: "Line drawing", ja: "線を引く" },
  slowmath_dot2dot: { ko: "점선 따라 그리기", en: "Dot to dot", ja: "点をつなぐ" },
  slowmath_colorcopy: { ko: "똑같이 맞추기", en: "Pattern copy", ja: "そっくり" },
  slowmath_oppositematch: { ko: "반대로 맞추기", en: "Opposite match", ja: "反対ぬり" },
  slowmath_pattern: { ko: "패턴 연습", en: "Pattern practice", ja: "パターン" },
  slowmath_sameshape: { ko: "같은 모양 찾기", en: "Same shape finder", ja: "同じ形さがし" },
  // 시계·달력·화폐
  slowmath_clock: { ko: "시계 보기", en: "Reading the clock", ja: "時計の読み方" },
  slowmath_calendar: { ko: "달력 보기", en: "Reading the calendar", ja: "カレンダーの練習" },
  slowmath_money: { ko: "동전과 지폐", en: "Coins & bills", ja: "硬貨と紙幣" },
  slowmath_moneycalc: { ko: "돈 계산하기", en: "Pay the price", ja: "金額を払う" },
  slowmath_changecalc: { ko: "거스름돈 계산하기", en: "Counting change", ja: "おつりの計算" },
  // 수 개념
  slowmath_number: { ko: "숫자 익히기", en: "Numbers", ja: "数字を覚える" },
  slowmath_numberdraw: { ko: "숫자 쓰기", en: "Writing numbers", ja: "数字を書く" },
  slowmath_koreannum: { ko: "한글 숫자", en: "Korean numbers", ja: "ハングル数字" },
  slowmath_dice: { ko: "세기", en: "Counting", ja: "かぞえる" },
  slowmath_counting: { ko: "우리말 세기", en: "Korean counting", ja: "韓国語の数え方" },
  slowmath_matching: { ko: "숫자 매칭", en: "Number matching", ja: "数のマッチング" },
  slowmath_fraction: { ko: "분수 익히기", en: "Fractions", ja: "分数を覚える" },
  // 수 관계
  slowmath_comparing: { ko: "비교하기 기초 1", en: "Compare basics 1", ja: "くらべる 1" },
  slowmath_comparing2: { ko: "비교하기 기초 2", en: "Compare basics 2", ja: "くらべる 2" },
  slowmath_compare: { ko: "수의 크기", en: "Number size", ja: "数の大小" },
  slowmath_oddeven: { ko: "홀수 짝수 익히기", en: "Odd & Even", ja: "奇数と偶数" },
  slowmath_gap: { ko: "수의 간격", en: "Number gap", ja: "数の間隔" },
  slowmath_gap2: { ko: "수의 간격 연습", en: "Number gap practice", ja: "数の間隔 練習" },
  slowmath_fractioncompare: { ko: "분수의 크기", en: "Compare fractions", ja: "分数の大小" },
  // 덧셈 전 개념
  slowmath_combining: { ko: "모으기 연습", en: "Combining numbers", ja: "あつめる" },
  slowmath_splitting: { ko: "가르기 연습", en: "Splitting numbers", ja: "わける" },
  slowmath_complement: { ko: "보수 연습", en: "Pairs to 10", ja: "10の組" },
  // 덧셈
  slowmath_plusone: { ko: "더하기 1", en: "Plus one (+1)", ja: "+1" },
  slowmath_plustwo: { ko: "더하기 2", en: "Plus two (+2)", ja: "+2" },
  slowmath_plusthree: { ko: "더하기 3", en: "Plus three (+3)", ja: "+3" },
  slowmath_easy: { ko: "한 자리 덧셈", en: "1-digit addition", ja: "1けた たしざん" },
  slowmath_circle: { ko: "한 자리 덧셈 연습", en: "1-digit addition practice", ja: "たしざん練習" },
  slowmath_carry: { ko: "받아올림 연습", en: "Carrying practice", ja: "くりあがり" },
  slowmath_verticaladd: { ko: "세로 덧셈", en: "Vertical addition", ja: "筆算 たしざん" },
  // 뺄셈
  slowmath_minusone: { ko: "빼기 1", en: "Minus one (−1)", ja: "−1" },
  slowmath_minustwo: { ko: "빼기 2", en: "Minus two (−2)", ja: "−2" },
  slowmath_minusthree: { ko: "빼기 3", en: "Minus three (−3)", ja: "−3" },
  slowmath_easysub: { ko: "한 자리 뺄셈", en: "1-digit subtraction", ja: "1けた ひきざん" },
  slowmath_subtract: { ko: "한 자리 뺄셈 연습", en: "1-digit subtraction practice", ja: "ひきざん練習" },
  slowmath_borrow: { ko: "받아내림 연습", en: "Borrowing practice", ja: "くりさがり" },
  slowmath_verticalsub: { ko: "세로 뺄셈", en: "Vertical subtraction", ja: "筆算 ひきざん" },
  // 곱셈
  slowmath_timestables: { ko: "구구단 연습", en: "Times tables", ja: "九九" },
  slowmath_easymul: { ko: "한 자리 곱셈", en: "1-digit multiplication", ja: "1けた かけざん" },
  slowmath_verticalmul: { ko: "세로 곱셈", en: "Vertical multiplication", ja: "筆算 かけざん" },
};

/** 전체 도구 그리드 노출 순서 (Figma 시안 순서 + verticalmul) */
export const APP_ORDER: string[] = Object.keys(APP_NAMES);

/** 한국어 학습 전용 앱 — 영어 랜딩 카탈로그에서 제외 */
export const APPS_HIDDEN_IN_EN: ReadonlySet<string> = new Set([
  "slowmath_koreannum",
]);

/** 한국어 특화 앱 — 일본어 랜딩 카탈로그에서 제외
 *  (한글 숫자·우리말 세기는 한국어 어휘 학습이라 일본어 화자에게 부적절) */
export const APPS_HIDDEN_IN_JA: ReadonlySet<string> = new Set([
  "slowmath_koreannum",
  "slowmath_counting",
]);

export function appName(slug: string, locale: Locale) {
  return APP_NAMES[slug]?.[locale] ?? slug;
}

/** 카테고리 키 — slowmath_all/shell/apps.js 와 동일한 8분류 중 데모 제외한 7개 */
export type Category =
  | "foundations"
  | "time-calendar-money"
  | "number-sense"
  | "number-relations"
  | "pre-addition"
  | "addition"
  | "subtraction"
  | "multiplication";

/** 카테고리 노출 순서 + 다국어 이름/부제 (부제 문구는 shell/apps.js 와 동일) */
export const CATEGORIES: {
  key: Category;
  name: { ko: string; en: string; ja: string };
  desc: { ko: string; en: string; ja: string };
}[] = [
  {
    key: "foundations",
    name: { ko: "기초 인지", en: "Foundations", ja: "基礎認知" },
    desc: {
      ko: "눈과 손이 먼저 익숙해지는 시간",
      en: "Eyes and hands first",
      ja: "目と手が先に慣れていく時間",
    },
  },
  {
    key: "time-calendar-money",
    name: {
      ko: "시계·달력·화폐",
      en: "Time · Calendar · Money",
      ja: "時計・カレンダー・お金",
    },
    desc: {
      ko: "시간과 돈을 생활 속에서 익히는 시간",
      en: "Time and money in real life",
      ja: "時間とお金を暮らしの中で学ぶ時間",
    },
  },
  {
    key: "number-sense",
    name: { ko: "수 개념", en: "Number sense", ja: "数の概念" },
    desc: {
      ko: "숫자가 ‘양’으로 보이기 시작할 때",
      en: "When numbers become amounts",
      ja: "数字が「量」に見え始めるとき",
    },
  },
  {
    key: "number-relations",
    name: { ko: "수 관계", en: "Number relations", ja: "数の関係" },
    desc: {
      ko: "크고 작고, 같고 다름을 읽는 연습",
      en: "Bigger, smaller, same, different",
      ja: "大きさ・同じ・違いを読みとる練習",
    },
  },
  {
    key: "pre-addition",
    name: { ko: "덧셈 전 개념", en: "Pre-addition", ja: "たしざんの前に" },
    desc: {
      ko: "모으고 가르며 수를 만져보는 경험",
      en: "Combining and splitting numbers",
      ja: "あつめて・わけて、数を手で感じる時間",
    },
  },
  {
    key: "addition",
    name: { ko: "덧셈", en: "Addition", ja: "たしざん" },
    desc: {
      ko: "작은 걸음부터 쌓아올리는 계산",
      en: "Building from small steps",
      ja: "小さな一歩から積み上げる計算",
    },
  },
  {
    key: "subtraction",
    name: { ko: "뺄셈", en: "Subtraction", ja: "ひきざん" },
    desc: {
      ko: "한 걸음씩 덜어내는 계산",
      en: "Taking away, one step at a time",
      ja: "一歩ずつ取り除いていく計算",
    },
  },
  {
    key: "multiplication",
    name: { ko: "곱셈", en: "Multiplication", ja: "かけざん" },
    desc: {
      ko: "개념을 이해하는 수의 규칙",
      en: "Patterns in numbers",
      ja: "概念で理解する数のきまり",
    },
  },
];

/** slug → 카테고리 매핑 (shell/apps.js 와 동일 분류. oddeven 은 apps.js 상 수 관계) */
export const APP_CATEGORY: Record<string, Category> = {
  slowmath_color: "foundations",
  slowmath_shape: "foundations",
  slowmath_linedraw: "foundations",
  slowmath_dot2dot: "foundations",
  slowmath_colorcopy: "foundations",
  slowmath_oppositematch: "foundations",
  slowmath_pattern: "foundations",
  slowmath_sameshape: "foundations",

  slowmath_clock: "time-calendar-money",
  slowmath_calendar: "time-calendar-money",
  slowmath_money: "time-calendar-money",
  slowmath_moneycalc: "time-calendar-money",
  slowmath_changecalc: "time-calendar-money",

  slowmath_number: "number-sense",
  slowmath_numberdraw: "number-sense",
  slowmath_koreannum: "number-sense",
  slowmath_dice: "number-sense",
  slowmath_counting: "number-sense",
  slowmath_matching: "number-sense",
  slowmath_fraction: "number-sense",

  slowmath_comparing: "number-relations",
  slowmath_comparing2: "number-relations",
  slowmath_compare: "number-relations",
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

  slowmath_minusone: "subtraction",
  slowmath_minustwo: "subtraction",
  slowmath_minusthree: "subtraction",
  slowmath_easysub: "subtraction",
  slowmath_subtract: "subtraction",
  slowmath_borrow: "subtraction",
  slowmath_verticalsub: "subtraction",

  slowmath_timestables: "multiplication",
  slowmath_easymul: "multiplication",
  slowmath_verticalmul: "multiplication",
};

/** 카테고리별로 그룹화된 APP_ORDER (원본 노출 순서 보존, 카테고리 내부에서도 원본 순서 유지)
 *  locale='en' 이면 APPS_HIDDEN_IN_EN, locale='ja' 이면 APPS_HIDDEN_IN_JA 에 포함된
 *  한국어 특화 앱은 제외한다. */
export function appsByCategory(locale: Locale = "ko"): { category: Category; slugs: string[] }[] {
  return CATEGORIES.map(({ key }) => ({
    category: key,
    slugs: APP_ORDER.filter((slug) => {
      if (APP_CATEGORY[slug] !== key) return false;
      if (locale === "en" && APPS_HIDDEN_IN_EN.has(slug)) return false;
      if (locale === "ja" && APPS_HIDDEN_IN_JA.has(slug)) return false;
      return true;
    }),
  }));
}
