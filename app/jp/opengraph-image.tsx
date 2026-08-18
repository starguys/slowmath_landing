import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Next.js 파일 컨벤션: /jp 및 하위 세그먼트(/jp/terms, /jp/privacy) 전체가
// 이 이미지를 og:image 로 자동 채택. output:"export" 에서 빌드 타임에 PNG로 정적 생성.
// 매치 대상 크기는 KR/EN og-image(878×443)와 동일.

export const alt = "LittleSteps — 正しい方向へ、一歩ずつ";
export const size = { width: 878, height: 443 };
export const contentType = "image/png";
// output:"export" 에서는 fetch() 를 쓰는 라우트가 기본적으로 dynamic 으로 판정되므로
// 빌드 타임 정적 생성을 명시적으로 요청.
export const dynamic = "force-static";

// 필요한 글리프만 뽑아 subset 폰트를 받아오는 헬퍼 (Google Fonts CSS v1은 text= 파라미터로
// 필요한 문자만 담긴 초소형 woff/ttf 를 돌려준다 — 빌드 타임 fetch에 최적).
async function loadJpFont(text: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css?family=Noto+Sans+JP:${weight}&text=${encodeURIComponent(text)}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (opengraph-image build)" },
  });
  if (!res.ok) throw new Error(`Google Fonts CSS fetch failed: ${res.status}`);
  const css = await res.text();
  const match = css.match(/src:\s*url\(([^)]+)\)/);
  if (!match) throw new Error("Could not parse font URL from Google Fonts CSS");
  const fontUrl = match[1].replace(/["']/g, "");
  const fontRes = await fetch(fontUrl);
  if (!fontRes.ok) throw new Error(`Font file fetch failed: ${fontRes.status}`);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const glyphs = "ゆっくりでも、正しい方向へ一歩ずつ";
  const [fontData, mascotBuf] = await Promise.all([
    loadJpFont(glyphs, 900),
    readFile(join(process.cwd(), "public", "figma", "hero", "mascot.png")),
  ]);
  const mascotSrc = `data:image/png;base64,${mascotBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          // mascot.png 이 투명이 아닌 tan 배경 baked-in (상단 #fff7e9 → 하단 #fff4de).
          // 사각형 이음매를 감추려 같은 gradient 를 OG 전체 배경에 사용.
          backgroundImage: "linear-gradient(#fff7e9, #fff4de)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "34px 40px 0",
          fontFamily: "NotoJP",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#4a4035",
            fontSize: 50,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.22,
          }}
        >
          <div style={{ display: "flex" }}>
            <span>ゆっくりでも、</span>
            <span style={{ color: "#6bade8" }}>正しい方向へ</span>
            <span>、</span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ color: "#f0a050" }}>一歩</span>
            <span>ずつ</span>
          </div>
        </div>
        <img
          src={mascotSrc}
          width={210}
          height={171}
          style={{ marginTop: 12 }}
          alt=""
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "NotoJP", data: fontData, style: "normal", weight: 900 },
      ],
    }
  );
}
