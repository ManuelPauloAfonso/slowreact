import './App.css'

import {
  createRouter,
  RouterProvider,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router'

import GettingStarted from '../docs/getting-started.mdx'
import Doc01 from '../docs/01-unnecessary-rerenders.mdx'
import { DocsLayout } from './layouts/DocsLayout'

const rootRoute = createRootRoute({
  component: DocsLayout,
})

const gettingStartedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <GettingStarted />,
})

const doc01Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/docs/01',
  component: () => <Doc01 />,
})

const router = createRouter({
  routeTree: rootRoute.addChildren([gettingStartedRoute, doc01Route]),
})

export default function App() {
  return <RouterProvider router={router} />
}
