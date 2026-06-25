import type { Item } from '../types/Item'

// ponytail: 5000 rows so the perf problems (re-renders, no virtualization,
// unthrottled filtering) are actually visible in the Profiler. Bump higher if
// your machine is too fast to feel the jank.
export const items: Item[] = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}))
