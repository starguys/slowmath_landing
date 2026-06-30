import type { Metadata } from "next";
import LazyVideo from "../LazyVideo";
import StoreBadges from "../StoreBadges";
import StickyDownloadBar from "../StickyDownloadBar";
import SetHtmlLang from "./SetHtmlLang";

const SITE_URL = "https://slowkids.net";
const SITE_URL_EN = `${SITE_URL}/en`;

export const metadata: Metadata = {
  title: "SlowKids — Math at every child's pace",
  description:
    "Learning tools for children with developmental delays, developmental disabilities, slow learning, or borderline intelligence — to build math foundations at their own pace. Now on iOS and Android.",
  alternates: {
    canonical: SITE_URL_EN,
    languages: {
      ko: SITE_URL + "/",
      en: SITE_URL_EN,
      "x-default": SITE_URL + "/",
    },
  },
  openGraph: {
    title: "SlowKids — Math at every child's pace",
    description:
      "Small math practices for children who pick up concepts more slowly than peers — from earliest cognition through multiplication tables. Now on iOS and Android.",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    type: "website",
    url: SITE_URL_EN,
  },
  twitter: {
    card: "summary_large_image",
    title: "SlowKids — Math at every child's pace",
    description:
      "Small math practices for children who learn slowly. Available on iOS and Android.",
  },
  itunes: {
    appId: "6763979294",
  },
};

// ─── SVG Icon Components ───────────────────────────────────────────────────

function IconNumbers({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="3" y="8" width="7" height="9" rx="2" fill={color} opacity=".2" />
      <text x="6.5" y="16" fontSize="7" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">1</text>
      <rect x="11" y="5" width="7" height="12" rx="2" fill={color} opacity=".35" />
      <text x="14.5" y="14" fontSize="7" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">2</text>
      <rect x="19" y="3" width="7" height="15" rx="2" fill={color} opacity=".55" />
      <text x="22.5" y="13" fontSize="7" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
      <line x1="3" y1="22" x2="26" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDots({ color }: { color: string }) {
  const pos = [5, 14, 23];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {pos.map((x, i) => (
        <circle key={i} cx={x} cy="14" r="4" fill={color} opacity={0.3 + i * 0.25} />
      ))}
    </svg>
  );
}

function IconMatch({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="2" y="5" width="10" height="18" rx="3" stroke={color} strokeWidth="1.8" fill={color} fillOpacity=".1" />
      <text x="7" y="17" fontSize="9" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
      <line x1="14" y1="14" x2="18" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <circle cx="22" cy="11" r="2.5" fill={color} opacity=".7" />
      <circle cx="22" cy="17" r="2.5" fill={color} opacity=".5" />
      <circle cx="26" cy="14" r="2.5" fill={color} opacity=".3" />
    </svg>
  );
}

function IconPlus({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* 2 */}
      <rect x="1" y="9" width="10" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="6" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">2</text>
      {/* + */}
      <line x1="13" y1="14.5" x2="16" y2="14.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="14.5" y1="13" x2="14.5" y2="16" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      {/* 3 */}
      <rect x="17" y="9" width="10" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="22" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
    </svg>
  );
}

function IconArrowRight({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="8" cy="14" r="5" fill={color} fillOpacity=".2" />
      <line x1="13" y1="14" x2="22" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polyline points="18,10 22,14 18,18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="8" y="17.5" fontSize="8" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">+1</text>
    </svg>
  );
}

function IconTen({ color, n }: { color: string; n: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="2" y="7" width="24" height="14" rx="3" fill={color} fillOpacity=".12" stroke={color} strokeWidth="1.5" />
      <text x="14" y="18" fontSize="10" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">{n}</text>
    </svg>
  );
}

function IconMerge({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="7" cy="10" r="4" fill={color} opacity=".4" />
      <circle cx="7" cy="18" r="4" fill={color} opacity=".6" />
      <path d="M11 10 L18 14 M11 18 L18 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22" cy="14" r="5" fill={color} opacity=".8" />
    </svg>
  );
}

function IconSplit({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="6" cy="14" r="5" fill={color} opacity=".7" />
      <path d="M11 14 L17 10 M11 14 L17 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="21" cy="10" r="3.5" fill={color} opacity=".4" />
      <circle cx="21" cy="18" r="3.5" fill={color} opacity=".25" />
    </svg>
  );
}

