const IOS_KR = "https://apps.apple.com/kr/app/id6763979294";
const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.everydaysummers.slowkids";

const badgeStyle = { height: 40, width: "auto", display: "block" } as const;

/** 모바일 sticky 하단 다운로드 바 — 데스크탑(sm 이상)에서는 숨김 */
export default function StickyDownloadBar() {
  return (
    <div
      className="sm:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "white",
        borderTop: "1px solid #EDE0C8",
        padding: "8px 12px",
        paddingBottom: "calc(8px + env(safe-area-inset-bottom))",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.06)",
        zIndex: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <a
        href={IOS_KR}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store에서 느린아이 다운로드"
      >
        <img src="/badge-apple.png" alt="Download on the App Store" style={badgeStyle} />
      </a>
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play에서 느린아이 다운로드"
      >
        <img src="/badge-google.png" alt="Get it on Google Play" style={badgeStyle} />
      </a>
      <span
        style={{
          color: "#7B6545",
          fontSize: "0.8rem",
          fontWeight: 700,
          marginLeft: 4,
          whiteSpace: "nowrap",
        }}
      >
        무료 체험
      </span>
    </div>
  );
}
