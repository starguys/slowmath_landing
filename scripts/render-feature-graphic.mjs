import puppeteer from "puppeteer";
import { readFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(__dirname, "../app/icon.svg"), "utf-8");

const OUT_DIR = join(__dirname, "../app-store-assets");
mkdirSync(OUT_DIR, { recursive: true });

const W = 1024;
const H = 500;

const BG = "#FFF0D8";
const BRAND_BLUE = "#5A9FD8";
const BRAND_ORANGE = "#E8924A";
const TEXT_DARK = "#2D2620";
const TEXT_MUTED = "#7B6545";
const DOT_GREEN = "rgba(58,155,106,0.08)";

const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700;900&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    width: ${W}px;
    height: ${H}px;
    background: ${BG};
    font-family: 'Noto Sans KR', system-ui, -apple-system, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
    overflow: hidden;
    position: relative;
  }
  .bg-dots {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle at 1px 1px, ${DOT_GREEN} 1px, transparent 0);
    background-size: 28px 28px;
    pointer-events: none;
  }
  .container {
    position: relative; z-index: 1;
    width: 100%; height: 100%;
    display: flex;
    align-items: center;
    padding: 0 72px;
    gap: 48px;
  }
  .turtle {
    flex: 0 0 340px;
    height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-32px);
  }
  .turtle svg {
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 8px 16px rgba(58,155,106,0.22));
  }
  .text-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .brand {
    font-size: 92px;
    font-weight: 900;
    letter-spacing: -0.045em;
    line-height: 1;
    margin: 0;
  }
  .brand .b1 { color: ${BRAND_BLUE}; }
  .brand .b2 { color: ${BRAND_ORANGE}; }
  .tagline {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: ${TEXT_DARK};
    line-height: 1.3;
    margin: 0;
  }
  .tagline .accent { color: ${BRAND_ORANGE}; }
  .subline {
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.015em;
    color: ${TEXT_MUTED};
    line-height: 1.5;
    margin: 0;
    word-break: keep-all;
  }
  .badge {
    display: inline-block;
    margin-top: 4px;
    padding: 7px 16px;
    background: rgba(90,159,216,0.12);
    color: ${BRAND_BLUE};
    border: 1.5px solid rgba(90,159,216,0.35);
    border-radius: 999px;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.02em;
  }
</style>
</head>
<body>
  <div class="bg-dots"></div>
  <div class="container">
    <div class="turtle">${svg}</div>
    <div class="text-block">
      <h1 class="brand">
        <span class="b1">느린</span><span class="b2">아이</span>
      </h1>
      <p class="tagline">
        <span class="accent">한 걸음씩,</span> 아이의 속도로
      </p>
      <p class="subline">
        발달 지연·경계선 지능 아동을 위한 수학·인지 학습 도구
      </p>
    </div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "networkidle0", timeout: 20000 });

  // Wait for Google Fonts to load (Korean glyphs included)
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  });
  await new Promise((r) => setTimeout(r, 400));

  const out = join(OUT_DIR, "feature-graphic-1024x500.png");
  await page.screenshot({
    path: out,
    type: "png",
    clip: { x: 0, y: 0, width: W, height: H },
  });
  console.log("wrote", out, `${W}x${H}`);
} finally {
  await browser.close();
}
