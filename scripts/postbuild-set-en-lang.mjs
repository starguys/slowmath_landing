/**
 * Post-build: output: "export" + App Router는 단일 root layout만 가능하므로
 * 정적 빌드된 /en/*.html 파일들의 <html lang="ko">를 <html lang="en">으로 패치.
 *
 * Google이 EN 페이지 SSR HTML의 lang 속성을 en으로 인식하도록 보장.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "out");

// EN 페이지가 떨어지는 경로 두 곳:
//  - out/en.html        (/en 메인 페이지, trailingSlash:false 기본값)
//  - out/en/**/*.html   (/en/privacy, /en/terms 등 하위 라우트)
const EN_TARGETS = [
  { kind: "file", path: path.join(OUT_DIR, "en.html") },
  { kind: "dir", path: path.join(OUT_DIR, "en") },
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

async function* enFiles() {
  for (const t of EN_TARGETS) {
    if (t.kind === "file") {
      try {
        await fs.access(t.path);
        yield t.path;
      } catch {}
    } else {
      yield* walk(t.path);
    }
  }
}

async function main() {
  let patched = 0;
  for await (const file of enFiles()) {
    const before = await fs.readFile(file, "utf8");
    const after = before.replace(
      /<html([^>]*?)\slang="ko"/i,
      '<html$1 lang="en"',
    );
    if (after !== before) {
      await fs.writeFile(file, after, "utf8");
      patched++;
      console.log(`  lang=en patched: ${path.relative(OUT_DIR, file)}`);
    }
  }
  console.log(`[postbuild-set-en-lang] ${patched} EN file(s) updated`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
