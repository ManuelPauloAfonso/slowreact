# 06 - Costly Hydration

## What is happening

This component renders a page with multiple sections. All of them block the main thread during hydration — including heavy sections the user may never scroll to. The page looks ready but interactions are delayed until hydration completes.

## What to look for

In a real SSR app, open Chrome DevTools, go to the Performance tab, and look for a long blocking task right after the initial paint. That is hydration at work. In this exercise, `HeavySection` simulates an expensive component by blocking the main thread for 400ms.

## Hints

- SSR sends HTML fast, but hydration still runs JavaScript on the client
- Hydrating everything at once blocks interactions until the full tree is processed
- `<Suspense>` lets you defer hydration of non-critical sections
- React hydrates `<Suspense>` boundaries independently — urgent ones first
- Content inside `<Suspense>` can be deferred without blocking the rest of the page

## References

- https://react.dev/reference/react/Suspense
- https://react.dev/blog/2022/03/29/react-v18#suspense-in-react-18
- https://github.com/reactwg/react-18/discussions/37
- https://www.debugbear.com/blog/measuring-react-app-performance
