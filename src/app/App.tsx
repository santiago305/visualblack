import './styles/app.css'

import { AppRoutes } from '@/routes'
import Layout from '@/shared/components/layout/Layout'

export function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  )
}