function IconScale({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <line x1="14" y1="4" x2="14" y2="24" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="5" y1="8" x2="23" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="13" width="8" height="7" rx="2" fill={color} fillOpacity=".25" stroke={color} strokeWidth="1.5" />
      <rect x="17" y="16" width="8" height="4" rx="2" fill={color} fillOpacity=".45" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function IconLocation({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="8" y="8" width="12" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="2.5" fill={color} opacity=".6" />
      <line x1="14" y1="3" x2="14" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="22" x2="14" y2="25" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="14" x2="6" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="14" x2="25" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconCompare({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="5" y="7" width="6" height="15" rx="1.2" fill={color} fillOpacity=".25" stroke={color} strokeWidth="1.5" />
      <rect x="17" y="13" width="6" height="9" rx="1.2" fill={color} fillOpacity=".5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function IconPattern({ color }: { color: string }) {
  const shapes = [
    { x: 5, y: 9, type: "circle" },
    { x: 14, y: 9, type: "rect" },
    { x: 23, y: 9, type: "circle" },
    { x: 5, y: 19, type: "rect" },
    { x: 14, y: 19, type: "?" },
    { x: 23, y: 19, type: "rect" },
  ];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {shapes.map((s, i) =>
        s.type === "circle" ? (
          <circle key={i} cx={s.x} cy={s.y} r="3.5" fill={color} opacity={i === 4 ? 0 : 0.5} stroke={color} strokeWidth={i === 4 ? 1.2 : 0} strokeDasharray={i === 4 ? "2 1.5" : ""} />
        ) : s.type === "?" ? (
          <g key={i}>
            <rect x={s.x - 4} y={s.y - 4} width="8" height="8" rx="1.5" fill="none" stroke={color} strokeWidth="1.2" strokeDasharray="2 1.5" />
            <text x={s.x} y={s.y + 3} fontSize="6" fontWeight="700" fill={color} textAnchor="middle" fontFamily="sans-serif">?</text>
          </g>
        ) : (
          <rect key={i} x={s.x - 3.5} y={s.y - 3.5} width="7" height="7" rx="1.5" fill={color} opacity="0.5" />
        )
      )}
    </svg>
  );
}

function IconSameShape({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <polygon points="8,4 14,10 8,16 2,10" fill={color} opacity="0.7" />
      <polygon points="20,12 26,18 20,24 14,18" fill={color} opacity="0.7" />
      <line x1="11" y1="13" x2="17" y2="15" stroke={color} strokeWidth="1.2" strokeDasharray="2 1.5" opacity="0.55" />
    </svg>
  );
}

function IconPalette({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="9" cy="10" r="4.5" fill="#E8924A" opacity=".8" />
      <circle cx="19" cy="10" r="4.5" fill={color} opacity=".7" />
      <circle cx="14" cy="19" r="4.5" fill="#4DB87A" opacity=".7" />
      <circle cx="14" cy="14" r="3" fill="white" opacity=".9" />
    </svg>
  );
}

function IconGrid({ color }: { color: string }) {
  const cells = [
    { x: 3, y: 3, fill: color, op: 0.7 },
    { x: 13, y: 3, fill: "#E8924A", op: 0.7 },
    { x: 3, y: 13, fill: "#4DB87A", op: 0.7 },
    { x: 13, y: 13, fill: color, op: 0.35 },
  ];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="9" height="9" rx="2" fill={c.fill} opacity={c.op} />
      ))}
      <line x1="14" y1="0" x2="14" y2="28" stroke="white" strokeWidth="1.5" />
      <line x1="0" y1="14" x2="28" y2="14" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function IconPencil({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M6 22 L8 15 L20 4 C21.5 2.5 23.5 2.5 24 4.5 C25 7 23 8 21.5 9.5 L10 21 Z" fill={color} fillOpacity=".2" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="18" y1="5.5" x2="22.5" y2="10" stroke={color} strokeWidth="1.5" />
      <line x1="6" y1="22" x2="9" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDotLine({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="5" cy="5" r="2.5" fill={color} opacity=".4" />
      <circle cx="14" cy="5" r="2.5" fill={color} opacity=".5" />
      <circle cx="23" cy="5" r="2.5" fill={color} opacity=".6" />
      <circle cx="23" cy="14" r="2.5" fill={color} opacity=".7" />
      <circle cx="14" cy="23" r="2.5" fill={color} opacity=".8" />
      <circle cx="5" cy="23" r="2.5" fill={color} opacity=".9" />
      <polyline points="5,5 14,5 23,5 23,14 14,23 5,23" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="3 2" />
    </svg>
  );
}

function IconWrite({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* digit 5 */}
      <text x="7" y="21" fontSize="18" fontWeight="900" fill={color} fillOpacity=".2" fontFamily="sans-serif">5</text>
      {/* pen tip */}
      <path d="M18 5 L23 10 L13 20 L9 21 L10 17 Z" fill={color} fillOpacity=".25" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
      <line x1="16" y1="7" x2="21" y2="12" stroke={color} strokeWidth="1" opacity=".5"/>
      <path d="M9 21 L10 17" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconClock({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="11" stroke={color} strokeWidth="1.8" fill={color} fillOpacity=".08" />
      <line x1="14" y1="14" x2="14" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="14" x2="19" y2="17" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="14" cy="14" r="1.5" fill={color} />
    </svg>
  );
}

function IconCalendar({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="4" y="6" width="20" height="18" rx="2.5" stroke={color} strokeWidth="1.8" fill={color} fillOpacity=".08" />
      <line x1="4" y1="11" x2="24" y2="11" stroke={color} strokeWidth="1.6" />
      <line x1="9" y1="3.5" x2="9" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19" y1="3.5" x2="19" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="14" cy="17.5" r="3.2" stroke={color} strokeWidth="1.6" fill="none" />
    </svg>
  );
}

function IconCoins({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <ellipse cx="11" cy="11" rx="7" ry="7" stroke={color} strokeWidth="1.8" fill={color} fillOpacity=".08" />
      <text x="11" y="14" textAnchor="middle" fontSize="7" fontWeight="700" fill={color}>₩</text>
      <ellipse cx="18" cy="18" rx="7" ry="7" stroke={color} strokeWidth="1.8" fill={color} fillOpacity=".18" />
      <text x="18" y="21" textAnchor="middle" fontSize="7" fontWeight="700" fill={color}>₩</text>
    </svg>
  );
}

function IconMoneyCalc({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* price tag */}
      <path d="M5 4 L13 4 L23 14 L14 23 L5 14 Z" fill={color} fillOpacity=".18" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="9" cy="8" r="1.6" fill="none" stroke={color} strokeWidth="1.2"/>
      {/* coin (bottom-right) */}
      <circle cx="20" cy="20" r="5" fill={color} fillOpacity=".5" stroke={color} strokeWidth="1.3"/>
      <text x="20" y="23" textAnchor="middle" fontSize="6" fontWeight="800" fill="#fff">₩</text>
    </svg>
  );
}

function IconBorrow({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <text x="20" y="12" textAnchor="end" fontSize="8" fontWeight="800" fill={color}>13</text>
      <text x="6" y="22" fontSize="8" fontWeight="800" fill={color}>−</text>
      <text x="20" y="22" textAnchor="end" fontSize="8" fontWeight="800" fill={color}>7</text>
      <line x1="5" y1="24" x2="22" y2="24" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconMultiply({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* 3 */}
      <rect x="1" y="9" width="9" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="5.5" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
      {/* × */}
      <line x1="12.5" y1="12.5" x2="15.5" y2="15.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="15.5" y1="12.5" x2="12.5" y2="15.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      {/* 4 */}
      <rect x="18" y="9" width="9" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="22.5" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">4</text>
    </svg>
  );
}

// Value prop icons
function IconHourglass() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M10 6 H26 L18 18 L26 30 H10 L18 18 Z" fill="#5A9FD8" fillOpacity=".15" stroke="#5A9FD8" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M11 7 L25 7 L18 16 Z" fill="#5A9FD8" fillOpacity=".5" />
      <ellipse cx="18" cy="25" rx="4" ry="3" fill="#5A9FD8" fillOpacity=".4" />
    </svg>
  );
}

function IconSpeaker() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="6" y="13" width="8" height="10" rx="2" fill="#4DB87A" fillOpacity=".3" stroke="#4DB87A" strokeWidth="1.8" />
      <path d="M14 13 L22 8 L22 28 L14 23 Z" fill="#4DB87A" fillOpacity=".5" stroke="#4DB87A" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M25 12 C27.5 14.5 27.5 21.5 25 24" stroke="#4DB87A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M28 9 C32 13 32 23 28 27" stroke="#4DB87A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".5" />
    </svg>
  );
}

function IconGap({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="4" y="22" width="6" height="8" rx="1.5" fill={color} fillOpacity=".55" />
      <rect x="12" y="18" width="6" height="12" rx="1.5" fill={color} fillOpacity=".75" />
      <rect x="20" y="14" width="6" height="16" rx="1.5" fill="none" stroke={color} strokeWidth="1.6" strokeDasharray="2 1.5" />
      <text x="23" y="26" textAnchor="middle" fontSize="9" fontWeight="900" fill={color}>?</text>
      <rect x="28" y="10" width="6" height="20" rx="1.5" fill={color} />
    </svg>
  );
}

function IconStairs() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M5 28 H12 V22 H19 V16 H26 V10 H32" stroke="#E8924A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="8.5" cy="28" r="2.5" fill="#E8924A" fillOpacity=".4" />
      <circle cx="15.5" cy="22" r="2.5" fill="#E8924A" fillOpacity=".55" />
      <circle cx="22.5" cy="16" r="2.5" fill="#E8924A" fillOpacity=".7" />
      <circle cx="29" cy="10" r="2.5" fill="#E8924A" fillOpacity=".9" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M8 18 C8 12 12 8 18 8 L24 8" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" fill="none" />
      <polyline points="20,5 24,8 20,11" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M28 18 C28 24 24 28 18 28 L12 28" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" fill="none" />
      <polyline points="16,31 12,28 16,25" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconGentle() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M26 9 A 12 12 0 1 0 26 27 A 10 10 0 0 1 26 9 Z" fill="#D96060" fillOpacity=".2" stroke="#D96060" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="11" cy="10" r="1.4" fill="#D96060" opacity=".7"/>
      <circle cx="8" cy="20" r="1" fill="#D96060" opacity=".5"/>
      <circle cx="30" cy="23" r="1" fill="#D96060" opacity=".5"/>
    </svg>
  );
}

function IconFocus() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <circle cx="18" cy="18" r="13" stroke="#D9A84A" strokeWidth="1.5" fill="#D9A84A" fillOpacity=".08" strokeDasharray="3 2.5" opacity=".7"/>
      <circle cx="18" cy="18" r="8" stroke="#D9A84A" strokeWidth="1.8" fill="#D9A84A" fillOpacity=".22"/>
      <circle cx="18" cy="18" r="3" fill="#D9A84A"/>
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────

const BASE = "";
const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const appEmoji: Record<string, string> = {
  slowmath_color: "🌈",
  slowmath_linedraw: "✏️",
  slowmath_dot2dot: "···",
  slowmath_colorcopy: "🪞",
  slowmath_pattern: "🧩",
  slowmath_gap: "🪜",
  slowmath_sameshape: "🔷",
  slowmath_number: "🔢",
  slowmath_numberdraw: "5️⃣",
  slowmath_dice: "🎲",
  slowmath_counting: "🧮",
  slowmath_matching: "🎯",
  slowmath_money: "🪙",
  slowmath_comparing: "⚖️",
  slowmath_comparing2: "⚖️",
  slowmath_compare: "📏",
  slowmath_clock: "🕐",
  slowmath_calendar: "📅",
  slowmath_oddeven: "🍒",
  slowmath_combining: "🫱",
  slowmath_splitting: "✂️",
  slowmath_complement: "🔟",
  slowmath_plusone: "1️⃣",
  slowmath_plustwo: "2️⃣",
  slowmath_plusthree: "3️⃣",
  slowmath_easy: "➕",
  slowmath_circle: "➕",
  slowmath_carry: "🆙",
  slowmath_verticaladd: "🧮",
  slowmath_moneycalc: "💰",
  slowmath_minusone: "1️⃣",
  slowmath_minustwo: "2️⃣",
  slowmath_minusthree: "3️⃣",
  slowmath_easysub: "➖",
  slowmath_subtract: "➖",
  slowmath_borrow: "⬇️",
  slowmath_verticalsub: "🧮",
  slowmath_changecalc: "🧾",
  slowmath_timestables: "✖️",
};

