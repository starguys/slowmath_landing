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
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

await page.goto("http://localhost:4444", { waitUntil: "networkidle2", timeout: 20000 });
await new Promise((r) => setTimeout(r, 2000));

// Show only turtle + brand + slogan in the hero
await page.evaluate(() => {
  const header = document.querySelector("header#hero");
  if (!header) return;

  // Hide everything except the header (language toggle before, all sections after)
  let sib = header.previousElementSibling;
  while (sib) { sib.style.display = "none"; sib = sib.previousElementSibling; }
  sib = header.nextElementSibling;
  while (sib) { sib.style.display = "none"; sib = sib.nextElementSibling; }

  // In the hero, keep only the brand logo group and the slogan h1.
  // Drop description paragraph, store badges (a tags), and the "지금 무료로 체험하기" CTA row.
  header.querySelectorAll("p:not(.font-black), a").forEach((el) => {
    el.style.display = "none";
  });
  // CTA row = the flex column that wraps StoreBadges + the pill span
  header.querySelectorAll("div.flex.flex-col.items-center.gap-4").forEach((el) => {
    el.style.display = "none";
  });

  // Enlarge the turtle SVG so it reads at OG scale
  const logoSvg = header.querySelector("svg");
  if (logoSvg) {
    logoSvg.setAttribute("width", "120");
    logoSvg.setAttribute("height", "100");
  }

  // Expand header to fill viewport height with gradient
  header.style.minHeight = "630px";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "center";
  header.style.paddingBottom = "0";
  header.style.paddingTop = "0";
});

await new Promise((r) => setTimeout(r, 300));

await page.screenshot({
  path: OUT,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log("OG image saved:", OUT);
