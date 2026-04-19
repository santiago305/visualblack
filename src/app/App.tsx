import { resolveRoute } from '@/routes'
import { MainLayout } from '@/shared/components/layout/MainLayout'

export function App() {
  const CurrentPage = resolveRoute(window.location.pathname)

  return (
    <MainLayout>
      <CurrentPage />
    </MainLayout>
  )
}
