import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없어요 | 느린아이",
  description:
    "요청하신 페이지를 찾을 수 없습니다. 느린아이 시리즈 메인 페이지에서 25개 학습 도구를 둘러보세요.",
  robots: { index: false, follow: true },
};

const categories = [
  { id: "basic", label: "기초 인지" },
  { id: "number", label: "수 개념" },
  { id: "relation", label: "수 관계" },
  { id: "preadd", label: "덧셈 전 개념" },
  { id: "add", label: "덧셈" },
  { id: "sub", label: "뺄셈" },
  { id: "mul", label: "곱셈" },
];

export default function NotFound() {
  return (
    <main
      style={{
        background: "#F7F4F0",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          width: "100%",
          textAlign: "center",
          background: "white",
          borderRadius: "24px",
          padding: "40px 28px",
          boxShadow: "0 12px 36px rgba(45,38,32,0.08)",
          border: "1px solid #EDE0C8",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 12,
          }}
          aria-hidden
        >
          <svg
            viewBox="0 0 120 100"
            width="92"
            height="77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="30" cy="72" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(-20 30 72)" />
            <ellipse cx="78" cy="76" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(15 78 76)" />
            <ellipse cx="55" cy="58" rx="35" ry="20" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2" />
            <ellipse cx="52" cy="42" rx="32" ry="28" fill="#7EDCAA" stroke="#3A9B6A" strokeWidth="2.5" />
            <ellipse cx="92" cy="40" rx="17" ry="15" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2.5" />
            <circle cx="99" cy="35" r="4" fill="white" stroke="#3A9B6A" strokeWidth="1.5" />
            <circle cx="100" cy="34" r="2.5" fill="#3A9B6A" />
            <path d="M94 46 Q98 50 103 46" fill="none" stroke="#3A9B6A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p
          className="font-black"
          style={{
            fontSize: "1.05rem",
            color: "#7B6545",
            marginBottom: 6,
            letterSpacing: "-0.01em",
          }}
        >
          404
        </p>
        <h1
          className="font-black"
          style={{
            fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
            color: "#2D2620",
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}
        >
          페이지를 찾을 수 없어요
        </h1>
        <p
          className="break-keep"
          style={{
            fontSize: "0.95rem",
            color: "#7B6545",
            lineHeight: 1.65,
            marginBottom: 24,
          }}
        >
          주소가 잘못되었거나 페이지가 이동되었을 수 있어요.
          <br />
          느린아이 시리즈 메인 페이지에서 25개 학습 도구를 둘러보세요.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-black rounded-full"
            style={{
              background: "#E8924A",
              color: "white",
              padding: "12px 28px",
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(232,146,74,0.35)",
              letterSpacing: "-0.01em",
            }}
          >
            메인 페이지로 돌아가기
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M8 3l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div
          style={{
            paddingTop: 20,
            borderTop: "1px solid #EDE0C8",
          }}
        >
          <p
            className="font-bold"
            style={{ fontSize: "0.78rem", color: "#7B6545", marginBottom: 12 }}
          >
            카테고리별로 바로 가기
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              justifyContent: "center",
            }}
          >
            {categories.map((c) => (
              <Link
                key={c.id}
                href={`/#cat-${c.id}`}
                className="inline-flex items-center font-bold rounded-full"
                style={{
                  fontSize: "0.78rem",
                  background: "#F7F4F0",
                  color: "#7B6545",
                  border: "1px solid #EDE0C8",
                  padding: "6px 12px",
                  textDecoration: "none",
                }}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
