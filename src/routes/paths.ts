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

export const SERVICE_SLUGS = {
  marketingDigital: 'marketing-digital',
  campanasPublicitarias: 'campanas-publicitarias',
  gestionRedes: 'gestion-redes',
  desarrolloWeb: 'desarrollo-web',
} as const

export const NAV_LINKS = [
  { name: 'Inicio', path: PATHS.home },
  { name: 'Portafolio', path: PATHS.portfolio },
  { name: 'Nosotros', path: PATHS.about },
  { name: 'Contacto', path: PATHS.contact },
] as const

export const SERVICE_LINKS = [
  {
    name: 'Marketing Digital',
    path: PATHS.serviceDetail(SERVICE_SLUGS.marketingDigital),
    icon: '📊',
  },
  {
    name: 'Campañas Publicitarias',
    path: PATHS.serviceDetail(SERVICE_SLUGS.campanasPublicitarias),
    icon: '📢',
  },
  {
    name: 'Gestión de Redes Sociales',
    path: PATHS.serviceDetail(SERVICE_SLUGS.gestionRedes),
    icon: '📱',
  },
  {
    name: 'Desarrollo Web',
    path: PATHS.serviceDetail(SERVICE_SLUGS.desarrolloWeb),
    icon: '💻',
  },
] as const
