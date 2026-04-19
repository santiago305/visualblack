import { PATHS } from '@/routes/paths'

export const navigationItems = [
  { label: 'Home', href: PATHS.home },
  { label: 'About', href: PATHS.about },
  { label: 'Contact', href: PATHS.contact },
  { label: 'Portfolio', href: PATHS.portfolio },
  { label: 'Storage Solutions', href: PATHS.storageSolutions },
] as const
