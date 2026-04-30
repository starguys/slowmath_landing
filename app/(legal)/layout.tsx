import Link from "next/link";
import "./legal.css";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        background: "#F7F4F0",
        minHeight: "100vh",
        padding: "32px 16px 64px",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-bold rounded-full"
          style={{
            fontSize: "0.85rem",
            background: "white",
            color: "#7B6545",
            border: "1px solid #EDE0C8",
            padding: "8px 16px",
            textDecoration: "none",
            marginBottom: 20,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M13 8H3M8 3 3 8l5 5" stroke="#7B6545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          메인으로 돌아가기
        </Link>
        <article
          style={{
            background: "white",
            borderRadius: 24,
            padding: "40px 28px",
            boxShadow: "0 12px 36px rgba(45,38,32,0.06)",
            border: "1px solid #EDE0C8",
          }}
          className="legal-article"
        >
          {children}
        </article>
      </div>
    </main>
  );
}
