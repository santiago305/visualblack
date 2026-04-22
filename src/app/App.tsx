import './styles/app.css'

import { StructuredData } from '@/components/seo'
import { createOrganizationSchema, createWebsiteSchema } from '@/lib/seo'
import { AppRoutes } from '@/routes'
import Layout from '@/shared/components/layout/Layout'
import { Toaster } from '@/shared/components/ui/toaster'

export function App() {
  return (
    <>
      <StructuredData id="organization" data={createOrganizationSchema()} />
      <StructuredData id="website" data={createWebsiteSchema()} />
      <Layout>
        <AppRoutes />
      </Layout>
      <Toaster />
    </>
  )
}
