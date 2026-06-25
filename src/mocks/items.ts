import type { Item } from '../types/Item'

// 20000 rows so the list-heavy exercises (virtualization, slow filtering,
// mass re-renders) are genuinely slow. Bump higher if your machine is too fast
// to feel the jank.
export const items: Item[] = Array.from({ length: 20000 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}))