type Category = {
  id: string;
  label: string;
  subtitle: string;
  Icon: React.ComponentType<{ color: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
};

type App = {
  slug: string;
  name: string;
  korName: string;
  Icon: React.ComponentType<{ color: string }>;
  category: string;
  shortDesc: string;
  value: string;
  tags: string[];
  childEffect: string;
  duration: string;
};

const categories: Category[] = [
  {
    id: "basic",
    label: "Foundations",
    subtitle: "Where eyes and hands get familiar first",
    Icon: IconPencil,
    color: "#8B72C8",
    bgColor: "#EDE8F8",
    borderColor: "#BBA8E8",
  },
  {
    id: "number",
    label: "Number Sense",
    subtitle: "When numbers start to look like 'amounts'",
    Icon: IconNumbers,
    color: "#5A9FD8",
    bgColor: "#EBF4FC",
    borderColor: "#B8D8F0",
  },
  {
    id: "relation",
    label: "Number Relations",
    subtitle: "Reading bigger, smaller, same, and different",
    Icon: IconScale,
    color: "#D9A84A",
    bgColor: "#F8EFD0",
    borderColor: "#E8D098",
  },
  {
    id: "preadd",
    label: "Pre-Addition",
    subtitle: "Combining and splitting — feeling numbers",
    Icon: IconMerge,
    color: "#4DB87A",
    bgColor: "#E6F6EE",
    borderColor: "#90D8B0",
  },
  {
    id: "add",
    label: "Addition",
    subtitle: "Calculation, built from small steps",
    Icon: IconPlus,
    color: "#E8924A",
    bgColor: "#FDF0E3",
    borderColor: "#F0C898",
  },
  {
    id: "sub",
    label: "Subtraction",
    subtitle: "Calculation, one step removed at a time",
    Icon: IconSplit,
    color: "#E87080",
    bgColor: "#FBE0E5",
    borderColor: "#F0B8C0",
  },
  {
    id: "mul",
    label: "Multiplication",
    subtitle: "The number rules behind the concept",
    Icon: IconMultiply,
    color: "#D96060",
    bgColor: "#FAE8E8",
    borderColor: "#E8A8A8",
  },
];

const apps: App[] = [
  // ── Foundations ──
  {
    slug: "slowmath_color",
    name: "Color",
    korName: "Color recognition",
    Icon: IconPalette,
    category: "basic",
    shortDesc: "See, hear, and pick color names — building color awareness step by step",
    value:
      "Color names can be hard for children with developmental delays or disabilities. From simple recognition to sequence memory, this builds color vocabulary one stage at a time.",
    tags: ["Color recognition", "Color names", "Sequence memory", "Color discrimination"],
    childEffect: "Color names come naturally",
    duration: "3 min",
  },
  {
    slug: "slowmath_linedraw",
    name: "Line Draw",
    korName: "Line drawing",
    Icon: IconPencil,
    category: "basic",
    shortDesc: "Trace straight lines, curves, and spirals to steady the hand",
    value:
      "Trains the hand-control foundation that writing and drawing rely on. Three difficulty levels and voice guidance help a child keep practicing without giving up.",
    tags: ["Straight & curved", "Spiral patterns", "Fine motor", "Writing prep"],
    childEffect: "Lines start to flow",
    duration: "5 min",
  },
  {
    slug: "slowmath_dot2dot",
    name: "Dot to Dot",
    korName: "Dot to dot",
    Icon: IconDotLine,
    category: "basic",
    shortDesc: "Watch a dot-and-line example and recreate it on a grid below — visual perception and fine motor at once",
    value:
      "Observe a sample dot-and-line drawing and reproduce it on the grid below. Stimulates visual discrimination and hand control together; grid size and direction complexity adjust to the child's level.",
    tags: ["Dot-line copy", "Visual perception", "Fine motor", "Grid difficulty"],
    childEffect: "Eye and hand move together",
    duration: "5 min",
  },
  {
    slug: "slowmath_colorcopy",
    name: "Color Copy",
    korName: "Pattern copy",
    Icon: IconGrid,
    category: "basic",
    shortDesc: "Recreate the shown color-grid pattern to train visual perception",
    value:
      "Trains visual discrimination and working memory at the same time. Grids grow from 2×2 to 5×5 and the number of colors adjusts to fit the child's level.",
    tags: ["Color grids", "Pattern copy", "Color combinations"],
    childEffect: "Visual memory grows little by little",
    duration: "5 min",
  },
  {
    slug: "slowmath_pattern",
    name: "Pattern",
    korName: "Pattern practice",
    Icon: IconPattern,
    category: "basic",
    shortDesc: "Find what's missing in a repeating rule — pattern recognition practice",
    value:
      "Pattern recognition is the heart of math thinking. Step through fruit, color, and shape patterns; a selection-lock feature builds thinking skill.",
    tags: ["Rule finding", "Fill the blank", "Fruit & shapes", "Predict next"],
    childEffect: "Finds what comes next on their own",
    duration: "5 min",
  },
  {
    slug: "slowmath_sameshape",
    name: "Same Shape",
    korName: "Same shape finder",
    Icon: IconSameShape,
    category: "basic",
    shortDesc: "Find same shapes and pairs among many — visual discrimination practice",
    value:
      "Uses ten shapes from square, triangle, and circle to star, heart, and pentagon to build shape discrimination. Step through single and group picking, color discrimination, and pair finding.",
    tags: ["Same shape", "Visual perception", "Color discrimination", "Pair finding"],
    childEffect: "Tells same from different",
    duration: "5 min",
  },

  // ── Number Sense ──
  {
    slug: "slowmath_number",
    name: "Number",
    korName: "Numbers",
    Icon: IconNumbers,
    category: "number",
    shortDesc: "See, hear, and pick numbers from 1 to 100",
    value:
      "Hints and voice guidance let a child try on their own. Order from 1 to 100 builds school-ready number sense.",
    tags: ["1–100", "Order practice", "Number names", "Fill the blank"],
    childEffect: "Reads numbers out loud",
    duration: "5 min",
  },
  {
    slug: "slowmath_numberdraw",
    name: "Number Draw",
    korName: "Writing numbers",
    Icon: IconWrite,
    category: "number",
    shortDesc: "Practice writing 0–9 in the correct stroke order",
    value:
      "Hand-traces the shape of each digit so the form is remembered through the body. Dotted guides and step-by-step feedback teach correct stroke order to first-time writers.",
    tags: ["0–9 writing", "Dotted guide", "Fine motor", "Stroke order"],
    childEffect: "Stroke order feels natural",
    duration: "5 min",
  },
  {
    slug: "slowmath_dice",
    name: "Counting",
    korName: "Counting",
    Icon: IconDots,
    category: "number",
    shortDesc: "Count fingers, dice pips, and card suits — building number sense",
    value:
      "Counting everyday objects builds number sense naturally. Adjustable thinking time prevents impulsive picks and grows the habit of slow thought.",
    tags: ["Finger counting", "Dice", "Card suits", "Number sense"],
    childEffect: "Counts by pointing with fingers",
    duration: "3 min",
  },
  {
    slug: "slowmath_matching",
    name: "Matching",
    korName: "Number matching",
    Icon: IconMatch,
    category: "number",
    shortDesc: "Connect numbers with the right count of circles — linking symbol and quantity",
    value:
      "Builds the core link between number symbols and actual quantities. Practice in order or random, all the way to automatization.",
    tags: ["Number ↔ quantity", "Number concept", "1–20", "Order & random"],
    childEffect: "Links a number with a count",
    duration: "5 min",
  },
  {
    slug: "slowmath_gap",
    name: "Number gap",
    korName: "Number gap",
    Icon: IconGap,
    category: "number",
    shortDesc: "Find the missing number in an even-spaced sequence — discovering numerical patterns",
    value:
      "Spot regular gaps like +2, +5, +10 and reason out the missing number. Ten gap sizes, up/down directions, and progressive blank positions build a natural sense of number patterns.",
    tags: ["Gap 1–10", "Up & down", "Number patterns", "Reasoning"],
    childEffect: "Notices regular gaps",
    duration: "5 min",
  },
  {
    slug: "slowmath_money",
    name: "Money",
    korName: "Coins & bills",
    Icon: IconCoins,
    category: "number",
    shortDesc: "Learn the shapes and names of Korean coins and bills",
    value:
      "Pair 10, 50, 100, and 500 won coins with 1,000, 5,000, 10,000, and 50,000 won bills by picture and name.",
    tags: ["Coins", "Bills", "Picture ↔ name", "Real-life math"],
    childEffect: "Knows the kinds and names of money",
    duration: "3 min",
  },

  // ── Number Relations ──
  {
    slug: "slowmath_comparing",
    name: "Compare",
    korName: "Compare basics",
    Icon: IconScale,
    category: "relation",
    shortDesc: "Compare size, length, height, thickness, and quantity — math language",
    value:
      "Connects 'bigger' and 'shorter' to math language. Visual presentation lets children learn without needing to read.",
    tags: ["Size comparison", "Length & height", "Thickness & depth", "Quantity"],
    childEffect: "Uses 'big' and 'small' in words",
    duration: "3 min",
  },
  {
    slug: "slowmath_comparing2",
    name: "Compare 2",
    korName: "Compare basics 2",
    Icon: IconLocation,
    category: "relation",
    shortDesc: "Compare spatial relations — above, below, inside, outside",
    value:
      "Understanding position and spatial language is foundational for word problems. Shape illustrations let children internalize spatial concepts naturally.",
    tags: ["Spatial position", "Above & below", "Inside & outside", "Direction"],
    childEffect: "Points to above, below, inside, outside",
    duration: "3 min",
  },
  {
    slug: "slowmath_compare",
    name: "Compare",
    korName: "Number size",
    Icon: IconCompare,
    category: "relation",
    shortDesc: "Compare number sizes and express them with inequality signs",
    value:
      "See greater-than/less-than relationships visually with number-line and bar-chart hints. Supports both single and two digits, leading up to inequality signs (<, =, >).",
    tags: ["Size comparison", "Inequalities", "Single digit", "Two digits"],
    childEffect: "Picks the bigger or smaller number",
    duration: "5 min",
  },
  {
    slug: "slowmath_clock",
    name: "Clock",
    korName: "Reading the clock",
    Icon: IconClock,
    category: "relation",
    shortDesc: "Read analog and digital clocks — hour, half, and quarter",
    value:
      "Telling time is essential for daily independence. Starts at o'clock, then refines to half, quarter, and three-quarter hours — every child can follow.",
    tags: ["Analog", "Digital", "Reading time", "Daily independence"],
    childEffect: "Can tell the time",
    duration: "5 min",
  },
  {
    slug: "slowmath_calendar",
    name: "Calendar",
    korName: "Reading the calendar",
    Icon: IconCalendar,
    category: "relation",
    shortDesc: "Pick days of the week and dates, find the circled day — calendar reading",
    value:
      "Calendar reading is foundational for time sense and scheduling. Stages through 'pick all of one weekday', 'pick the Nth weekday', 'pick a date', and 'find the circled day'.",
    tags: ["Weekdays", "Dates", "Calendar reading", "Daily independence"],
    childEffect: "Can read a calendar",
    duration: "5 min",
  },
  {
    slug: "slowmath_oddeven",
    name: "Odd & Even",
    korName: "Odd & Even",
    Icon: ({ color }) => <IconTen color={color} n="O/E" />,
    category: "relation",
    shortDesc: "Learn odd and even through array, number board, random, and pair modes",
    value:
      "Odd/even is the start of number-pattern thinking. Visually check pairing on an array, pick all on the board, judge random numbers, and pair like-kinds across four modes.",
    tags: ["Odd", "Even", "Number patterns", "Sorting"],
    childEffect: "Sees number pairs by intuition",
    duration: "5 min",
  },

  // ── Pre-Addition ──
  {
    slug: "slowmath_combining",
    name: "Combining",
    korName: "Combining numbers",
    Icon: IconMerge,
    category: "preadd",
    shortDesc: "Combine two numbers into one — number composition",
    value:
      "Grasps addition through the intuition of 'putting together'. Drag interaction uses hand and eye together for longer memory.",
    tags: ["Number composition", "Drag", "Dot representation"],
    childEffect: "Sees two numbers become one",
    duration: "5 min",
  },
  {
    slug: "slowmath_splitting",
    name: "Splitting",
    korName: "Splitting numbers",
    Icon: IconSplit,
    category: "preadd",
    shortDesc: "Split one number into two parts — number decomposition",
    value:
      "Lays the groundwork for subtraction and addition through number decomposition. Three levels from 2 to 9 let you start at just the right challenge.",
    tags: ["Number decomposition", "Two parts", "Drag"],
    childEffect: "Understands a number being split",
    duration: "5 min",
  },
  {
    slug: "slowmath_complement",
    name: "Complement",
    korName: "Pairs to 10",
    Icon: ({ color }) => <IconTen color={color} n="10" />,
    category: "preadd",
    shortDesc: "Find the partner number that fills 10 — three ways",
    value:
      "10-complements are the core of carrying and borrowing. Impulse-control and varied practice modes give enough repetition to reach mastery.",
    tags: ["10 complement", "Carry prep", "Circle visualization"],
    childEffect: "Finds the pair that makes 10",
    duration: "10 min",
  },

  // ── Addition ──
  {
    slug: "slowmath_plusone",
    name: "Plus One",
    korName: "Plus one (+1)",
    Icon: ({ color }) => <IconTen color={color} n="+1" />,
    category: "add",
    shortDesc: "Number arrays, order prediction, and random problems — +1 addition",
    value:
      "Sees '+1 is the next number' on a number array, building intuition. Expands stage by stage to the 1–99 range for steady confidence.",
    tags: ["+1 addition", "Number array", "Next number", "Order recognition"],
    childEffect: "The next number pops to mind",
    duration: "5 min",
  },
  {
    slug: "slowmath_plustwo",
    name: "Plus Two",
    korName: "Plus two (+2)",
    Icon: ({ color }) => <IconTen color={color} n="+2" />,
    category: "add",
    shortDesc: "Visualize +2 with the number array and skip counting",
    value:
      "The two-step skip pattern on the array connects to odd/even and extends naturally. Conquer 1–98 step by step for real wins.",
    tags: ["+2 addition", "Number array", "Odd/even link", "Random"],
    childEffect: "Sees the rhythm of odd and even",
    duration: "5 min",
  },
  {
    slug: "slowmath_plusthree",
    name: "Plus Three",
    korName: "Plus three (+3)",
    Icon: ({ color }) => <IconTen color={color} n="+3" />,
    category: "add",
    shortDesc: "Practice +3 across multiple learning modes",
    value:
      "A natural next step after +1 and +2 — number-array animation shows the computation vividly. Random problems support full mastery.",
    tags: ["+3 addition", "Number array", "Random"],
    childEffect: "Skip-counts the numbers",
    duration: "5 min",
  },
  {
    slug: "slowmath_easy",
    name: "Easy",
    korName: "1-digit addition",
    Icon: IconPlus,
    category: "add",
    shortDesc: "Single-digit addition starting from the easiest level",
    value:
      "Four difficulty levels make it easy to start even for a first-timer. Impulse-control mode builds the habit of thinking before answering.",
    tags: ["4 levels", "Difficulty control", "Multiple choice", "1-digit"],
    childEffect: "No longer afraid of the + sign",
    duration: "5 min",
  },
  {
    slug: "slowmath_circle",
    name: "Circle",
    korName: "1-digit addition practice",
    Icon: IconTen.bind(null, { color: "#E8924A", n: "+" }),
    category: "add",
    shortDesc: "Pick, stack, and fill — three ways to practice addition",
    value:
      "The same addition in many forms — concept settles deeper. Visual concretes especially help children who struggle with abstract calculation.",
    tags: ["Circles", "1–9 sums", "Visual manipulation"],
    childEffect: "Answers come naturally",
    duration: "5 min",
  },
  {
    slug: "slowmath_carry",
    name: "Carry",
    korName: "Carrying practice",
    Icon: IconTen.bind(null, { color: "#E8924A", n: "10+" }),
    category: "add",
    shortDesc: "Make 10 by splitting and on the array — carrying practice",
    value:
      "Two intuitive ways to learn carrying — splitting/complement and array. Drag interaction makes 'making 10' a felt skill, eye and hand together.",
    tags: ["Carrying", "Make 10", "Splitting", "Number array", "Drag"],
    childEffect: "Makes 10 first, then adds",
    duration: "5 min",
  },
  {
    slug: "slowmath_verticaladd",
    name: "Vertical Add",
    korName: "Vertical addition",
    Icon: IconTen.bind(null, { color: "#E8924A", n: "+" }),
    category: "add",
    shortDesc: "Solve two-digit vertical addition from the ones place up",
    value:
      "Builds on carrying — ones and tens places separate so the flow is visible. Blanks grow one at a time so the child learns the procedure on their own.",
    tags: ["Vertical add", "Two digits", "Carrying", "Step-by-step"],
    childEffect: "The vertical flow becomes second nature",
    duration: "7 min",
  },
  {
    slug: "slowmath_moneycalc",
    name: "Money Calc",
    korName: "Pay the price",
    Icon: IconMoneyCalc,
    category: "add",
    shortDesc: "Pay a price with coins and bills, or pick the total",
    value:
      "Classroom addition moved to real life (money). Pay-the-price and total-from-coins, in coins-only, bills-only, and mixed difficulties.",
    tags: ["Money calc", "Coins & bills", "Sums", "Real-life"],
    childEffect: "Counts allowance and estimates prices",
    duration: "5 min",
  },

  // ── Subtraction ──
  {
    slug: "slowmath_minusone",
    name: "Minus One",
    korName: "Minus one (−1)",
    Icon: ({ color }) => <IconTen color={color} n="-1" />,
    category: "sub",
    shortDesc: "Number arrays, previous-number prediction, and random — −1 subtraction",
    value:
      "Sees '−1 is the previous number' on a number array, intuitively. Gradual range expansion makes subtraction feel less heavy.",
    tags: ["−1 subtraction", "Number array", "Previous number", "Reverse order"],
    childEffect: "Recalls the number before",
    duration: "5 min",
  },
  {
    slug: "slowmath_minustwo",
    name: "Minus Two",
    korName: "Minus two (−2)",
    Icon: ({ color }) => <IconTen color={color} n="-2" />,
    category: "sub",
    shortDesc: "Visualize −2 with the array and reverse skip counting",
    value:
      "The reverse two-step skip on the array makes −2 intuitive. Gradual range expansion lets a child conquer it at their own pace.",
    tags: ["−2 subtraction", "Number array", "Reverse count", "Random"],
    childEffect: "Counts back two at a time",
    duration: "5 min",
  },
  {
    slug: "slowmath_minusthree",
    name: "Minus Three",
    korName: "Minus three (−3)",
    Icon: ({ color }) => <IconTen color={color} n="-3" />,
    category: "sub",
    shortDesc: "Practice −3 across multiple learning modes",
    value:
      "A natural next step after −1 and −2 — number-array animation shows subtraction vividly. Random problems support full mastery.",
    tags: ["−3 subtraction", "Number array", "Random"],
    childEffect: "Counts back three at a time",
    duration: "5 min",
  },
  {
    // Placeholder — actual subapp will be added later (slug provisional, may change during designer redesign)
    slug: "slowmath_easysub",
    name: "Easy Sub",
    korName: "1-digit subtraction",
    Icon: IconSplit,
    category: "sub",
    shortDesc: "Single-digit subtraction starting from the easiest level",
    value:
      "Four difficulty levels make it easy to start even for a first-timer. Impulse-control mode builds the habit of thinking before answering.",
    tags: ["4 levels", "Difficulty control", "Multiple choice", "1-digit"],
    childEffect: "No longer afraid of the − sign",
    duration: "5 min",
  },
  {
    slug: "slowmath_subtract",
    name: "Subtract Practice",
    korName: "1-digit subtraction practice",
    Icon: ({ color }) => <IconTen color={color} n="−" />,
    category: "sub",
    shortDesc: "Drag, group, and array — three ways to do 1-digit subtraction",
    value:
      "Three visualizations: move circles into a basket, group and remove, or slash on an array. Many angles on what subtraction means; answer-checking happens visually so hand and eye learn together.",
    tags: ["1-digit subtract", "Drag", "Group remove", "Number array"],
    childEffect: "Watches a number get smaller",
    duration: "5 min",
  },
  {
    slug: "slowmath_borrow",
    name: "Borrow",
    korName: "Borrowing practice",
    Icon: IconBorrow,
    category: "sub",
    shortDesc: "Borrowing subtraction, solved step by step",
    value:
      "Shows how borrowing happens when subtracting from a two-digit number, through decomposition and grouping. The first problem starts with one blank and gradually adds more so the child learns the flow themselves.",
    tags: ["Borrowing", "Vertical sub", "Two digits", "Step-by-step"],
    childEffect: "Sees the reason borrowing works",
    duration: "7 min",
  },
  {
    slug: "slowmath_verticalsub",
    name: "Vertical Sub",
    korName: "Vertical subtraction",
    Icon: IconBorrow,
    category: "sub",
    shortDesc: "Solve two-digit vertical subtraction from the ones place up",
    value:
      "Builds on borrowing — ones and tens places separate so the flow is visible. Blanks grow one at a time so the procedure becomes second nature.",
    tags: ["Vertical sub", "Two digits", "Borrowing", "Step-by-step"],
    childEffect: "Vertical subtraction flows",
    duration: "7 min",
  },
  {
    slug: "slowmath_changecalc",
    name: "Change Calc",
    korName: "Counting change",
    Icon: IconMoneyCalc,
    category: "sub",
    shortDesc: "Look at the price and the bills, pick the change",
    value:
      "Subtraction moved to real life — pick the change yourself, building money-unit sense alongside subtraction.",
    tags: ["Change", "Coins & bills", "Difference", "Real-life"],
    childEffect: "Builds a sense for change",
    duration: "5 min",
  },

  // ── Multiplication ──
  {
    slug: "slowmath_timestables",
    name: "Timestables",
    korName: "Times tables",
    Icon: IconMultiply,
    category: "mul",
    shortDesc: "2–9 times tables, learned slowly with enough thinking time",
    value:
      "Adjustable thinking time lets a child who can't memorize fast still master the tables at their own pace. Repeated exposure shifts to long-term memory naturally.",
    tags: ["Multiplication", "2–9 tables", "Table-by-table", "Repetition"],
    childEffect: "Builds confidence one table at a time",
    duration: "10 min",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function AppCard({ app, cat }: { app: App; cat: Category }) {
  const url = `${BASE}/${app.slug}/`;
  const emoji = appEmoji[app.slug] ?? "";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="app-card flex flex-col rounded-2xl overflow-hidden h-full"
      style={{
        background: "#FFFFFF",
        boxShadow: "0 2px 12px rgba(45,38,32,0.07)",
        border: `1.5px solid ${cat.borderColor}`,
        textDecoration: "none",
      }}
    >
      {/* Header: emoji + title */}
      <div
        className="flex items-center gap-3 px-4 py-4"
        style={{ background: cat.bgColor, borderBottom: `1px solid ${cat.borderColor}` }}
      >
        <span
          aria-hidden
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 52,
            height: 52,
            background: "white",
            borderRadius: 14,
            boxShadow: `0 2px 8px ${cat.color}25`,
            fontSize: "1.9rem",
            lineHeight: 1,
          }}
        >
          {emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3
            className="text-base font-black"
            style={{ color: "#2D2620", lineHeight: 1.3, letterSpacing: "-0.01em" }}
          >
            {app.korName}
          </h3>
        </div>
        <div
          className="shrink-0"
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: cat.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 flex flex-col gap-2.5" style={{ flex: 1 }}>
        <p className="text-sm font-bold leading-snug" style={{ color: "#2D2620" }}>
          {app.shortDesc}
        </p>

        <figure
          className="relative rounded-lg px-4 py-3 m-0"
          style={{
            background: cat.bgColor,
          }}
        >
          <span
            aria-hidden
            className="absolute font-black select-none"
            style={{
              color: cat.color,
              opacity: 0.35,
              fontSize: "1.6rem",
              lineHeight: 1,
              top: 2,
              left: 6,
              fontFamily: "Georgia, serif",
            }}
          >
            “
          </span>
          <blockquote
            className="font-bold break-keep text-center m-0"
            style={{
              fontSize: "0.82rem",
              color: cat.color,
              lineHeight: 1.45,
            }}
          >
            {app.childEffect}
          </blockquote>
          <span
            aria-hidden
            className="absolute font-black select-none"
            style={{
              color: cat.color,
              opacity: 0.35,
              fontSize: "1.6rem",
              lineHeight: 1,
              bottom: -4,
              right: 8,
              fontFamily: "Georgia, serif",
            }}
          >
            ”
          </span>
        </figure>

        <p className="leading-relaxed break-keep" style={{ fontSize: "0.78rem", color: "#7B6545" }}>
          {app.value}
        </p>
      </div>
    </a>
  );
}

function CategorySection({
  cat,
  catApps,
}: {
  cat: Category;
  catApps: App[];
}) {
  const { Icon } = cat;
  return (
    <section
      id={`cat-${cat.id}`}
      aria-labelledby={`heading-${cat.id}`}
      className="lazy-section-tall"
      style={{ scrollMarginTop: 72 }}
    >
      <div className="flex items-start gap-3 mb-6">
        <div
          className="flex items-center justify-center rounded-xl shrink-0 [&_svg]:w-8 [&_svg]:h-8"
          style={{
            width: 52,
            height: 52,
            background: cat.bgColor,
            border: `1.5px solid ${cat.borderColor}`,
          }}
        >
          <Icon color={cat.color} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2
              id={`heading-${cat.id}`}
              className="text-xl font-black"
              style={{ color: "#2D2620", letterSpacing: "-0.02em" }}
            >
              {cat.label}
            </h2>
            <span
              className="text-xs font-bold rounded-full px-3 py-1"
              style={{ background: cat.bgColor, color: cat.color }}
            >
              {catApps.length} modules
            </span>
          </div>
          <p
            className="text-sm break-keep"
            style={{ color: "#7B6545", marginTop: 4 }}
          >
            {cat.subtitle}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {catApps.map((app) => (
          <AppCard key={app.slug} app={app} cat={cat} />
        ))}
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  const valueProps = [
    {
      Icon: IconStairs,
      title: "Staged difficulty",
      desc: "Starts where the child is right now and builds up through small wins",
    },
    {
      Icon: IconRepeat,
      title: "Repetition by design",
      desc: "The same concept practiced from many angles, settling longer and deeper",
    },
    {
      Icon: IconHourglass,
      title: "Enough thinking time",
      desc: "An adjustable wait before answering reduces impulsive picks",
    },
    {
      Icon: IconSpeaker,
      title: "Voice guidance",
      desc: "Prompts read aloud, so non-readers can work on their own",
    },
    {
      Icon: IconGentle,
      title: "Quiet by design",
      desc: "No flashing screens, no jarring sound effects — a calm screen",
    },
    {
      Icon: IconFocus,
      title: "One screen, one task",
      desc: "Just one activity at a time so attention can settle without competition",
    },
  ];

  const seoKeywords = [
    "math for slow learners",
    "developmental delay & disability education",
    "borderline intelligence learning tools",
    "special education math",
    "learning disability math training",
    "early number concepts",
    "fine motor development",
    "telling time practice",
    "slow times tables",
    "early addition practice",
    "pattern recognition training",
    "color recognition learning",
  ];

  return (
    <div
      style={{ background: "#F7F4F0", minHeight: "100vh" }}
      className="pb-20 sm:pb-0"
    >
      <SetHtmlLang lang="en" />

      {/* Language toggle (floating top-right) */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 50,
          display: "inline-flex",
          overflow: "hidden",
          borderRadius: 9999,
          border: "1px solid rgba(45,38,32,0.15)",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(4px)",
          fontSize: 11,
          fontWeight: 800,
        }}
      >
        <a
          href="/?lang=ko"
          aria-label="Korean"
          style={{
            padding: "6px 12px",
            color: "#7B6545",
            textDecoration: "none",
          }}
        >
          KR
        </a>
        <a
          href="/en/?lang=en"
          aria-label="English"
          style={{
            padding: "6px 12px",
            color: "#fff",
            background: "#2D2620",
            textDecoration: "none",
          }}
        >
          EN
        </a>
      </div>

      {/* ── Hero ── */}
      <header
        id="hero"
        className="px-4 pt-10 pb-10 sm:px-6 sm:pt-16 sm:pb-14"
        style={{
          background: "linear-gradient(160deg, #FFFAF3 0%, #FFF0D8 55%, #FFE8C4 100%)",
          borderBottom: "1px solid #EDE0C8",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

          {/* Logo + Brand */}
          <div className="flex flex-col items-center mb-5 gap-2">
            <svg viewBox="0 0 120 100" width="68" height="57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SlowKids turtle logo">
              <ellipse cx="30" cy="72" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(-20 30 72)"/>
              <ellipse cx="78" cy="76" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(15 78 76)"/>
              <ellipse cx="28" cy="54" rx="9" ry="5.5" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(-10 28 54)"/>
              <path d="M18 60 L10 55" stroke="#F2DC8C" strokeWidth="4" strokeLinecap="round"/>
              <ellipse cx="55" cy="58" rx="35" ry="20" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2"/>
              <ellipse cx="52" cy="42" rx="32" ry="28" fill="#7EDCAA" stroke="#3A9B6A" strokeWidth="2.5"/>
              <path d="M52 18 L42 32 L42 48 L52 58 L62 48 L62 32 Z" fill="none" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="42" y1="32" x2="24" y2="38" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="62" y1="32" x2="80" y2="38" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="42" y1="48" x2="26" y2="56" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="62" y1="48" x2="78" y2="56" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <ellipse cx="42" cy="26" rx="6" ry="4" fill="white" opacity=".35" transform="rotate(-15 42 26)"/>
              <ellipse cx="62" cy="36" rx="4" ry="3" fill="white" opacity=".2"/>
              <ellipse cx="92" cy="40" rx="17" ry="15" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2.5"/>
              <ellipse cx="82" cy="72" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(10 82 72)"/>
              <circle cx="99" cy="35" r="4" fill="white" stroke="#3A9B6A" strokeWidth="1.5"/>
              <circle cx="100" cy="34" r="2.5" fill="#3A9B6A"/>
              <circle cx="101" cy="33" r="1" fill="white"/>
              <circle cx="100" cy="44" r="3.5" fill="#F0A050" opacity=".4"/>
              <path d="M94 46 Q98 50 103 46" fill="none" stroke="#3A9B6A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="font-black" style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#5A9FD8" }}>Slow</span>
              <span style={{ color: "#E8924A" }}>Kids</span>
              <span style={{ color: "#2D2620" }}> Series</span>
            </p>
          </div>

          {/* Slogan */}
          <h1
            className="font-black mb-4"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
              lineHeight: 1.22,
              color: "#2D2620",
              letterSpacing: "-0.03em",
            }}
          >
            Slowly but in <span style={{ color: "#5A9FD8" }}>the right direction</span>,
            <br />
            <span style={{ color: "#E8924A" }}>one step</span> at a time
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.8rem, 2.4vw, 0.875rem)",
              color: "#7B6545",
              lineHeight: 1.7,
              marginBottom: "32px",
              wordBreak: "keep-all",
            }}
          >
