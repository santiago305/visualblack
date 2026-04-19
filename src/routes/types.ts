import type { ComponentType } from 'react'

export type AppRoute = {
  key: string
  label: string
  path: string
  component: ComponentType
}
