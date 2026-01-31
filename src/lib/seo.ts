export const SEO = {
  siteName: "Get Fit With Sankalp",
  defaultTitle: "Get Fit With Sankalp | Fitness, Nutrition & Wellness Expert",
  defaultDescription:
    "Transform your body and mind with personalized fitness training, expert nutrition guidance, and holistic wellness support from certified trainer Sankalp in Mumbai.",
  // Set this in `.env` as VITE_SITE_URL="https://yourdomain.com"
  baseUrl: import.meta.env.VITE_SITE_URL as string | undefined,
  defaultOgImage: "https://lovable.dev/opengraph-image-p98pqg.png",
} as const;

export function buildTitle(pageTitle?: string) {
  if (!pageTitle) return SEO.defaultTitle;
  const trimmed = pageTitle.trim();
  if (!trimmed) return SEO.defaultTitle;
  if (trimmed.includes(SEO.siteName)) return trimmed;
  return `${trimmed} | ${SEO.siteName}`;
}

export function normalizeDescription(description?: string) {
  const text = (description ?? "").replace(/\s+/g, " ").trim();
  if (!text) return SEO.defaultDescription;
  // keep it roughly search-snippet friendly
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}...` : text;
}

export function getBaseUrl() {
  return SEO.baseUrl?.replace(/\/$/, "") || window.location.origin;
}

export function buildCanonical(pathname?: string) {
  const base = getBaseUrl();
  const path = pathname?.startsWith("/") ? pathname : `/${pathname ?? ""}`;
  return `${base}${path}`.replace(/\/+$/, "/").replace(/\/$/, path === "/" ? "/" : "");
}

