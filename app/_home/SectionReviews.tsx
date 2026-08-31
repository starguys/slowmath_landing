import { type Locale } from "./apps";

/**
 * 사용자 후기 밴드 — 3칸 카드 (사진 · 인용문 · 별점 · 프로필).
 * 첫 칸만 실제 후기, 2·3번 칸은 placeholder(추후 추가).
 * 톤앤매너: SectionExpert 흰카드 + #4a4035/#8c8070/#f0a050 팔레트.
 */

type Review = {
  photo?: string;      // /reviews/<file> — 없으면 컬러 블록 폴백
  photoAlt: string;
  quote: string;       // 본문 (1~3문장, 너무 길지 않게)
  rating: 1 | 2 | 3 | 4 | 5;
  authorName: string;
  authorMeta: string;  // 예: "4세 아이 엄마"
  authorAvatar?: string; // 없으면 이니셜 원형
};

const C = {
  ko: {
    heading: "실제로 써보신 부모님들의 이야기",
    empty: "곧 만나요",
    reviews: [
      {
        photo: "/reviews/prayforyou35.png",
        photoAlt: "느린아이 앱으로 거스름돈 만들기 연습 중인 아이",
        // 원본 블로그: https://blog.naver.com/prayforyou35/224350355842
        quote:
          "첫 번째로 해본 건 거스름돈 만들기 문제였어요. 290원짜리 물건을 사고 1000원을 냈을 때 거스름돈을 동전으로 직접 만들어보는 문제였는데, 십원·오십원·백원·오백원 동전을 하나씩 눌러가며 스스로 계산해보는 방식이라 그냥 답만 입력하는 것보다 돈의 개념, 수개념을 체득하는 데 훨씬 도움이 되는 것 같았어요.",
        rating: 5,
        authorName: "prayforyou35",
        authorMeta: "네이버 블로그 후기",
      } as Review,
      {
        photo: "/reviews/prayforyou35-2.png",
        photoAlt: "느린아이 앱으로 수 개념 연습 중인 아이",
        quote:
          "특히 좋았던 건 한 영역을 충분히 반복할 수 있다는 점이었어요. 다른 앱들은 한두 문제 풀면 바로 다음 단계로 넘어가는데, 느린아이는 비슷한 유형을 여러 번 연습할 수 있어서 기초가 부족한 우리 아이한테 딱 필요했어요. 며칠 지나니 '이건 할 수 있어'라는 말이 나오기 시작했고, 예전엔 덧셈만 봐도 머뭇거리던 아이가 손가락으로 하나씩 세어가며 끝까지 풀어보려는 모습이 보였어요.",
        rating: 5,
        authorName: "tiny7467",
        authorMeta: "네이버 블로그 후기",
      } as Review,
      null,
    ] as (Review | null)[],
  },
  en: {
    heading: "What parents actually say",
    empty: "Coming soon",
    reviews: [
      {
        // TODO: 사진 파일을 /public/reviews/prayforyou35.jpg 로 저장한 뒤 아래 라인 활성화
        // photo: "/reviews/prayforyou35.jpg",
        photoAlt: "A child using LittleSteps on a tablet",
        quote: "Blog review excerpt will go here. (Placeholder — swap in 2–3 lines from the original post.)",
        rating: 5,
        authorName: "prayforyou35",
        authorMeta: "Blog review",
      } as Review,
      null,
      null,
    ] as (Review | null)[],
  },
  ja: {
    heading: "実際に使ってみた保護者の声",
    empty: "近日公開",
    reviews: [
      {
        // TODO: 사진 파일을 /public/reviews/prayforyou35.jpg 로 저장한 뒤 아래 라인 활성화
        // photo: "/reviews/prayforyou35.jpg",
        photoAlt: "タブレットでLittleStepsを使う子ども",
        quote: "ブログレビューの本文がここに入ります。(仮テキスト — 原文から2〜3行抜粋して差し替えてください。)",
        rating: 5,
        authorName: "prayforyou35",
        authorMeta: "ブログレビュー",
      } as Review,
      null,
      null,
    ] as (Review | null)[],
  },
} as const;

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-[2px]" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < n ? "#F0A050" : "#E9E2D6"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L10 14.9l-5.25 2.8 1-5.85L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, emptyLabel }: { review: Review | null; emptyLabel: string }) {
  if (!review) {
    return (
      <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-[14px] border border-dashed border-[#e9e2d6] bg-[#faf7f1] p-6 text-center">
        <div className="mb-2 text-[24px] leading-none text-[#c8bda9]" aria-hidden="true">✦</div>
        <p className="text-[13px] font-light text-[#a89f8d]">{emptyLabel}</p>
      </div>
    );
  }
  const initial = review.authorName.slice(0, 1).toUpperCase();
  return (
    <figure className="m-0 flex w-full flex-col overflow-hidden rounded-[14px] border border-[#efe9de] bg-white">
      {/* photo — 없으면 오렌지 그라디언트 폴백 */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#ffe7c6] to-[#fbc98f]">
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.photo}
            alt={review.photoAlt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8a2 2 0 0 1 2-2h2l1.5-2h5L16 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.8" strokeLinejoin="round"/>
              <circle cx="12" cy="13" r="3.2" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.8"/>
            </svg>
          </div>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-4">
        <div className="text-[22px] leading-none text-[#f0a050]" aria-hidden="true">”</div>
        <blockquote className="m-0 flex-1 text-[13px] font-light leading-[20px] tracking-[-0.1px] text-[#4a4035] whitespace-pre-line">
          {review.quote}
        </blockquote>
        <Stars n={review.rating} />
      </div>

      {/* footer */}
      <figcaption className="flex items-center gap-2 border-t border-[#efe9de] bg-[#faf7f1] px-4 py-3">
        {review.authorAvatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.authorAvatar}
            alt=""
            className="h-7 w-7 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ffdfa1] text-[11px] font-bold text-[#7a5a2a]">
            {initial}
          </span>
        )}
        <div className="flex flex-1 flex-col leading-tight">
          <span className="text-[12px] font-bold text-[#4a4035]">{review.authorName}</span>
          <span className="text-[11px] font-light text-[#8c8070]">{review.authorMeta}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function SectionReviews({ locale = "ko" }: { locale?: Locale }) {
  const t = C[locale];
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="lazy-section flex w-full scroll-mt-[64px] flex-col items-center bg-white px-4 py-14"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-6">
        <header className="flex flex-col items-center gap-2 text-center">
          <h2
            id="reviews-heading"
            className="text-[22px] font-bold leading-[30px] tracking-[-0.4px] text-[#4a4035]"
          >
            {t.heading}
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.reviews.map((r, i) => (
            <ReviewCard key={i} review={r} emptyLabel={t.empty} />
          ))}
        </div>
      </div>
    </section>
  );
}
