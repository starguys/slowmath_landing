import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://slowkids.net";

// 매 빌드마다 new Date() 로 바뀌면 크롤러가 잦은 변경으로 오인 → 실제 개편 시점으로 고정.
const LAST_MODIFIED = "2026-07-01";

export default function sitemap(): MetadataRoute.Sitemap {
  // 홈 canonical/hreflang 은 Next 가 슬래시 없이 정규화(https://slowkids.net)하므로 sitemap 도 맞춘다.
  const homeLangs = {
    ko: BASE_URL,
    en: `${BASE_URL}/en`,
    ja: `${BASE_URL}/jp`,
    "x-default": BASE_URL,
  };
  const privacyLangs = {
    ko: `${BASE_URL}/privacy`,
    en: `${BASE_URL}/en/privacy`,
    ja: `${BASE_URL}/jp/privacy`,
    "x-default": `${BASE_URL}/privacy`,
  };
  const termsLangs = {
    ko: `${BASE_URL}/terms`,
    en: `${BASE_URL}/en/terms`,
    ja: `${BASE_URL}/jp/terms`,
    "x-default": `${BASE_URL}/terms`,
  };
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: { languages: homeLangs },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: homeLangs },
    },
    {
      url: `${BASE_URL}/jp`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: homeLangs },
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: { languages: privacyLangs },
    },
    {
      url: `${BASE_URL}/en/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: { languages: privacyLangs },
    },
    {
      url: `${BASE_URL}/jp/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: { languages: privacyLangs },
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: { languages: termsLangs },
    },
    {
      url: `${BASE_URL}/en/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: { languages: termsLangs },
    },
    {
      url: `${BASE_URL}/jp/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: { languages: termsLangs },
    },
    {
      url: `${BASE_URL}/account-deletion`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
