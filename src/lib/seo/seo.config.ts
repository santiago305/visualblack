export const SEO_CONFIG = {
  siteName: "visualblack",
  siteUrl: "https://visualblack.es",
  locale: "es_CO",
  defaultTitle: "Agencia digital y desarrollo web en Colombia",
  defaultDescription:
    "Visualblack impulsa marcas con marketing digital, campañas publicitarias, gestión de redes sociales y desarrollo web enfocado en resultados.",
  defaultKeywords: [
    "agencia digital colombia",
    "marketing digital colombia",
    "desarrollo web colombia",
    "gestión de redes sociales",
    "campañas publicitarias",
    "visualblack",
  ],
  defaultRobots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  themeColor: "#0d0d0d",
  ogImagePath: "/og-default.svg",
  organizationName: "visualblack",
  email: "info@visualblack.es",
  phone: "+51 939 780 945",
  country: "Colombia",
} as const;

export function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, SEO_CONFIG.siteUrl).toString();
}
