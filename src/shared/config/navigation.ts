import { PATHS } from '@/routes/paths'

export const navigationItems = [
  { label: 'Inicio', href: PATHS.home },
  // { label: 'Portafolio', href: PATHS.portfolio },
  { label: 'Nosotros', href: PATHS.about },
  { label: 'Contacto', href: PATHS.contact },
] as const
