import puppeteer from "puppeteer";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(__dirname, "../app/icon.svg"), "utf-8");

const render = async (size, outPath) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  const html = `<!doctype html><html><head><style>
    html,body{margin:0;padding:0;background:transparent;}
    svg{width:${size}px;height:${size}px;display:block;}
  </style></head><body>${svg}</body></html>`;
  await page.setContent(html, { waitUntil: "networkidle0" });
  const el = await page.$("svg");
  await el.screenshot({ path: outPath, omitBackground: true, type: "png" });
  await browser.close();
  console.log("wrote", outPath, `${size}x${size}`);
};

await render(256, join(__dirname, "../app/icon.png"));
await render(180, join(__dirname, "../app/apple-icon.png"));
