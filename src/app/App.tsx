import './styles/app.css'

import { AppRoutes } from '@/routes'
import Layout from '@/shared/components/layout/Layout'
import { Toaster } from '@/shared/components/ui/toaster'

export function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
      <Toaster />
    </>
  )
}
