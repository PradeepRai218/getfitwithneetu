import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { buildCanonical, buildTitle, normalizeDescription, SEO } from "@/lib/seo";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
  noindex?: boolean;
};

export function Seo({
  title,
  description,
  image,
  canonicalPath,
  noindex,
}: SeoProps) {
  const location = useLocation();
  const finalTitle = buildTitle(title);
  const finalDescription = normalizeDescription(description);
  const canonical = buildCanonical(canonicalPath ?? location.pathname);
  const ogImage = image ?? SEO.defaultOgImage;

  return (
    <Helmet prioritizeSeoTags>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonical} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

