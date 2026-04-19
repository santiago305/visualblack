import { Route, Routes } from 'react-router-dom'

import { appRoutes } from './config'

export function AppRoutes() {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.key} path={route.path} Component={route.component} />
      ))}
    </Routes>
  )
}
