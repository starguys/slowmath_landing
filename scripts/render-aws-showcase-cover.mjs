import puppeteer from "puppeteer";
import { readFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// 거북이 SVG (Slow Kids 마스코트)
const turtleSvg = readFileSync(join(__dirname, "../app/icon.svg"), "utf-8");

const OUT_DIR = join(__dirname, "../../everydaysummer-landing/public");
mkdirSync(OUT_DIR, { recursive: true });

const W = 1728;
const H = 960;

// 브랜드 컬러
const SUN_YELLOW = "#F5A524";
const SKY_BLUE = "#5AA3DA";
const TEXT_DARK = "#2D2620";
const TEXT_MUTED = "#7B6545";
const BG_CREAM = "#FFF6E6";
const BG_SKY = "#EAF4FB";
const TURTLE_GREEN = "#3A9B6A";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700;900&family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    width: ${W}px;
    height: ${H}px;
    font-family: 'Inter', 'Noto Sans KR', system-ui, sans-serif;
    overflow: hidden;
    position: relative;
    background: linear-gradient(135deg, ${BG_CREAM} 0%, ${BG_SKY} 100%);
  }

  /* Decorative sun (top right) */
  .sun {
    position: absolute;
    top: -100px;
    right: -120px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, ${SUN_YELLOW}, rgba(245,165,36,0.5) 60%, transparent 75%);
    opacity: 0.6;
  }

  /* Decorative waves (bottom) */
  .waves {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 280px;
    overflow: hidden;
    z-index: 1;
  }
  .wave {
    position: absolute;
    left: -10%;
    width: 120%;
    height: 100%;
  }

  /* Subtle dot pattern */
  .dots {
    position: absolute; inset: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(58,155,106,0.06) 1px, transparent 0);
    background-size: 36px 36px;
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    padding: 0 120px;
    gap: 60px;
  }

  /* Left: brand + tagline */
  .brand-block {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(245,165,36,0.14);
    color: ${SUN_YELLOW};
    border: 1.5px solid rgba(245,165,36,0.4);
    padding: 10px 22px;
    border-radius: 999px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.04em;
    width: fit-content;
  }
  .eyebrow::before {
    content: '';
    width: 8px; height: 8px;
    border-radius: 50%;
    background: ${SUN_YELLOW};
  }
  .brand-name {
    font-size: 96px;
    font-weight: 900;
    letter-spacing: -0.045em;
    line-height: 1;
    margin: 0;
  }
  .brand-name .everyday { color: ${SKY_BLUE}; }
  .brand-name .summer { color: ${SUN_YELLOW}; }

  .tagline-en {
    font-size: 38px;
    font-weight: 700;
    color: ${TEXT_DARK};
    letter-spacing: -0.02em;
    line-height: 1.25;
    margin: 0;
    max-width: 640px;
  }
  .tagline-ko {
    font-size: 24px;
    font-weight: 500;
    color: ${TEXT_MUTED};
    letter-spacing: -0.01em;
    line-height: 1.5;
    margin: 0;
    max-width: 600px;
    word-break: keep-all;
  }

  .product-tag {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    margin-top: 12px;
    padding: 18px 28px;
    background: white;
    border: 2px solid rgba(58,155,106,0.2);
    border-radius: 24px;
    box-shadow: 0 8px 24px rgba(45,38,32,0.08);
    width: fit-content;
  }
  .product-icon {
    font-size: 28px;
  }
  .product-text {
    font-size: 22px;
    font-weight: 700;
    color: ${TEXT_DARK};
    letter-spacing: -0.01em;
  }
  .product-text .url {
    color: ${SKY_BLUE};
    font-weight: 600;
    margin-left: 12px;
    font-size: 18px;
  }

  /* Right: turtle showcase */
  .turtle-block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .turtle-wrap {
    position: relative;
    width: 400px;
    height: 400px;
    background: white;
    border-radius: 52px;
    box-shadow:
      0 32px 64px rgba(45,38,32,0.12),
      0 12px 32px rgba(90,159,216,0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 44px;
    border: 3px solid rgba(255,255,255,0.8);
  }
  .turtle-wrap svg {
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 12px 24px rgba(58,155,106,0.18));
  }
  .turtle-badge {
    position: absolute;
    bottom: -28px;
    left: 50%;
    transform: translateX(-50%);
    background: ${TURTLE_GREEN};
    color: white;
    padding: 14px 32px;
    border-radius: 999px;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.01em;
    box-shadow: 0 12px 24px rgba(58,155,106,0.28);
    white-space: nowrap;
  }

  /* Floating mini cards around turtle */
  .mini {
    position: absolute;
    width: 110px; height: 110px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 12px 28px rgba(45,38,32,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 36px;
  }
  .mini-label {
    font-size: 12px;
    font-weight: 700;
    color: ${TEXT_MUTED};
    letter-spacing: -0.01em;
  }
  .mini.m1 { top: 20px; left: 10px; transform: rotate(-5deg); }
  .mini.m2 { top: 40px; right: 30px; transform: rotate(4deg); }
  .mini.m3 { top: 220px; left: -50px; transform: rotate(-3deg); }
  .mini.m4 { top: 200px; right: -40px; transform: rotate(3deg); }
  .mini.m5 { bottom: 130px; left: 30px; transform: rotate(2deg); }
  .mini.m6 { bottom: 100px; right: 0; transform: rotate(-4deg); }
  .mini.m7 { bottom: 30px; left: 50%; transform: translateX(-50%) rotate(0deg); }
</style>
</head>
<body>
  <div class="sun"></div>
  <div class="dots"></div>

  <div class="container">
    <div class="brand-block">
      <span class="eyebrow">EDTECH STUDIO · SEOUL</span>
      <h1 class="brand-name">
        <span class="everyday">Everyday</span><span class="summer">Summer</span>
      </h1>
      <p class="tagline-en">
        Learning tools for everyone,<br/>
        at every pace.
      </p>
      <div class="product-tag">
        <span class="product-icon">🐢</span>
        <span class="product-text">LittleSteps Series<span class="url">slowkids.net</span></span>
      </div>
    </div>

    <div class="turtle-block">
      <div class="mini m1">
        <span>🌈</span>
        <span class="mini-label">Colors</span>
      </div>
      <div class="mini m2">
        <span>🧩</span>
        <span class="mini-label">Pattern</span>
      </div>
      <div class="mini m3">
        <span>🔢</span>
        <span class="mini-label">Numbers</span>
      </div>
      <div class="mini m4">
        <span>🕐</span>
        <span class="mini-label">Clock</span>
      </div>
      <div class="mini m5">
        <span>➕</span>
        <span class="mini-label">Addition</span>
      </div>
      <div class="mini m6">
        <span>➖</span>
        <span class="mini-label">Subtract</span>
      </div>
      <div class="mini m7">
        <span>✖️</span>
        <span class="mini-label">Times</span>
      </div>
      <div class="turtle-wrap">
        ${turtleSvg}
        <div class="turtle-badge">Math · Cognition · One step at a time</div>
      </div>
    </div>
  </div>

  <svg class="waves" viewBox="0 0 1728 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,180 C300,120 600,220 900,160 C1200,100 1450,200 1728,140 L1728,280 L0,280 Z" fill="${SKY_BLUE}" opacity="0.16"/>
    <path d="M0,220 C300,170 700,250 1100,200 C1400,160 1600,230 1728,200 L1728,280 L0,280 Z" fill="${SKY_BLUE}" opacity="0.22"/>
  </svg>
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

  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  });
  await new Promise((r) => setTimeout(r, 600));

  const out = join(OUT_DIR, "aws-showcase-cover-1728x960.png");
  await page.screenshot({
    path: out,
    type: "png",
    clip: { x: 0, y: 0, width: W, height: H },
  });
  console.log("wrote", out, `${W}x${H}`);
} finally {
  await browser.close();
}
