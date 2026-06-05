// App Store 제출용 스크린샷 자동 캡처
//
// 사전 조건:
//   - slowmath_all 디렉토리에서 `python -m http.server 8123` 실행 중이어야 함
//
// 출력:
//   slowmath_landing/app-store-assets/<device>/<NN>-<name>.png
//
// 사용법:
//   node scripts/take-app-store-screenshots.mjs
//   node scripts/take-app-store-screenshots.mjs --device=iphone-6.5
//   node scripts/take-app-store-screenshots.mjs --shot=01-main

import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "app-store-assets");

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  })
);

const DEVICES = [
  // viewport는 logical 사이즈, deviceScaleFactor 곱하면 실제 픽셀
  { id: "iphone-6.5", w: 414, h: 896, dsf: 3, label: "iPhone 6.5\" (1242×2688)" },
  { id: "iphone-6.7", w: 428, h: 926, dsf: 3, label: "iPhone 6.7\" (1284×2778)" },
  { id: "ipad-12.9",  w: 1024, h: 1366, dsf: 2, label: "iPad 12.9\" (2048×2732)" },
];

const BASE = "http://localhost:8123";

// localStorage 사전 주입: 로그인 상태 + 학습 기록 더미
const PRESEED = `
(function(){
  try {
    // 통합 쉘 로그인 상태
    localStorage.setItem('sm.shell.user', JSON.stringify({
      email: 'demo@slowkids.net',
      name: '느린아이',
      provider: 'kakao',
      loginAt: Date.now()
    }));
    // 모든 서브앱 로그인 키 주입 (iframe에서 즉시 인식)
    var APP_IDS = ['color','linedraw','dot2dot','colorcopy','pattern','number','numberdraw','dice','counting','matching','comparing','comparing2','clock','combining','splitting','complement','plusone','plustwo','plusthree','easy','circle','verticaladd','minusone','minustwo','minusthree','verticalsub','timestables'];
    var OVERRIDES = { colorcopy: 'colorcopy_login', matching: 'slowmath_login', timestables: 'slowmath_times_login' };
    var info = JSON.stringify({ provider: 'kakao', time: Date.now() });
    APP_IDS.forEach(function(id){
      var k = OVERRIDES[id] || ('slowmath_' + id + '_login');
      localStorage.setItem(k, info);
    });
    // 학습 기록 더미 — 키 포맷: sm_visits_slowmath_<id>
    // 기록 탭 그래프가 비어보이지 않도록 이번 달 데이터 주입
    var now = new Date();
    var y = now.getFullYear(), m = String(now.getMonth()+1).padStart(2,'0');
    function visit(d, total, correct) {
      var ds = y+'-'+m+'-'+String(d).padStart(2,'0');
      return {
        date: ds,
        sessions: [{ total: total, correct: correct, mode: 'select', t: new Date(ds + 'T10:00:00').getTime() }],
        totalProblems: total,
        totalCorrect: correct
      };
    }
    var sampleVisits = [
      visit(3, 12, 10), visit(4, 18, 16), visit(5, 8, 7),
      visit(8, 22, 20), visit(11, 15, 14), visit(13, 25, 24),
      visit(15, 30, 28), visit(18, 18, 18), visit(20, 12, 11),
      visit(Math.max(1, now.getDate() - 1), 20, 19)
    ];
    // 주요 앱 5개에 기록 주입 (모든 앱에 같은 데이터 넣어도 무방)
    ['easy','circle','complement','minusone','timestables'].forEach(function(id){
      localStorage.setItem('sm_visits_slowmath_' + id, JSON.stringify(sampleVisits));
    });
    // 이용권 더미 — 활성 1장 + 지난 1장
    localStorage.setItem('sm.shell.tickets', JSON.stringify([
      { id: 't1', appId: 'easy', name: '한 자리 덧셈 30일 이용권', startedAt: Date.now() - 5*86400000, expiresAt: Date.now() + 25*86400000, source: 'paid' }
    ]));
  } catch (e) { console.error(e); }
})();
`;

