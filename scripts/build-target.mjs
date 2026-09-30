/**
 * Post-build: 배포 대상(SITE_TARGET)에 맞게 out/ 을 다듬는다.
 *
 * NEXT_PUBLIC_SITE_TARGET=en 일 때만 동작하고, 그 밖에는 아무것도 하지 않는다.
 * 즉 slowkids.net 배포의 산출물은 지금과 똑같다.
 *
 * ── 왜 빌드 단계에서 가르나
 * next.config 가 output:"export" 라 한 번의 빌드가 한 벌의 정적 파일을 낳고,
 * 한 프로젝트에 붙은 도메인들이 그 한 벌을 그대로 나눠 쓴다. 호스트마다 "/" 를
 * 다르게 주려면 rewrite 가 필요한데 Vercel 은 rewrite 보다 파일을 먼저 본다 —
 *   "The source property should NOT be a file because precedence is given to
 *    the filesystem prior to rewrites being applied."
 * out/index.html 이 실재하므로 "/" 에 건 rewrite 는 발화하지 않는다.
 * 그래서 영어판은 자기 배포를 갖고, 여기서 영어 페이지를 뿌리로 옮긴다.
 *
 * ── 여기서 하는 일은 파일을 옮기고 덜어내는 것뿐
 * 주소(canonical·og:url·hreflang·내부 링크)는 소스가 SITE_TARGET 을 보고 이미
 * 제대로 찍어 낸다 — app/_seo/site.ts 참고. 산출물의 글자를 뒤에서 고치면
 * HTML 안의 RSC 페이로드가 깨져 하이드레이션이 실패한다(직접 겪음).
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "out");

const KO_URL = "https://slowkids.net";
const EN_URL = "https://littlesteps.everydaysummer.net";
// 매 빌드마다 바뀌면 크롤러가 잦은 변경으로 오인한다 — 실제 개편 시점으로 고정.
const LAST_MODIFIED = "2026-07-01";

if (process.env.NEXT_PUBLIC_SITE_TARGET !== "en") {
  console.log("[build-target] NEXT_PUBLIC_SITE_TARGET 이 en 이 아니다 — 그대로 둔다");
  process.exit(0);
}

/** 뿌리로 옮길 것 — .html 과 짝인 .txt(RSC 페이로드)를 함께 */
const MOVES = [
  ["en.html", "index.html"],
  ["en.txt", "index.txt"],
  ["en/privacy.html", "privacy.html"],
  ["en/privacy.txt", "privacy.txt"],
  ["en/terms.html", "terms.html"],
  ["en/terms.txt", "terms.txt"],
];

/** 덜어낼 것 — 다른 언어판. 그것들의 집은 slowkids.net 이다. */
const DROP = [
  "cn", "cn.html", "cn.txt",
  "tw", "tw.html", "tw.txt",
  "jp", "jp.html", "jp.txt",
  "es", "es.html", "es.txt",
  "en", "en.html", "en.txt",
];

function enSitemap() {
  const entry = (en, ko, priority, freq) =>
    [
      "<url>",
      `  <loc>${en}</loc>`,
      `  <xhtml:link rel="alternate" hreflang="en" href="${en}" />`,
      `  <xhtml:link rel="alternate" hreflang="ko" href="${ko}" />`,
      `  <xhtml:link rel="alternate" hreflang="x-default" href="${ko}" />`,
      `  <lastmod>${LAST_MODIFIED}</lastmod>`,
      `  <changefreq>${freq}</changefreq>`,
      `  <priority>${priority}</priority>`,
      "</url>",
    ].join("\n");
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entry(EN_URL, KO_URL, "1.0", "monthly"),
    entry(`${EN_URL}/privacy`, `${KO_URL}/privacy`, "0.5", "yearly"),
    entry(`${EN_URL}/terms`, `${KO_URL}/terms`, "0.5", "yearly"),
    "</urlset>",
    "",
  ].join("\n");
}

function enRobots() {
  return [
    "User-agent: *",
    "Allow: /",
    "# 슬로매스 학습도구는 랜딩 안에서만 열리는 도구다.",
    "# 직접 주소는 Vercel rewrite 로 Basic Auth 뒤를 가리켜 크롤러엔 401 로 잡힌다 —",
    "# 색인 대상이 아니므로 막아 GSC 오탐을 줄인다.",
    "Disallow: /slowmath_",
    "Disallow: /shell/",
    "",
    `Sitemap: ${EN_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

async function main() {
  for (const [from, to] of MOVES) {
    try {
      await fs.copyFile(path.join(OUT_DIR, from), path.join(OUT_DIR, to));
      console.log(`  옮김  ${from} → ${to}`);
    } catch (err) {
      if (err.code === "ENOENT") console.warn(`  !! 없음 ${from}`);
      else throw err;
    }
  }

  // 옮긴 뒤라야 한다 — DROP 에 en/ 이 들어 있다
  for (const name of DROP) {
    await fs.rm(path.join(OUT_DIR, name), { recursive: true, force: true });
  }
  console.log(`  덜어냄 ${DROP.length}개 경로`);

  await fs.writeFile(path.join(OUT_DIR, "sitemap.xml"), enSitemap(), "utf8");
  await fs.writeFile(path.join(OUT_DIR, "robots.txt"), enRobots(), "utf8");
  console.log("  sitemap.xml · robots.txt 새로 씀");

  console.log("[build-target] 영어판(LittleSteps) 배포본 준비됨");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
