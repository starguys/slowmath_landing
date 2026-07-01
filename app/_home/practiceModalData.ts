import { type Locale } from "./apps";

export type ModalText = {
  category: string;
  subtitle: string;
  name: string;
  short: string;
  long: string;
};

/**
 * practice 모달(팝업) 콘텐츠 — Figma 123:5481 팝업 카드 기준.
 * ko: Figma 시안 텍스트, en: 기존 /en 카피 기반 번역. slug(slowmath_ 포함) 키.
 */
export const MODAL_CONTENT: Record<string, Record<Locale, ModalText>> = {
  slowmath_color: {
    ko: {
      category: "기초 인지",
      subtitle: "눈과 손이 먼저 익숙해지는 시간",
      name: "색깔 익히기",
      short: "색깔이름을 보고 듣고 고르며 색 인지 능력을 키워요",
      long: "발달 지연·발달 장애 아이에게 색깔 이름은 어려울 수 있어요. 단순 인식부터 순서 기억까지 단계적으로 도전해 색 어휘를 탄탄하게 쌓아줍니다.",
    },
    en: {
      category: "Foundations",
      subtitle: "Where eyes and hands get familiar first",
      name: "Color",
      short: "See, hear, and pick color names — building color awareness step by step",
      long: "Color names can be hard for children with developmental delays or disabilities. By moving step by step from simple recognition to sequence memory, this builds a solid color vocabulary.",
    },
  },
  slowmath_linedraw: {
    ko: {
      category: "기초 인지",
      subtitle: "눈과 손이 먼저 익숙해지는 시간",
      name: "선 긋기",
      short: "직선·곡선·나선을 따라 그리며 손의 안정성을 키워요",
      long: "글씨 쓰기와 그림 그리기의 기초가 되는 손 조절 능력을 재미있게 훈련해요. 3단계 난이도와 음성 안내로 아이가 포기하지 않고 꾸준히 연습할 수 있도록 돕습니다.",
    },
    en: {
      category: "Foundations",
      subtitle: "Where eyes and hands get familiar first",
      name: "Line Draw",
      short: "Trace straight lines, curves, and spirals to steady the hand",
      long: "Playfully trains the hand-control skills that underlie writing and drawing. Three difficulty levels and voice guidance help a child keep practicing without giving up.",
    },
  },
  slowmath_dot2dot: {
    ko: {
      category: "기초 인지",
      subtitle: "눈과 손이 먼저 익숙해지는 시간",
      name: "점선 따라 그리기",
      short: "주어진 점과 선을 보고 똑같이 따라 그리며 시지각과 소근육을 키워요",
      long: "예시로 주어진 점-선 연결을 관찰하고 아래 격자에 똑같이 재현하는 활동이에요. 시지각 변별과 손 조절을 동시에 자극하고, 격자 크기·방향 복잡도를 조절해 아이 수준에 맞게 쓸 수 있습니다.",
    },
    en: {
      category: "Foundations",
      subtitle: "Where eyes and hands get familiar first",
      name: "Dot to Dot",
      short: "Watch a dot-and-line example and recreate it on a grid below — visual perception and fine motor at once",
      long: "Children observe a sample dot-and-line drawing and reproduce it exactly on the grid below. It stimulates visual discrimination and hand control together, and grid size and directional complexity adjust to each child's level.",
    },
  },
  slowmath_colorcopy: {
    ko: {
      category: "기초 인지",
      subtitle: "눈과 손이 먼저 익숙해지는 시간",
      name: "똑같이 맞추기",
      short: "제시된 색 격자 패턴을 그대로 따라 만들며 시지각을 훈련해요",
      long: "시지각 변별과 작업 기억을 동시에 훈련해요. 2×2부터 5×5까지 격자가 커지고 색의 수도 조절할 수 있어 아이 수준에 맞게 활용 가능합니다.",
    },
    en: {
      category: "Foundations",
      subtitle: "Where eyes and hands get familiar first",
      name: "Color Copy",
      short: "Recreate the shown color-grid pattern to train visual perception",
      long: "Trains visual discrimination and working memory at the same time. Grids grow from 2×2 to 5×5 and the number of colors is adjustable, so it fits each child's level.",
    },
  },
  slowmath_pattern: {
    ko: {
      category: "기초 인지",
      subtitle: "눈과 손이 먼저 익숙해지는 시간",
      name: "패턴 연습",
      short: "반복되는 규칙에서 빠진 것을 찾는 패턴 인식을 훈련해요",
      long: "패턴 인식은 수학적 사고력의 핵심이에요. 과일·색깔·도형 패턴을 단계적으로 학습하고, 선택 잠금 기능으로 사고력을 키워줍니다.",
    },
    en: {
      category: "Foundations",
      subtitle: "Where eyes and hands get familiar first",
      name: "Pattern",
      short: "Find what's missing in a repeating rule — pattern recognition practice",
      long: "Pattern recognition is at the heart of mathematical thinking. Children work through fruit, color, and shape patterns step by step, while a selection-lock feature builds reasoning skills.",
    },
  },
  slowmath_sameshape: {
    ko: {
      category: "기초 인지",
      subtitle: "눈과 손이 먼저 익숙해지는 시간",
      name: "같은 모양 찾기",
      short: "여러 모양 중에서 같은 모양과 짝을 찾으며 시지각 변별을 훈련해요",
      long: "네모·세모·동그라미부터 별·하트·오각형까지 10가지 도형을 활용해 모양을 변별하는 능력을 키워요. 단일·그룹 고르기, 색깔 변별, 짝꿍 찾기까지 단계적으로 도전하며 시지각 처리를 훈련합니다.",
    },
    en: {
      category: "Foundations",
      subtitle: "Where eyes and hands get familiar first",
      name: "Same Shape",
      short: "Find same shapes and pairs among many — visual discrimination practice",
      long: "Uses ten shapes, from square, triangle, and circle to star, heart, and pentagon, to build shape discrimination. Children progress through single and group picking, color discrimination, and pair finding to train visual processing.",
    },
  },
  slowmath_number: {
    ko: {
      category: "수 개념",
      subtitle: "숫자가 ‘양’으로 보이기 시작할 때",
      name: "숫자 익히기",
      short: "1부터 100까지 숫자를 보고·듣고·고르며 익혀요",
      long: "힌트와 음성 안내 덕분에 아이 혼자서도 도전할 수 있어요. 1부터 100까지 수의 순서 개념을 차근차근 익혀 학교 수업 준비에 효과적입니다.",
    },
    en: {
      category: "Number Sense",
      subtitle: "When numbers start to look like 'amounts'",
      name: "Number",
      short: "See, hear, and pick numbers from 1 to 100",
      long: "Hints and voice guidance let a child try on their own. Learning the order of numbers from 1 to 100 step by step is great preparation for school.",
    },
  },
  slowmath_numberdraw: {
    ko: {
      category: "수 개념",
      subtitle: "숫자가 ‘양’으로 보이기 시작할 때",
      name: "숫자 쓰기",
      short: "0~9 숫자를 올바른 순서로 쓰는 법을 연습해요",
      long: "숫자 모양을 손으로 직접 써보며 형태를 몸으로 기억할 수 있어요. 점선 안내와 단계적 피드백으로 처음 쓰는 아이도 올바른 필순을 자연스럽게 익힙니다.",
    },
    en: {
      category: "Number Sense",
      subtitle: "When numbers start to look like 'amounts'",
      name: "Number Draw",
      short: "Practice writing 0–9 in the correct stroke order",
      long: "By tracing the shape of each digit by hand, children remember the form through their body. Dotted guides and step-by-step feedback help even first-time writers pick up the correct stroke order naturally.",
    },
  },
  slowmath_dice: {
    ko: {
      category: "수 개념",
      subtitle: "숫자가 ‘양’으로 보이기 시작할 때",
      name: "세기",
      short: "손가락·주사위·카드 무늬를 세며 수 감각을 키워요",
      long: "생활 속 사물을 세는 연습으로 수 감각을 자연스럽게 익힐 수 있어요. 생각 시간 조절로 충동적 답 선택을 막고 천천히 생각하는 습관을 기릅니다.",
    },
    en: {
      category: "Number Sense",
      subtitle: "When numbers start to look like 'amounts'",
      name: "Counting",
      short: "Count fingers, dice pips, and card suits — building number sense",
      long: "Counting everyday objects builds number sense naturally. Adjustable thinking time prevents impulsive answers and grows the habit of thinking slowly.",
    },
  },
  slowmath_counting: {
    ko: {
      category: "수 개념",
      subtitle: "숫자가 ‘양’으로 보이기 시작할 때",
      name: "우리말 세기",
      short: "한 명·두 마리·세 대… 우리말로 세는 말과 숫자를 짝지어요",
      long: "사람은 &#39;한 명&#39;, 동물은 &#39;한 마리&#39;, 차는 &#39;한 대&#39;처럼 사물마다 우리말로 세는 말이 달라요. &#39;한 명 ↔ 1명&#39;, &#39;두 마리 ↔ 2마리&#39;처럼 우리말과 숫자를 짝지으며 자연스럽게 익혀요.",
    },
    en: {
      category: "Number Sense",
      subtitle: "When numbers start to look like 'amounts'",
      name: "Korean Counters",
      short: "Pair Korean counting words like 'one person, two animals, three cars' with their numbers",
      long: "In Korean, the counting word changes with the thing being counted — 'han myeong' for people, 'han mari' for animals, 'han dae' for cars. Children learn naturally by pairing the Korean words with their numbers, like 'han myeong ↔ 1 myeong' and 'du mari ↔ 2 mari'.",
    },
  },
  slowmath_matching: {
    ko: {
      category: "수 개념",
      subtitle: "숫자가 ‘양’으로 보이기 시작할 때",
      name: "숫자 매칭",
      short: "숫자와 동그라미의 개수를 연결하며 수와 양을 연결해요",
      long: "숫자 기호와 실제 양을 연결하는 핵심 수 개념을 다질 수 있어요. 순서대로·무작위로 반복하며 자동화 단계까지 이끌어줍니다.",
    },
    en: {
      category: "Number Sense",
      subtitle: "When numbers start to look like 'amounts'",
      name: "Matching",
      short: "Connect numbers with the right count of circles — linking symbol and quantity",
      long: "Solidifies the core number concept of linking number symbols with actual quantities. Repeating in order and at random leads all the way to automatization.",
    },
  },
  slowmath_gap: {
    ko: {
      category: "수 개념",
      subtitle: "숫자가 ‘양’으로 보이기 시작할 때",
      name: "수의 간격",
      short: "일정한 간격의 빈 자리 수를 맞춰보세요",
      long: "가로 배열의 빈 자리를 채우며 수의 규칙을 익혀요. 아이가 익숙한 간격으로 충분히 연습한 뒤 다른 간격으로 차근차근 넘어가고, 정방향·역방향과 힌트 보임·숨김을 조절해 아이 수준에 딱 맞게 반복할 수 있어요.",
    },
    en: {
      category: "Number Sense",
      subtitle: "When numbers start to look like 'amounts'",
      name: "Number Gap",
      short: "Fill in the missing numbers in an evenly spaced row",
      long: "Fill the gaps in a horizontal row to grasp the rule behind the sequence. Start with a gap size the child is comfortable with, then move on to other gaps step by step. Direction (forward/backward) and hint visibility adjust to fit each child's level.",
    },
  },
  slowmath_money: {
    ko: {
      category: "수 개념",
      subtitle: "숫자가 ‘양’으로 보이기 시작할 때",
      name: "동전과 지폐",
      short: "우리나라 동전과 지폐의 모양·이름을 익혀요",
      long: "10·50·100·500원 동전과 1,000·5,000·10,000·50,000원 지폐를 그림과 이름으로 짝지으며 자연스럽게 익혀요.",
    },
    en: {
      category: "Number Sense",
      subtitle: "When numbers start to look like 'amounts'",
      name: "Money",
      short: "Learn the shapes and names of Korean coins and bills",
      long: "Children learn naturally by pairing 10, 50, 100, and 500 won coins and 1,000, 5,000, 10,000, and 50,000 won bills with their pictures and names.",
    },
  },
  slowmath_comparing: {
    ko: {
      category: "수 관계",
      subtitle: "크고 작고, 같고 다름을 읽는 연습",
      name: "비교하기 기초 1",
      short: "크기·길이·높이·두께·양을 비교하며 수학 언어를 익혀요",
      long: "&#39;더 크다&#39;, &#39;더 짧다&#39;를 수학적 개념과 연결해 줘요. 그림으로 직관적으로 보여주기 때문에 글을 읽지 못해도 학습할 수 있습니다.",
    },
    en: {
      category: "Number Relations",
      subtitle: "Reading bigger, smaller, same, and different",
      name: "Compare",
      short: "Compare size, length, height, thickness, and quantity — math language",
      long: "Connects 'bigger' and 'shorter' to mathematical concepts. Because everything is shown intuitively with pictures, children can learn even before they can read.",
    },
  },
  slowmath_comparing2: {
    ko: {
      category: "수 관계",
      subtitle: "크고 작고, 같고 다름을 읽는 연습",
      name: "비교하기 기초 2",
      short: "위·아래·안·밖 등 공간 관계를 비교하며 익혀요",
      long: "위치와 공간 언어를 이해하는 것은 수학 문장제의 기초예요. 도형 그림으로 공간 개념을 자연스럽게 내면화할 수 있습니다.",
    },
    en: {
      category: "Number Relations",
      subtitle: "Reading bigger, smaller, same, and different",
      name: "Compare 2",
      short: "Compare spatial relations — above, below, inside, outside",
      long: "Understanding position and spatial language is the foundation for word problems. Shape illustrations let children internalize spatial concepts naturally.",
    },
  },
  slowmath_compare: {
    ko: {
      category: "수 관계",
      subtitle: "크고 작고, 같고 다름을 읽는 연습",
      name: "수의 크기",
      short: "수의 크기를 비교하고 부등호로 표현하는 법을 익혀요",
      long: "수의 대소 관계를 수평선과 막대 차트 힌트로 시각적으로 익혀요. 한 자리·두 자리 모두 지원하며 부등호(&lt;, =, &gt;) 학습까지 단계적으로 이어집니다.",
    },
    en: {
      category: "Number Relations",
      subtitle: "Reading bigger, smaller, same, and different",
      name: "Compare",
      short: "Compare number sizes and express them with inequality signs",
      long: "Children learn greater-than and less-than relationships visually with number-line and bar-chart hints. Both single and two digits are supported, leading step by step up to inequality signs (<, =, >).",
    },
  },
  slowmath_clock: {
    ko: {
      category: "수 관계",
      subtitle: "크고 작고, 같고 다름을 읽는 연습",
      name: "시계 보기",
      short: "아날로그·디지털 시계를 읽는 법을 시·30분·15분 단위로 배워요",
      long: "시계 보기는 생활 독립에 꼭 필요한 기술이에요. 정각부터 시작해 30분·15분·45분으로 점점 세밀해지는 단계로 누구나 따라갈 수 있도록 설계되었습니다.",
    },
    en: {
      category: "Number Relations",
      subtitle: "Reading bigger, smaller, same, and different",
      name: "Clock",
      short: "Read analog and digital clocks — hour, half, and quarter",
      long: "Telling time is an essential skill for daily independence. It starts at o'clock and grows finer through half past, quarter past, and quarter to, designed so every child can follow.",
    },
  },
  slowmath_calendar: {
    ko: {
      category: "수 관계",
      subtitle: "크고 작고, 같고 다름을 읽는 연습",
      name: "달력 보기 연습",
      short: "달력에서 요일·날짜를 고르고 동그라미 친 날을 찾으며 달력 읽기를 익혀요",
      long: "달력 보기는 시간 감각·일정 이해의 기초예요. 요일 모두 고르기, N번째 요일 고르기, 날짜 고르기, 동그라미 친 날 맞추기까지 단계별로 익히도록 설계되었습니다.",
    },
    en: {
      category: "Number Relations",
      subtitle: "Reading bigger, smaller, same, and different",
      name: "Calendar",
      short: "Pick days of the week and dates, find the circled day — calendar reading",
      long: "Calendar reading is the foundation for time sense and understanding schedules. It progresses through picking all of one weekday, picking the Nth weekday, picking a date, and finding the circled day.",
    },
  },
  slowmath_oddeven: {
    ko: {
      category: "수 관계",
      subtitle: "크고 작고, 같고 다름을 읽는 연습",
      name: "홀수 짝수 익히기",
      short: "배열판·숫자판·랜덤·짝짓기 4가지 모드로 홀수와 짝수를 익혀요",
      long: "홀짝 개념은 수 패턴 인지의 출발점이에요. 배열판에서 짝이 맞는지 시각으로 확인하고, 숫자판에서 모두 고르고, 랜덤 숫자를 판별하고, 같은 종류끼리 짝짓는 4단계 모드로 충분히 반복합니다.",
    },
    en: {
      category: "Number Relations",
      subtitle: "Reading bigger, smaller, same, and different",
      name: "Odd & Even",
      short: "Learn odd and even through array, number board, random, and pair modes",
      long: "Odd and even is the starting point for recognizing number patterns. Children get plenty of repetition across four modes: visually checking pairs on an array, picking them all on a number board, judging random numbers, and matching like with like.",
    },
  },
  slowmath_combining: {
    ko: {
      category: "덧셈 전 개념",
      subtitle: "모으고 가르며 수를 만져보는 경험",
      name: "모으기 연습",
      short: "두 수를 합쳐 하나의 수를 만드는 수 합성을 연습해요",
      long: "덧셈의 의미를 &#39;모은다&#39;는 직관으로 이해할 수 있어요. 드래그 인터랙션으로 손과 눈을 동시에 사용해 더 오래 기억됩니다.",
    },
    en: {
      category: "Pre-Addition",
      subtitle: "Combining and splitting — feeling numbers",
      name: "Combining",
      short: "Combine two numbers into one — number composition",
      long: "Children grasp the meaning of addition through the intuition of 'putting together'. Drag interaction uses hand and eye at once, so it stays in memory longer.",
    },
  },
  slowmath_splitting: {
    ko: {
      category: "덧셈 전 개념",
      subtitle: "모으고 가르며 수를 만져보는 경험",
      name: "가르기 연습",
      short: "하나의 수를 두 부분으로 나누는 수 분해를 연습해요",
      long: "뺄셈과 덧셈의 기초가 되는 수 분해 개념을 익힐 수 있어요. 2~9까지 세 단계로 나뉘어 아이 수준에 딱 맞는 도전부터 시작할 수 있습니다.",
    },
    en: {
      category: "Pre-Addition",
      subtitle: "Combining and splitting — feeling numbers",
      name: "Splitting",
      short: "Split one number into two parts — number decomposition",
      long: "Builds the number-decomposition concept that underlies both subtraction and addition. Divided into three levels from 2 to 9, it lets each child start at just the right challenge.",
    },
  },
  slowmath_complement: {
    ko: {
      category: "덧셈 전 개념",
      subtitle: "모으고 가르며 수를 만져보는 경험",
      name: "보수 연습",
      short: "10을 채우는 짝꿍 수(보수)를 세 가지 방식으로 익혀요",
      long: "10의 보수는 받아올림 덧셈과 뺄셈의 핵심 개념이에요. 충동 억제 기능과 다양한 연습 모드로 충분히 반복해 완전 학습에 도달할 수 있습니다.",
    },
    en: {
      category: "Pre-Addition",
      subtitle: "Combining and splitting — feeling numbers",
      name: "Complement",
      short: "Find the partner number that fills 10 — three ways",
      long: "Complements of 10 are a core concept for carrying in addition and subtraction. An impulse-control feature and varied practice modes give enough repetition to reach full mastery.",
    },
  },
  slowmath_plusone: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "더하기 1",
      short: "수 배열판·순서 예측·무작위 문제로 +1 덧셈을 익혀요",
      long: "&#39;+1은 다음 수&#39;라는 규칙을 수 배열판으로 시각화해 직관적으로 이해할 수 있어요. 1~99 범위까지 단계적으로 넓혀 자신감을 쌓아줍니다.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Plus One",
      short: "Number arrays, order prediction, and random problems — +1 addition",
      long: "The rule that '+1 is the next number' is visualized on a number array for intuitive understanding. The range expands step by step up to 1–99, building confidence along the way.",
    },
  },
  slowmath_plustwo: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "더하기 2",
      short: "2 더하기를 배열판과 건너뛰기로 시각화해서 배워요",
      long: "수 배열판에서 두 칸 건너뛰는 패턴이 홀짝 개념과 연결되어 확장 학습이 가능해요. 1~98 범위를 단계별로 정복하며 성취감을 경험합니다.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Plus Two",
      short: "Visualize +2 with the number array and skip counting",
      long: "The two-step skip pattern on the number array connects to odd and even, opening up extended learning. Children conquer the 1–98 range step by step and feel a sense of achievement.",
    },
  },
  slowmath_plusthree: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "더하기 3",
      short: "3 더하기를 여러 학습 모드로 반복 연습해요",
      long: "더하기 1·2를 익힌 후 자연스럽게 이어지는 단계로, 수 배열판 애니메이션이 연산 과정을 생생하게 보여줘요. 무작위 문제로 완전 학습을 지원합니다.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Plus Three",
      short: "Practice +3 across multiple learning modes",
      long: "A natural next step after +1 and +2, with number-array animation that shows the computation vividly. Random problems support full mastery.",
    },
  },
  slowmath_easy: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "한 자리 덧셈",
      short: "가장 쉬운 단계부터 시작하는 한 자리 덧셈 연습",
      long: "덧셈이 처음인 아이도 부담 없이 시작할 수 있도록 4단계로 난이도를 조절해요. 충동 억제 모드로 답을 고르기 전에 충분히 생각하는 습관을 만들어줍니다.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Easy",
      short: "Single-digit addition starting from the easiest level",
      long: "Four difficulty levels let even a child new to addition start without pressure. An impulse-control mode builds the habit of thinking it through before choosing an answer.",
    },
  },
  slowmath_circle: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "한 자리 덧셈 연습",
      short: "고르기·쌓기·채우기 세 가지 방식으로 덧셈을 연습해요",
      long: "같은 덧셈을 다양한 형태로 경험해 개념이 더 깊이 자리잡혀요. 시각적 구체물을 활용하기 때문에 추상적 연산이 어려운 아이에게 특히 효과적입니다.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Circle",
      short: "Pick, stack, and fill — three ways to practice addition",
      long: "Experiencing the same addition in varied forms lets the concept settle more deeply. Because it uses visual concretes, it is especially effective for children who struggle with abstract calculation.",
    },
  },
  slowmath_carry: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "받아올림 연습",
      short: "가르기와 배열판으로 10을 만들어 받아올림을 익혀요",
      long: "두 자리 수 덧셈의 핵심인 받아올림을 가르기·보수와 배열판이라는 두 가지 직관적 방법으로 분리해 학습해요. 드래그 인터랙션으로 &#39;10을 만든다&#39;는 감각을 손과 눈으로 함께 익힙니다.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Carry",
      short: "Make 10 by splitting and on the array — carrying practice",
      long: "Carrying, the core of two-digit addition, is learned through two intuitive approaches kept separate: splitting/complements and the number array. Drag interaction builds the felt sense of 'making 10' with hand and eye together.",
    },
  },
  slowmath_verticaladd: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "세로 덧셈",
      short: "두 자리 수 세로 덧셈을 일의 자리부터 차근차근 풀어요",
      long: "받아올림을 익힌 다음 단계로, 일의 자리·십의 자리를 분리해 풀이 흐름을 시각적으로 보여줘요. 빈칸이 한 칸씩 늘어나며 아이가 스스로 절차를 익힐 수 있도록 돕습니다.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Vertical Add",
      short: "Solve two-digit vertical addition from the ones place up",
      long: "The step after carrying — the ones and tens places are separated so the flow of the solution is visible. Blanks increase one at a time, helping the child master the procedure on their own.",
    },
  },
  slowmath_moneycalc: {
    ko: {
      category: "덧셈",
      subtitle: "작은 걸음부터 쌓아올리는 계산",
      name: "돈 계산하기",
      short: "동전과 지폐로 가격을 맞추거나 합계를 골라요",
      long: "교실의 덧셈을 실생활(돈)로 옮긴 응용 단계. 가격표 보고 돈 모으기 / 모은 돈 보고 가격 맞추기 두 방향을 동전만·지폐만·동전과 지폐 세 가지 난이도로 반복 연습해요.",
    },
    en: {
      category: "Addition",
      subtitle: "Calculation, built from small steps",
      name: "Money Calc",
      short: "Pay a price with coins and bills, or pick the total",
      long: "An applied stage that moves classroom addition into real life (money). Children practice both directions — gathering money to match a price tag, and matching a price to the money gathered — across three difficulties: coins only, bills only, and coins with bills.",
    },
  },
  slowmath_minusone: {
    ko: {
      category: "뺄셈",
      subtitle: "한 걸음씩 덜어내는 계산",
      name: "빼기 1",
      short: "수 배열판·이전 수 예측·무작위 문제로 -1 뺄셈을 익혀요",
      long: "&#39;-1은 바로 앞 수&#39;라는 규칙을 수 배열판으로 시각화해 직관적으로 이해할 수 있어요. 단계적 범위 확장으로 뺄셈에 대한 부담 없이 익힙니다.",
    },
    en: {
      category: "Subtraction",
      subtitle: "Calculation, one step removed at a time",
      name: "Minus One",
      short: "Number arrays, previous-number prediction, and random — −1 subtraction",
      long: "The rule that '−1 is the number just before' is visualized on a number array for intuitive understanding. Gradual range expansion lets children learn subtraction without feeling burdened.",
    },
  },
  slowmath_minustwo: {
    ko: {
      category: "뺄셈",
      subtitle: "한 걸음씩 덜어내는 계산",
      name: "빼기 2",
      short: "2 빼기를 배열판과 거꾸로 건너뛰기로 시각화해서 배워요",
      long: "수 배열판에서 두 칸씩 거꾸로 건너뛰는 패턴으로 -2 뺄셈을 직관적으로 이해해요. 단계별 범위 확장으로 자기 속도에 맞게 정복할 수 있습니다.",
    },
    en: {
      category: "Subtraction",
      subtitle: "Calculation, one step removed at a time",
      name: "Minus Two",
      short: "Visualize −2 with the array and reverse skip counting",
      long: "The pattern of skipping back two at a time on the number array makes −2 subtraction intuitive. Step-by-step range expansion lets children conquer it at their own pace.",
    },
  },
  slowmath_minusthree: {
    ko: {
      category: "뺄셈",
      subtitle: "한 걸음씩 덜어내는 계산",
      name: "빼기 3",
      short: "3 빼기를 여러 학습 모드로 반복 연습해요",
      long: "빼기 1·2를 익힌 후 자연스럽게 이어지는 단계로, 수 배열판 애니메이션이 뺄셈 과정을 생생하게 보여줘요. 무작위 문제로 완전 학습을 지원합니다.",
    },
    en: {
      category: "Subtraction",
      subtitle: "Calculation, one step removed at a time",
      name: "Minus Three",
      short: "Practice −3 across multiple learning modes",
      long: "A natural next step after −1 and −2, with number-array animation that shows the subtraction vividly. Random problems support full mastery.",
    },
  },
  slowmath_subtract: {
    ko: {
      category: "뺄셈",
      subtitle: "한 걸음씩 덜어내는 계산",
      name: "한 자리 뺄셈 연습",
      short: "드래그·묶기·배열판 세 가지 방식으로 한 자리 뺄셈을 익혀요",
      long: "동그라미를 바구니에 옮기거나, 묶어서 빼거나, 배열판에서 사선으로 지우는 세 가지 시각화로 뺄셈의 의미를 다각도로 익혀요. 답 검증이 그림과 함께 이뤄져 손과 눈으로 동시에 학습합니다.",
    },
    en: {
      category: "Subtraction",
      subtitle: "Calculation, one step removed at a time",
      name: "Subtract Practice",
      short: "Drag, group, and array — three ways to do 1-digit subtraction",
      long: "Three visualizations — moving circles into a basket, grouping and taking away, or slashing them out on an array — teach the meaning of subtraction from many angles. Answer-checking happens alongside the pictures, so hand and eye learn together.",
    },
  },
  slowmath_borrow: {
    ko: {
      category: "뺄셈",
      subtitle: "한 걸음씩 덜어내는 계산",
      name: "받아내림 연습",
      short: "받아내림이 필요한 뺄셈을 단계별로 차근차근 풀어요",
      long: "두 자리에서 한 자리·두 자리를 뺄 때 받아내림이 어떻게 일어나는지 식의 분해와 묶음 표시로 천천히 보여줘요. 첫 문제는 빈칸 한 칸으로 시작해 점진적으로 빈칸이 늘어나며 풀이 흐름을 스스로 익혀요.",
    },
    en: {
      category: "Subtraction",
      subtitle: "Calculation, one step removed at a time",
      name: "Borrow",
      short: "Borrowing subtraction, solved step by step",
      long: "Shows slowly, through decomposing the expression and grouping marks, how borrowing happens when subtracting one or two digits from a two-digit number. The first problem starts with a single blank and gradually adds more, so the child learns the flow on their own.",
    },
  },
  slowmath_verticalsub: {
    ko: {
      category: "뺄셈",
      subtitle: "한 걸음씩 덜어내는 계산",
      name: "세로 뺄셈",
      short: "두 자리 수 세로 뺄셈을 일의 자리부터 차근차근 풀어요",
      long: "받아내림 개념을 익힌 다음 단계로, 일의 자리·십의 자리를 분리해 풀이 흐름을 시각적으로 보여줘요. 빈칸이 한 칸씩 늘어나며 절차적 풀이를 스스로 익힐 수 있습니다.",
    },
    en: {
      category: "Subtraction",
      subtitle: "Calculation, one step removed at a time",
      name: "Vertical Sub",
      short: "Solve two-digit vertical subtraction from the ones place up",
      long: "The step after borrowing — the ones and tens places are separated so the flow of the solution is visible. Blanks increase one at a time, so the child masters the step-by-step procedure on their own.",
    },
  },
  slowmath_changecalc: {
    ko: {
      category: "뺄셈",
      subtitle: "한 걸음씩 덜어내는 계산",
      name: "거스름돈 계산하기",
      short: "물건값과 낸 돈을 보고 거스름돈을 계산해요",
      long: "뺄셈을 실생활(돈)로 옮긴 응용 단계. 가격과 낸 돈의 차액으로 거스름돈을 직접 골라보며, 동전·지폐 단위 감각과 뺄셈을 함께 익힙니다.",
    },
    en: {
      category: "Subtraction",
      subtitle: "Calculation, one step removed at a time",
      name: "Change Calc",
      short: "Look at the price and the money paid, pick the change",
      long: "An applied stage that moves subtraction into real life (money). Children pick the change themselves as the difference between the price and the money paid, building a sense for coin and bill units alongside subtraction.",
    },
  },
  slowmath_timestables: {
    ko: {
      category: "곱셈",
      subtitle: "개념을 이해하는 수의 규칙",
      name: "구구단 연습",
      short: "2~9단 구구단을 충분한 생각 시간과 함께 천천히 익혀요",
      long: "생각 시간을 충분히 조절할 수 있어 빠른 암기가 어려운 아이도 자기 속도로 구구단을 정복할 수 있어요. 반복 노출을 통해 장기 기억으로 자연스럽게 전환됩니다.",
    },
    en: {
      category: "Multiplication",
      subtitle: "The number rules behind the concept",
      name: "Timestables",
      short: "2–9 times tables, learned slowly with enough thinking time",
      long: "Thinking time is fully adjustable, so even a child who struggles to memorize quickly can master the times tables at their own pace. Repeated exposure shifts them into long-term memory naturally.",
    },
  },
};
