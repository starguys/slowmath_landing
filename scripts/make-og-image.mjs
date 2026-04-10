import puppeteer from "puppeteer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public/og-image.png");

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

const page = await browser.newPage();
// OG standard size
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

await page.goto("http://localhost:4444", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise((r) => setTimeout(r, 2000));

// Capture just the hero section (top of page)
await page.screenshot({
  path: OUT,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log("OG image saved:", OUT);
