"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { appHref, iconSrc, type Locale } from "./apps";
import { MODAL_CONTENT } from "./practiceModalData";

type Ctx = { open: (slug: string) => void };
const PracticeModalContext = createContext<Ctx | null>(null);

export function usePracticeModal(): Ctx {
  const ctx = useContext(PracticeModalContext);
  if (!ctx) throw new Error("usePracticeModal must be used within PracticeModalProvider");
  return ctx;
}

/**
 * practice 클릭 → 피그마 팝업(123:5481) 모달 표시 → 모달의 도구 행/화살표를 다시 누르면
 * 해당 연습(/<slug>/)으로 이동. 모달은 ko/en 콘텐츠를 locale 로 분기.
 */
export function PracticeModalProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = useCallback((s: string) => setSlug(s), []);
  const close = useCallback(() => setSlug(null), []);

  // 열렸을 때: body 스크롤 잠금 + Esc 닫기 + 닫기 버튼 포커스
  useEffect(() => {
    if (!slug) return;
    // 배경 스크롤 잠금. 스크롤바가 사라지며 생기는 좌우 밀림은
    // globals.css 의 html { scrollbar-gutter: stable } 이 막아준다.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [slug, close]);

  const content = slug ? MODAL_CONTENT[slug]?.[locale] : null;
  const labelKo = locale === "en" ? "Close" : "닫기";

  return (
    <PracticeModalContext.Provider value={{ open }}>
      {children}

      {slug && content && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-6 py-10"
          onClick={close}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="practice-modal-name"
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-[440px] flex-col gap-[20px] rounded-[16px] bg-white p-[24px] shadow-[0_24px_60px_-12px_rgba(28,28,30,0.35)]"
          >
            {/* 제목 + 닫기 */}
            <div className="flex w-full items-center gap-[4px]">
              <div className="flex min-w-0 flex-1 flex-col gap-[4px] text-[#4a4035]">
                <p className="w-full text-[18px] font-bold leading-[22px] tracking-[-0.6px]">
                  {content.category}
                </p>
                <p className="w-full text-[14px] font-light leading-[20px] tracking-[-0.2px] opacity-70">
                  {content.subtitle}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label={labelKo}
                className="flex size-[32px] shrink-0 items-center justify-center rounded-full text-[#4a4035] transition-colors hover:bg-[#f4f4f4]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path
                    d="M3.5 3.5l11 11M14.5 3.5l-11 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* 구분선 */}
            <div className="h-px w-full bg-[#dadada]" aria-hidden />

            {/* 도구 행 — 다시 누르면 연습으로 이동 */}
            <a
              href={appHref(slug, locale)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="group flex w-full items-center gap-[20px] rounded-[8px] outline-offset-4"
            >
              <img
                src={iconSrc(slug)}
                alt=""
                width={48}
                height={48}
                className="size-[48px] shrink-0"
              />
              <p
                id="practice-modal-name"
                className="min-w-0 flex-1 text-[20px] font-bold leading-[28px] tracking-[-0.6px] text-[#4a4035]"
              >
                {content.name}
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="shrink-0 text-[#4a4035] transition-transform group-hover:translate-x-0.5"
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

            {/* 짧은 설명 */}
            <div className="flex w-full items-center rounded-[8px] bg-[rgba(225,239,250,0.5)] px-[16px] py-[8px]">
              <p className="min-w-0 flex-1 text-[16px] font-bold leading-[24px] tracking-[-0.2px] text-[#6bade8]">
                {content.short}
              </p>
            </div>

            {/* 긴 설명 */}
            <p className="w-full text-[14px] font-light leading-[20px] tracking-[-0.2px] text-[#4a4035]">
              {content.long}
            </p>
          </div>
        </div>
      )}
    </PracticeModalContext.Provider>
  );
}

/**
 * practice 타일/칩 래퍼. 클릭 시 기본 이동을 막고 모달을 연다.
 * (JS 비활성 시엔 href 로 그대로 이동되는 폴백 유지)
 */
export function PracticeLink({
  slug,
  locale,
  className,
  children,
}: {
  slug: string;
  locale: Locale;
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = usePracticeModal();
  return (
    <a
      href={appHref(slug, locale)}
      onClick={(e) => {
        e.preventDefault();
        open(slug);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
