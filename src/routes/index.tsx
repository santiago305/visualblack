import { AboutPage, ContactPage, HomePage, NotFoundPage, PortfolioDetailPage, PortfolioPage, StorageSolutionsPage } from '@/pages'

import { PATHS } from './paths'
import type { AppRoute, PageComponent } from './types'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

const routes: AppRoute[] = [
  {
    key: 'home',
    label: 'Home',
    match: (pathname) => pathname === PATHS.home,
    component: HomePage,
  },
  {
    key: 'about',
    label: 'About',
    match: (pathname) => pathname === PATHS.about,
    component: AboutPage,
  },
  {
    key: 'contact',
    label: 'Contact',
    match: (pathname) => pathname === PATHS.contact,
    component: ContactPage,
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    match: (pathname) => pathname === PATHS.portfolio,
    component: PortfolioPage,
  },
  {
    key: 'storage-solutions',
    label: 'Storage Solutions',
    match: (pathname) => pathname === PATHS.storageSolutions,
    component: StorageSolutionsPage,
  },
  {
    key: 'portfolio-detail',
    label: 'Portfolio Detail',
    match: (pathname) => pathname.startsWith(`${PATHS.portfolio}/`) && pathname !== PATHS.portfolio,
    component: PortfolioDetailPage,
  },
]

export function getRoutes() {
  return routes
}

export function resolveRoute(pathname: string): PageComponent {
  const normalizedPath = normalizePath(pathname)
  const matchedRoute = routes.find((route) => route.match(normalizedPath))

  return matchedRoute?.component ?? NotFoundPage
}

export { PATHS }
