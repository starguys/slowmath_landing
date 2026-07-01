import { type Locale } from "../_home/apps";
import { buildJsonLd } from "./structuredData";

/**
 * 로케일별 JSON-LD(@graph)를 <script type="application/ld+json"> 로 렌더하는 서버 컴포넌트.
 * 각 랜딩 페이지(/·/en)가 자기 언어 데이터를 직접 넣어, EN 페이지에 KO 구조화 데이터가
 * 나가는 문제를 없앤다. (<는 < 로 이스케이프해 스크립트 탈출 방지)
 */
export default function JsonLd({ locale }: { locale: Locale }) {
  const data = buildJsonLd(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
