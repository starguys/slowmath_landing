import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://slowkids.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const langs = {
    ko: `${BASE_URL}/`,
    en: `${BASE_URL}/en`,
    "x-default": `${BASE_URL}/`,
  };
  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: { languages: langs },
    },
    {
      url: `${BASE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: langs },
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/account-deletion`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
