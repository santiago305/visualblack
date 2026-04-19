export const PATHS = {
  home: '/',
  about: '/about',
  contact: '/contact',
  portfolio: '/portfolio',
  storageSolutions: '/storage-solutions',
  portfolioDetail: (slug: string) => `/portfolio/${slug}`,
} as const
