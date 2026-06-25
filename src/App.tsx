import './App.css'

import {
  createRouter,
  RouterProvider,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router'
import type { FC } from 'react'

import { DocsLayout } from './layouts/DocsLayout'
import Home from '../docs/home/index.mdx'

const rootRoute = createRootRoute({
  component: DocsLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
})

const docModules = import.meta.glob('../docs/**/*.mdx', {
  eager: true,
}) as Record<string, { default: FC }>

const docRoutes = Object.entries(docModules)
  .filter(([path]) => !path.includes('/home/'))
  .map(([path, mod]) => {
    const slug = path.replace('../docs/', '').replace('.mdx', '')
    const Component = mod.default
    return createRoute({
      getParentRoute: () => rootRoute,
      path: `/docs/${slug}`,
      component: () => <Component />,
    })
  })

// Mount each exercise as a live, editable route so it can actually be profiled.
const problemModules = import.meta.glob('./problems/*/Problem.tsx', {
  eager: true,
}) as Record<string, { default: FC }>

const problemRoutes = Object.entries(problemModules).map(([path, mod]) => {
  const slug = path.replace('./problems/', '').replace('/Problem.tsx', '')
  const Component = mod.default
  return createRoute({
    getParentRoute: () => rootRoute,
    path: `/problems/${slug}`,
    component: () => (
      <div className="max-w-3xl mx-auto px-12 py-10">
        <Component />
      </div>
    ),
  })
})

const router = createRouter({
  routeTree: rootRoute.addChildren([
    indexRoute,
    ...docRoutes,
    ...problemRoutes,
  ]),
})

export default function App() {
  return <RouterProvider router={router} />
}
