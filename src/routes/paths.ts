export const PATHS = {
  home: "/",
  about: "/nosotros",
  contact: "/contacto",
  portfolio: "/portafolio",
  portfolioDetailPattern: "/portafolio/:slug",
  portfolioDetail: (slug: string) => `/portafolio/${slug}`,
  services: "/servicios",
  serviceDetailPattern: "/servicios/:slug",
  serviceDetail: (slug: string) => `/servicios/${slug}`,
} as const;

export const NAV_LINKS = [
  { name: "Inicio", path: PATHS.home },
  { name: "Portafolio", path: PATHS.portfolio },
  { name: "Nosotros", path: PATHS.about },
  { name: "Contacto", path: PATHS.contact },
] as const;
