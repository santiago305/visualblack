export const PATHS = {
  home: '/',
  about: '/nosotros',
  contact: '/contacto',
  portfolio: '/portafolio',
  portfolioDetailPattern: '/portafolio/:slug',
  portfolioDetail: (slug: string) => `/portafolio/${slug}`,
  services: '/servicios',
  serviceDetailPattern: '/servicios/:slug',
  serviceDetail: (slug: string) => `/servicios/${slug}`,
} as const
