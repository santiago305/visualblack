import { AboutPage, ContactPage, HomePage, NotFoundPage, PortfolioDetailPage, PortfolioPage, StorageSolutionsPage } from '@/pages'

import { PATHS } from './paths'
import type { AppRoute } from './types'

export const appRoutes: AppRoute[] = [
  {
    key: 'home',
    label: 'Inicio',
    path: PATHS.home,
    component: HomePage,
  },
  {
    key: 'portfolio',
    label: 'Portafolio',
    path: PATHS.portfolio,
    component: PortfolioPage,
  },
  {
    key: 'portfolio-detail',
    label: 'Detalle del portafolio',
    path: PATHS.portfolioDetailPattern,
    component: PortfolioDetailPage,
  },
  {
    key: 'about',
    label: 'Nosotros',
    path: PATHS.about,
    component: AboutPage,
  },
  {
    key: 'contact',
    label: 'Contacto',
    path: PATHS.contact,
    component: ContactPage,
  },
  {
    key: 'services',
    label: 'Servicios',
    path: PATHS.serviceDetailPattern,
    component: StorageSolutionsPage,
  },
  {
    key: 'not-found',
    label: 'No encontrado',
    path: '*',
    component: NotFoundPage,
  },
]
