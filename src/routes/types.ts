import type { ReactElement } from 'react'

export type PageComponent = () => ReactElement

export type AppRoute = {
  key: string
  label: string
  match: (pathname: string) => boolean
  component: PageComponent
}
