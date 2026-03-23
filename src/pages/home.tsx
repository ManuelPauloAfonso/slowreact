import { ArrowRightIcon, ZapIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const exercises = [
  {
    path: '/docs/01-unnecessary-rerenders',
    label: 'Unnecessary Re-renders',
    description: "Components re-rendering when they don't need to",
  },
  {
    path: '/docs/02-bad-state-placement',
    label: 'Bad State Placement',
    description: 'State living in the wrong part of the tree',
  },
  {
    path: '/docs/03-list-virtualization',
    label: 'List Virtualization',
    description: 'Rendering too many DOM nodes at once',
  },
  {
    path: '/docs/04-heavy-bundle',
    label: 'Heavy Bundle',
    description: 'Loading too much JavaScript upfront',
  },
  {
    path: '/docs/05-slow-interactions',
    label: 'Slow Interactions',
    description: 'UI feeling sluggish on user input',
  },
  {
    path: '/docs/06-costly-hydration',
    label: 'Costly Hydration',
    description: 'Server-side rendering hydration issues',
  },
]

export function Home() {
  return (
    <div>
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <ZapIcon className="size-6 text-yellow-500" />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Performance Workshop
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Slow React</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of React performance problems for you to diagnose and
          fix. Each exercise contains a broken component — your job is to find
          the issue and optimize it using React DevTools.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
          Exercises
        </h2>
        <div className="grid gap-3">
          {exercises.map((ex, i) => (
            <Link
              key={ex.path}
              to={ex.path}
              className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-muted-foreground w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-medium text-sm">{ex.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ex.description}
                  </p>
                </div>
              </div>
              <ArrowRightIcon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
