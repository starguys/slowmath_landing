/**
 * Post-build: output: "export" + App Router는 단일 root layout만 가능하므로
 * 정적 빌드된 /en/*.html · /jp/*.html 파일들의 <html lang="ko">를 각 언어로 패치.
 *
 * Google이 EN·JA 페이지 SSR HTML의 lang 속성을 en/ja로 인식하도록 보장.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "out");

// 로케일별 페이지가 떨어지는 경로 두 가지:
//  - out/<prefix>.html        (/<prefix> 메인 페이지, trailingSlash:false 기본값)
//  - out/<prefix>/**/*.html   (/<prefix>/privacy 등 하위 라우트)
const LOCALES = [
  { prefix: "en", lang: "en" },
  { prefix: "jp", lang: "ja" },
];

async function* walk(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === "ENOENT") return;
    throw err;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      yield full;
    }
  }
}

async function* filesFor(prefix) {
  const single = path.join(OUT_DIR, `${prefix}.html`);
  try {
    await fs.access(single);
    yield single;
  } catch {}
  yield* walk(path.join(OUT_DIR, prefix));
}

async function main() {
  for (const { prefix, lang } of LOCALES) {
    let patched = 0;
    for await (const file of filesFor(prefix)) {
      const before = await fs.readFile(file, "utf8");
      const after = before.replace(
        /<html([^>]*?)\slang="ko"/i,
        `<html$1 lang="${lang}"`,
      );
      if (after !== before) {
        await fs.writeFile(file, after, "utf8");
        patched++;
        console.log(`  lang=${lang} patched: ${path.relative(OUT_DIR, file)}`);
      }
    }
    console.log(`[postbuild-set-lang] ${patched} ${prefix.toUpperCase()} file(s) updated`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
