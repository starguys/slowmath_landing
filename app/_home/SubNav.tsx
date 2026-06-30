"use client";

export type NavItem = { label: string; targetId: string };

/**
 * 히어로 아래 서브 네비게이션(세그먼트 탭 바). Figma navi(124:5050) 스펙.
 *  - 바 배경 = orange/300 #FACE82, 비활성 탭은 같은 배경 + #D87F27 텍스트
 *  - 활성 탭 = orange/500 #F0A050 솔리드 + 흰색 Bold, 텍스트 16/24
 *  - 탭은 flex-1(균등) + 최대폭 160(4탭 = 640), 가운데 정렬
 * 동작: sticky 아님. active 는 변하지 않고 항상 첫 탭(느린아이란?)에 고정.
 *       탭 클릭 시 해당 섹션으로 스크롤(스크롤 동작은 추후 미세 조정 예정).
 */
export default function SubNav({ items }: { items: NavItem[] }) {
  const activeId = items[0]?.targetId ?? "";

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav aria-label="섹션 바로가기" className="w-full bg-[#face82]">
      <div className="mx-auto flex w-full max-w-[640px] justify-center">
        {items.map((item) => {
          const isActive = item.targetId === activeId;
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
