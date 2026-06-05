import puppeteer from "puppeteer";
import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SVG_PATH = "C:\\Users\\ohong\\Desktop\\slowkids-fb-cover.svg";
const OUT_PATH = "C:\\Users\\ohong\\Desktop\\slowkids-fb-cover.png";

const svgContent = readFileSync(SVG_PATH, "utf-8");

const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700;800;900&display=swap" rel="stylesheet">
<style>
  html, body { margin: 0; padding: 0; }
  body { font-family: 'Noto Sans KR', sans-serif; }
  svg { display: block; }
</style>
</head>
<body>
${svgContent}
</body>
</html>`;

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 1640, height: 624, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 1200)); // give fonts time to render
await page.screenshot({ path: OUT_PATH, type: "png", omitBackground: false });
await browser.close();

console.log("Saved:", OUT_PATH);