Learning tools designed for children with <strong style={{ color: "#4A4035" }}>developmental delays, developmental disabilities, slow learning, or borderline intelligence</strong> to build math foundations <strong style={{ color: "#4A4035" }}>at their own pace</strong>.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <StoreBadges locale="en" />
            <span
              style={{
                color: "#1E6FB8",
                fontSize: "0.85rem",
                fontWeight: 700,
                background: "#E8F2FB",
                padding: "5px 12px",
                borderRadius: "999px",
                letterSpacing: "-0.01em",
              }}
            >
              Try it free today
            </span>
          </div>

        </div>
      </header>

      {/* ── What is SlowKids? ── */}
      <section
        aria-label="About SlowKids"
        className="px-6 py-10 sm:py-12"
        style={{ borderBottom: "1px solid #EDE0C8", background: "white" }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2
            className="font-black text-lg mb-3"
            style={{ color: "#2D2620", letterSpacing: "-0.02em" }}
          >
            What is SlowKids?
          </h2>
          <p className="text-sm leading-loose" style={{ color: "#7B6545" }}>
            SlowKids is a set of learning tools designed for{" "}
            <strong style={{ color: "#4A4035" }}>
              children with developmental delays, developmental disabilities, slow learning, or borderline intelligence
            </strong>{" "}
            to pick up early math on their own. It began with parents whose children{" "}
            <strong style={{ color: "#4A4035" }}>kept falling behind on standard learning materials</strong> that moved too fast.
            With enough thinking time, layered hints, and voice guidance,{" "}
            <strong style={{ color: "#4A4035" }}>children get to do it themselves</strong>{" "}
            — and that small success becomes the seed of independence.
            Used by parents, special education teachers, and cognitive therapists alike.
          </p>
          <div
            className="flex gap-3 mt-5"
            style={{
              borderLeft: "3.5px solid #5A9FD8",
              paddingLeft: "14px",
            }}
          >
            <p className="text-sm font-semibold leading-relaxed" style={{ color: "#5A9FD8" }}>
              Made by a KAIST-trained engineer and father of a child on the autism spectrum, from his own family's experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── Empathy ── */}
      <section
        aria-label="Parents who understand"
        className="px-6 py-12 sm:py-16 lazy-section"
        style={{
          borderBottom: "1px solid #EDE0C8",
          background:
            "radial-gradient(900px 420px at 12% 0%, rgba(232,146,74,0.08), transparent 60%), radial-gradient(700px 360px at 95% 100%, rgba(90,159,216,0.06), transparent 60%), linear-gradient(180deg, #FFFAF2 0%, #FFF6EA 100%)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            className="text-center font-semibold mb-3"
            style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C77A00" }}
          >
            Before we begin
          </p>
          <h2
            className="text-center font-black mb-3 break-keep"
            style={{ fontSize: "clamp(1.3rem, 3.6vw, 1.75rem)", color: "#2D2620", letterSpacing: "-0.02em", lineHeight: 1.3 }}
          >
            Have you ever said any of these
            <br />
            <span style={{ color: "#E8924A" }}>under your breath?</span>
          </h2>
          <p
            className="text-center leading-relaxed mb-10 break-keep"
            style={{ fontSize: "0.9rem", color: "#7B6545", maxWidth: "520px", margin: "0 auto 2.5rem" }}
          >
            We've heard them many times. They keep stinging anyway.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Two pages into a workbook, and the tears start.",
              "Months on the same spot — numbers 1 to 10.",
              "One mistake and they refuse to try again.",
              "Peer-grade materials feel too fast. Younger-grade ones feel too babyish.",
            ].map((concern) => (
              <div
                key={concern}
                className="relative rounded-2xl px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid #EDE0C8",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 1px 0 rgba(45,38,32,0.02)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute font-black"
                  style={{
                    top: "-14px",
                    left: "18px",
                    fontSize: "3.2rem",
                    lineHeight: 1,
                    color: "rgba(232,146,74,0.7)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  “
                </span>
                <p
                  className="leading-loose break-keep"
                  style={{ fontSize: "0.95rem", color: "#2D2620" }}
                >
                  {concern}
                </p>
              </div>
            ))}
          </div>

          {/* Resolution — empathic response, not brand-speak */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl px-6 py-6 sm:px-7"
            style={{ background: "#2D2620", color: "#F7F4F0" }}
          >
            <div style={{ flex: 1 }}>
              <p
                className="font-black mb-1.5"
                style={{ color: "#FFFFFF", fontSize: "1.1rem", letterSpacing: "-0.02em" }}
              >
                We hear you.
              </p>
              <p className="leading-relaxed break-keep" style={{ fontSize: "0.85rem", color: "#D9C9B0" }}>
                That's why we made small practices paced to your child.
                One screen, one step — walking slowly, together.
              </p>
            </div>
            <a
              href="#apps"
              className="shrink-0 inline-flex items-center gap-1.5 font-bold rounded-full"
              style={{
                background: "#F5E6C8",
                color: "#2D2620",
                padding: "10px 18px",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              See how we made it
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M8 3l5 5-5 5" stroke="#2D2620" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Real-usage demo video ── */}
      <section
        aria-label="A child learning in real life"
        className="px-6 py-12 sm:py-16 lazy-section"
        style={{
          borderBottom: "1px solid #EDE0C8",
          background:
            "linear-gradient(180deg, #FBF6ED 0%, #F7F4F0 100%)",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div className="text-center mb-8">
            <p
              className="font-semibold mb-3"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5A9FD8",
              }}
            >
              In real life
            </p>
            <h2
              className="font-black mb-5 break-keep"
              style={{
                fontSize: "clamp(1.35rem, 3.6vw, 1.8rem)",
                color: "#2D2620",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
            >
              Before words —
              <br />
              <span style={{ color: "#E8924A" }}>let us show you.</span>
            </h2>
            <p
              className="leading-loose break-keep mb-6"
              style={{ fontSize: "0.95rem", color: "#7B6545", maxWidth: "560px", margin: "0 auto 1.5rem" }}
            >
              One slow step at a time. Instead of flashy reactions, scenes where a child stays at their own pace.
            </p>
            <ul
              className="flex flex-col sm:flex-row sm:justify-center gap-2.5 sm:gap-6"
              style={{ fontSize: "0.9rem", color: "#4A4035" }}
            >
              <li className="flex items-start gap-2 break-keep justify-center">
                <span aria-hidden style={{ color: "#5A9FD8", fontWeight: 900, lineHeight: 1.6 }}>·</span>
                A quiet screen, plenty of time to think
              </li>
              <li className="flex items-start gap-2 break-keep justify-center">
                <span aria-hidden style={{ color: "#E8924A", fontWeight: 900, lineHeight: 1.6 }}>·</span>
                Try again — confidence built from small repetitions
              </li>
              <li className="flex items-start gap-2 break-keep justify-center">
                <span aria-hidden style={{ color: "#4DB87A", fontWeight: 900, lineHeight: 1.6 }}>·</span>
                Moments the child taps and confirms on their own
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 justify-items-center">
            {[
              { src: `${ASSET_BASE}/video/landing-4.mp4`, label: "A child learning with SlowKids 1" },
              { src: `${ASSET_BASE}/video/landing-2.mp4`, label: "A child learning with SlowKids 2" },
            ].map((v) => (
              <div
                key={v.src}
                className="relative overflow-hidden rounded-2xl"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  aspectRatio: "406 / 720",
                  background: "#EDE0C8",
                  boxShadow: "0 22px 48px rgba(45,38,32,0.16)",
                  border: "1px solid #EDE0C8",
                }}
              >
                <LazyVideo
                  src={v.src}
                  ariaLabel={v.label}
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section
        aria-label="What makes SlowKids different"
        className="px-6 py-10 sm:py-12 lazy-section"
        style={{
          background: "white",
          borderBottom: "1px solid #EDE0C8",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            className="text-center font-black mb-8"
            style={{ color: "#2D2620", fontSize: "1.15rem", letterSpacing: "-0.02em" }}
          >
            What makes SlowKids different
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center gap-3 rounded-2xl p-5 lg:p-7 lg:gap-4 lg:[&_svg]:w-11 lg:[&_svg]:h-11"
                style={{ background: "#F7F4F0" }}
              >
                <v.Icon />
                <h3
                  className="font-black text-sm lg:text-base"
                  style={{ color: "#2D2620", letterSpacing: "-0.01em" }}
                >
                  {v.title}
                </h3>
                <p
                  className="leading-relaxed break-keep lg:text-[0.95rem]"
                  style={{ fontSize: "0.85rem", color: "#7B6545", lineHeight: 1.65 }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky Nav ── */}
      <nav
        aria-label="Category shortcuts"
        style={{
          background: "rgba(247,244,240,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #EDE0C8",
          padding: "10px 16px",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div className="overflow-hidden">
          <div className="marquee-track flex" style={{ width: "max-content" }}>
            {[...categories, ...categories, ...categories, ...categories].map((cat, i) => (
              <a
                key={`${cat.id}-${i}`}
                href={`#cat-${cat.id}`}
                className="nav-pill flex items-center gap-1.5 text-xs font-bold rounded-full px-4 py-2 whitespace-nowrap shrink-0"
                style={{
                  background: cat.bgColor,
                  color: cat.color,
                  border: `1px solid ${cat.borderColor}`,
                  textDecoration: "none",
                  marginRight: 12,
                }}
              >
                <cat.Icon color={cat.color} />
                <span>{cat.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main id="apps" className="px-4 sm:px-6 py-10 sm:py-14" style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── Where to start? ── */}
        <section aria-labelledby="start-heading" className="mb-16">
          <h2
            id="start-heading"
            className="font-black mb-2"
            style={{ fontSize: "1.2rem", color: "#2D2620", letterSpacing: "-0.02em" }}
          >
            Where to start?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#7B6545" }}>
            Find the right tool for where your child is right now
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                level: "Stage 1",
                label: "Numbers and colors are still new",
                desc: "Where number sense begins — names of numbers, names of colors, counting by eye.",
                color: "#5A9FD8",
                bg: "#EBF4FC",
                border: "#B8D8F0",
                apps: [
                  { name: "Numbers", slug: "slowmath_number" },
                  { name: "Counting", slug: "slowmath_dice" },
                  { name: "Color", slug: "slowmath_color" },
                ],
              },
              {
                level: "Stage 2",
                label: "Holding a pencil, writing is hard",
                desc: "Build the hand control and eye-hand coordination needed before letters and numbers.",
                color: "#E8924A",
                bg: "#FDF0E3",
                border: "#F0C898",
                apps: [
                  { name: "Line Draw", slug: "slowmath_linedraw" },
                  { name: "Dot to Dot", slug: "slowmath_dot2dot" },
                  { name: "Number Draw", slug: "slowmath_numberdraw" },
                ],
              },
              {
                level: "Stage 3",
                label: "Comparison and pattern finding is hard",
                desc: "Size comparison, position words, and repeating patterns — the base of math thinking.",
                color: "#4DB87A",
                bg: "#E6F6EE",
                border: "#90D8B0",
                apps: [
                  { name: "Compare", slug: "slowmath_comparing" },
                  { name: "Compare 2", slug: "slowmath_comparing2" },
                  { name: "Number size", slug: "slowmath_compare" },
                  { name: "Pattern", slug: "slowmath_pattern" },
                  { name: "Number gap", slug: "slowmath_gap" },
                ],
              },
              {
                level: "Stage 4",
                label: "Numbers are known, but adding is hard",
                desc: "Connect numbers with amounts; combine and split to build the idea of addition.",
                color: "#8B72C8",
                bg: "#EDE8F8",
                border: "#BBA8E8",
                apps: [
                  { name: "Matching", slug: "slowmath_matching" },
                  { name: "Combining", slug: "slowmath_combining" },
                  { name: "Splitting", slug: "slowmath_splitting" },
                  { name: "Easy Add", slug: "slowmath_easy" },
                ],
              },
            ].map((step) => (
              <div
                key={step.level}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: `1.5px solid ${step.border}`,
                  boxShadow: "0 2px 12px rgba(45,38,32,0.06)",
                }}
              >
                {/* Card header */}
                <div className="px-5 py-4" style={{ background: step.bg }}>
                  <span
                    className="text-xs font-black rounded-full px-2.5 py-1 mb-2 inline-block"
                    style={{ background: step.color, color: "white" }}
                  >
                    {step.level}
                  </span>
                  <h3
                    className="font-black text-base"
                    style={{ color: "#2D2620", letterSpacing: "-0.01em" }}
                  >
                    {step.label}
                  </h3>
                </div>
                {/* Card body */}
                <div className="px-5 py-4">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#7B6545" }}>
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.apps.map((app) => (
                      <a
                        key={app.slug}
                        href={`${BASE}/${app.slug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold rounded-full px-2.5 py-1"
                        style={{
                          fontSize: "0.7rem",
                          background: step.bg,
                          color: step.color,
                          border: `1px solid ${step.border}`,
                          textDecoration: "none",
                        }}
                      >
                        {app.name}
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                          <path d="M2 5h6M5 2l3 3-3 3" stroke={step.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SlowKids series at a glance ── */}
        <section aria-labelledby="overview-heading" className="mb-16">
          <h2
            id="overview-heading"
            className="font-black mb-2"
            style={{ fontSize: "1.2rem", color: "#2D2620", letterSpacing: "-0.02em" }}
          >
            All learning tools at a glance
          </h2>
          <p className="text-sm mb-6" style={{ color: "#7B6545" }}>
            Scan all {apps.length} tools by emoji and open any one you'd like to try
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {apps.map((app) => {
              const emoji = appEmoji[app.slug] ?? "";
              return (
                <a
                  key={app.slug}
                  href={`${BASE}/${app.slug}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-tile flex flex-col items-center justify-center rounded-2xl"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 10px rgba(45,38,32,0.05)",
                    border: "1px solid #EDE0C8",
                    padding: "24px 12px 18px",
                    textDecoration: "none",
                    minHeight: 130,
                  }}
                  aria-label={`Open ${app.korName}`}
                >
                  <span
                    aria-hidden
                    style={{
                      fontSize: "2rem",
                      lineHeight: 1,
                      marginBottom: 14,
                    }}
                  >
                    {emoji}
                  </span>
                  <span
                    className="font-bold text-center break-keep"
                    style={{
                      fontSize: "0.88rem",
                      color: "#2D2620",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {app.korName}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Category sections */}
        <div className="flex flex-col gap-16">
          {categories.map((cat) => {
            const catApps = apps.filter((a) => a.category === cat.id);
            return (
              <CategorySection key={cat.id} cat={cat} catApps={catApps} />
            );
          })}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="px-6 py-12 sm:py-14 text-center lazy-section"
        style={{
          background: "#2D2620",
          color: "#D9C9B0",
        }}
      >
        <p
          className="font-black text-2xl mb-3 tracking-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          <span style={{ color: "#5A9FD8" }}>Slow</span><span style={{ color: "#E8924A" }}>Kids</span>
        </p>
        <p
          className="leading-relaxed mb-6 break-keep"
          style={{ fontSize: "0.9rem", color: "#A08870" }}
        >
          Simple but powerful learning tools
          <br />
          for children who learn at their own pace
        </p>

        <nav
          className="flex items-center justify-center gap-4 mb-2"
          aria-label="Legal"
        >
          <a
            href="/terms"
            style={{
              fontSize: "0.82rem",
              color: "#A89070",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Terms
          </a>
          <span style={{ color: "#A89070", opacity: 0.4, fontSize: "0.82rem" }}>·</span>
          <a
            href="/privacy"
            style={{
              fontSize: "0.82rem",
              color: "#A89070",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Privacy
          </a>
        </nav>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-6 pt-6 mb-4"
          style={{ borderTop: "1px solid rgba(217,201,176,0.18)" }}
        >
          <span
            className="font-semibold"
            style={{ fontSize: "0.78rem", color: "#A89070", letterSpacing: "0.04em" }}
          >
            Partnership · Feedback
          </span>
          <a
            href="mailto:contact@everydaysummer.net"
            className="inline-flex items-center gap-1.5 font-bold rounded-full"
            style={{
              background: "rgba(245,230,200,0.12)",
              color: "#F5E6C8",
              padding: "8px 18px",
              fontSize: "0.85rem",
              textDecoration: "none",
              border: "1px solid rgba(245,230,200,0.25)",
            }}
          >
            contact@everydaysummer.net
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#F5E6C8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <p
          className="leading-loose mt-6"
          style={{ fontSize: "0.68rem", color: "#A89070", opacity: 0.55, letterSpacing: "0.02em" }}
        >
          #DevelopmentalDelay #DevelopmentalDisability #SlowLearners #BorderlineIQ #LearningDisability #ADHD #AutismSpectrum #SpecialEducation
        </p>
      </footer>
      <StickyDownloadBar locale="en" />
    </div>
  );
}