// 각 샷의 정의 — async (page) => void
// page는 이미 BASE로 이동된 상태, localStorage preseeded
const SHOTS = [
  {
    id: "01-main",
    name: "메인 — 시리즈 탭 카테고리",
    run: async (page) => {
      await page.goto(BASE + "/?v=64", { waitUntil: "networkidle2" });
      await page.evaluate((seed) => { eval(seed); }, PRESEED);
      await page.reload({ waitUntil: "networkidle2" });
      // 시리즈 탭은 기본 active. 스플래시 사라질 때까지 대기.
      await new Promise(r => setTimeout(r, 3500));
    }
  },
  {
    id: "02-color",
    name: "색깔 익히기 — 기초 인지",
    appId: "color",
    waitMs: 4500
  },
  {
    id: "03-number",
    name: "숫자 익히기 — 수 개념",
    appId: "number",
    waitMs: 4500
  },
  {
    id: "04-dice",
    name: "세기 — 손가락",
    appId: "dice",
    waitMs: 4500
  },
  {
    id: "05-clock",
    name: "시계 보기 — 수 관계",
    appId: "clock",
    waitMs: 4500
  },
  {
    id: "06-combining",
    name: "모으기 연습 — 덧셈 전 개념",
    appId: "combining",
    waitMs: 4500
  },
  {
    id: "07-circle",
    name: "한 자리 덧셈 연습 — 덧셈",
    appId: "circle",
    waitMs: 4500
  },
  {
    id: "08-minusone",
    name: "빼기 1 — 뺄셈",
    appId: "minusone",
    waitMs: 4500
  },
  {
    id: "09-timestables",
    name: "구구단 연습 — 곱셈",
    appId: "timestables",
    waitMs: 4500
  },
  {
    id: "10-records",
    name: "기록 탭 — 학습 추이 그래프",
    run: async (page) => {
      await page.goto(BASE + "/?v=64", { waitUntil: "networkidle2" });
      await page.evaluate((seed) => { eval(seed); }, PRESEED);
      await page.reload({ waitUntil: "networkidle2" });
      await new Promise(r => setTimeout(r, 3500));
      // 기록 탭으로 이동
      await page.click('.sm-tabbar .tab[data-tab="records"]');
      await new Promise(r => setTimeout(r, 800));
      // 'easy' 카드 (한 자리 덧셈) — preseed에서 기록 데이터를 넣어둔 앱
      const easyCard = await page.$('[data-tab="records"] .rp-card[data-app="easy"]');
      if (easyCard) {
        await easyCard.scrollIntoView();
        await easyCard.click();
        // 차트 렌더 대기
        await page.waitForFunction(() => {
          return document.querySelector('[data-tab="records"] svg rect') !== null;
        }, { timeout: 3000 }).catch(() => {});
      }
      await new Promise(r => setTimeout(r, 1200));
    }
  },
];

// 공통: 시리즈 탭에서 특정 앱을 클릭해 iframe으로 진입
async function openApp(page, appId) {
  await page.goto(BASE + "/?v=64", { waitUntil: "networkidle2" });
  await page.evaluate((seed) => { eval(seed); }, PRESEED);
  await page.reload({ waitUntil: "networkidle2" });
  // 스플래시(2.4s)가 사라질 때까지 대기
  await new Promise(r => setTimeout(r, 3000));

  // selectApp 함수가 노출되어 있으면 직접 호출, 아니면 카드 클릭
  const ok = await page.evaluate((id) => {
    // shell이 export한 API가 있으면 우선 사용
    if (window.SM_SHELL && typeof window.SM_SHELL.selectApp === 'function') {
      window.SM_SHELL.selectApp(id);
      return 'api';
    }
    // fallback: 시리즈 탭의 카드 click 이벤트 디스패치
    const el = document.querySelector(`.sm-si[data-app="${id}"]`);
    if (!el) return false;
    el.scrollIntoView({ block: 'center' });
    el.click();
    return 'click';
  }, appId);
  if (!ok) throw new Error(`앱 진입 실패: ${appId}`);

  // 홈 탭으로 전환되고 iframe이 로드될 때까지 대기
  try {
    await page.waitForFunction(() => {
      const homePanel = document.querySelector('.sm-panel[data-tab="home"]');
      const iframe = document.querySelector('#home-iframe-wrap iframe');
      return homePanel && homePanel.classList.contains('active') && iframe;
    }, { timeout: 8000 });
  } catch (e) {
    // 진단 정보를 콘솔에 남기기
    const diag = await page.evaluate(() => ({
      activeTab: Array.from(document.querySelectorAll('.sm-panel')).find(p => p.classList.contains('active'))?.getAttribute('data-tab'),
      hasIframe: !!document.querySelector('#home-iframe-wrap iframe'),
      iframeSrc: document.querySelector('#home-iframe-wrap iframe')?.src,
    }));
    console.log('    diag:', JSON.stringify(diag));
  }
}

async function captureForDevice(browser, device) {
  const outDir = join(ROOT, device.id);
  mkdirSync(outDir, { recursive: true });

  for (const shot of SHOTS) {
    if (args.shot && args.shot !== shot.id) continue;
    const page = await browser.newPage();
    await page.setViewport({ width: device.w, height: device.h, deviceScaleFactor: device.dsf });

    try {
      console.log(`  [${device.id}] ${shot.id} ${shot.name}`);
      if (shot.run) {
        await shot.run(page);
      } else if (shot.appId) {
        await openApp(page, shot.appId);
        await new Promise(r => setTimeout(r, shot.waitMs || 3500));
      }
      await page.screenshot({ path: join(outDir, shot.id + ".png"), fullPage: false });
      console.log(`    ✓ ${shot.id}.png`);
    } catch (e) {
      console.error(`    ✗ ${shot.id}: ${e.message}`);
    }
    await page.close();
  }
}

(async () => {
  // 서버 살아있는지 확인
  try {
    const r = await fetch(BASE);
    if (!r.ok) throw new Error(`status ${r.status}`);
  } catch (e) {
    console.error(`✗ ${BASE} 접근 실패. slowmath_all 디렉토리에서 \`python -m http.server 8123\`을 실행하세요.`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const wantedDevice = args.device;
  const devices = wantedDevice ? DEVICES.filter(d => d.id === wantedDevice) : DEVICES;
  if (devices.length === 0) {
    console.error("디바이스 매칭 실패. 사용 가능: " + DEVICES.map(d => d.id).join(", "));
    await browser.close();
    process.exit(1);
  }

  for (const device of devices) {
    console.log(`\n━━ ${device.label} ━━`);
    await captureForDevice(browser, device);
  }

  await browser.close();
  console.log(`\n완료. 출력 위치: ${ROOT}`);
})();
