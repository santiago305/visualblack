import type { ReactNode } from 'react'

import { navigationItems } from '@/shared/config/navigation'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <nav className="app-shell__nav" aria-label="Main navigation">
          <a className="app-shell__brand" href="/">
            Visual Black
          </a>

          <div className="app-shell__links">
            {navigationItems.map((item) => (
              <a key={item.href} className="app-shell__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="app-shell__main">{children}</main>
    </div>
  )
}
