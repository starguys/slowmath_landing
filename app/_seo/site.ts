/**
 * 사이트 주소의 단일 출처.
 *
 * 한국어판은 slowkids.net, 영어판(LittleSteps)은 해외용 도메인에 따로 산다.
 *
 * ── 왜 배포가 둘인가
 * next.config 가 output:"export" 라 한 번의 빌드가 한 벌의 정적 파일을 낳고,
 * 한 프로젝트에 붙은 도메인들이 그 한 벌을 그대로 나눠 쓴다. 호스트마다 "/" 를
 * 다르게 주려면 rewrite 가 필요한데 Vercel 은 rewrite 보다 파일을 먼저 본다 —
 *   "The source property should NOT be a file because precedence is given to
 *    the filesystem prior to rewrites being applied."
 * out/index.html 이 실재하므로 "/" 에 건 rewrite 는 발화하지 않는다.
 * 그래서 영어판은 NEXT_PUBLIC_SITE_TARGET=en 으로 도는 자기 배포를 갖고, 그 배포에서만
 * 영어 페이지가 뿌리로 온다. scripts/build-target.mjs 가 파일을 옮긴다.
 */
export const SITE_URL = "https://slowkids.net";
export const SITE_URL_EN_HOST = "https://littlesteps.everydaysummer.net";

/** 영어판 전용 배포인가 */
// "use client" 인 LangSwitcher 도 읽는다 — 클라이언트 번들에 박히려면
// NEXT_PUBLIC_ 접두어가 있어야 서버 렌더와 어긋나지 않는다.
export const IS_EN_SITE = process.env.NEXT_PUBLIC_SITE_TARGET === "en";

/** 영어 페이지의 뿌리 주소 — 전용 배포에서는 자기 도메인, 아니면 slowkids.net/en */
export const EN_BASE = IS_EN_SITE ? SITE_URL_EN_HOST : `${SITE_URL}/en`;

/**
 * 영어판 안의 상대 링크. 전용 배포에서는 /en 접두어가 사라진다.
 *   "/en"        → "/"
 *   "/en/terms"  → "/terms"
 * 그 밖의 주소는 건드리지 않는다.
 */
export function enHref(href: string): string {
  if (!IS_EN_SITE) return href;
  if (href === "/en") return "/";
  if (href.startsWith("/en/")) return href.slice(3);
  return href;
}
