"use client";

import { useEffect, useState } from "react";

export type NavItem = { label: string; targetId: string };

/**
 * 히어로 아래에 sticky 로 붙는 서브 네비게이션.
 * Figma navi(124:5050, PC=MO 동일) 스펙: 균등 분할 세그먼트 탭 바(단일 컬럼 640px 중앙정렬).
 *  - 바 배경 = orange/300 #FACE82, 비활성 탭은 같은 배경 + #D87F27 텍스트
 *  - 활성 탭 = orange/500 #F0A050 솔리드 + 흰색 Bold, 텍스트 16/24
 *  - 탭은 flex-1(균등) + 최대폭 160(4탭 = 640), 가운데 정렬, 라운드 없음
 * 동작: 클릭 시 부드러운 스크롤(오프셋은 섹션 scroll-mt 로 처리), 스크롤 위치로 활성 탭 표시(scroll-spy).
 */
export default function SubNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.targetId ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.targetId))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [items]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="섹션 바로가기"
      className="sticky top-0 z-40 w-full bg-[#face82]"
    >
      <div className="mx-auto flex w-full max-w-[640px] justify-center">
        {items.map((item) => {
          const isActive = active === item.targetId;
          return (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => onClick(e, item.targetId)}
              aria-current={isActive ? "true" : undefined}
              className={
                "nav-pill flex max-w-[160px] flex-1 items-center justify-center whitespace-nowrap px-4 py-4 text-center text-[16px] font-bold leading-[24px] tracking-[-0.2px] " +
                (isActive
                  ? "bg-[#f0a050] text-white"
                  : "text-[#d87f27] hover:bg-[#f7c061]")
              }
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
