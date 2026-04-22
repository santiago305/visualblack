import type { Service } from "@/features/services/types/service.types";
import { PATHS } from "@/routes/paths";

import { SEO_CONFIG, toAbsoluteUrl } from "./seo.config";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SEO_CONFIG.organizationName,
    url: SEO_CONFIG.siteUrl,
    logo: toAbsoluteUrl("/logo.svg"),
    email: SEO_CONFIG.email,
    telephone: SEO_CONFIG.phone,
    areaServed: SEO_CONFIG.country,
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    inLanguage: "es-CO",
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function createAboutBreadcrumbSchema() {
  return createBreadcrumbSchema([
    { name: "Inicio", path: PATHS.home },
    { name: "Nosotros", path: PATHS.about },
  ]);
}

export function createContactBreadcrumbSchema() {
  return createBreadcrumbSchema([
    { name: "Inicio", path: PATHS.home },
    { name: "Contacto", path: PATHS.contact },
  ]);
}

export function createServiceBreadcrumbSchema(service: Service) {
  return createBreadcrumbSchema([
    { name: "Inicio", path: PATHS.home },
    { name: service.title, path: PATHS.serviceDetail(service.slug) },
  ]);
}

export function createServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    areaServed: SEO_CONFIG.country,
    provider: {
      "@type": "Organization",
      name: SEO_CONFIG.organizationName,
      url: SEO_CONFIG.siteUrl,
    },
    image: service.image,
    url: toAbsoluteUrl(PATHS.serviceDetail(service.slug)),
  };
}
