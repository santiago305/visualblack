import type { Service } from "@/features/services/types/service.types";
import { PATHS } from "@/routes/paths";

import { SEO_CONFIG, toAbsoluteUrl } from "./seo.config";

export type SeoMetadata = {
  title: string;
  description: string;
  keywords: string[];
  robots: string;
  canonical: string | null;
  url: string | null;
  image: string;
  imageAlt: string;
  openGraphType: "website";
  locale: string;
  siteName: string;
};

type BuildMetadataInput = {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string | null;
  image?: string;
  imageAlt?: string;
  robots?: string;
};

export function buildMetadata({
  title,
  description,
  keywords,
  path = null,
  image,
  imageAlt,
  robots,
}: BuildMetadataInput = {}): SeoMetadata {
  const fullTitle = title
    ? `${title} | ${SEO_CONFIG.siteName}`
    : `${SEO_CONFIG.defaultTitle} | ${SEO_CONFIG.siteName}`;
  const canonical = path ? toAbsoluteUrl(path) : null;
  const finalDescription = description ?? SEO_CONFIG.defaultDescription;

  return {
    title: fullTitle,
    description: finalDescription,
    keywords: keywords ?? [...SEO_CONFIG.defaultKeywords],
    robots: robots ?? SEO_CONFIG.defaultRobots,
    canonical,
    url: canonical,
    image: toAbsoluteUrl(image ?? SEO_CONFIG.ogImagePath),
    imageAlt: imageAlt ?? SEO_CONFIG.organizationName,
    openGraphType: "website",
    locale: SEO_CONFIG.locale,
    siteName: SEO_CONFIG.siteName,
  };
}

export function buildServiceMetadata(service: Service) {
  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} colombia`,
      "visualblack",
      "servicios digitales",
      "agencia digital",
    ],
    path: PATHS.serviceDetail(service.slug),
    image: service.image,
    imageAlt: service.title,
  });
}
