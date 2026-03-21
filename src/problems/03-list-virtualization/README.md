# 03 - List Virtualization

## What is happening

This component renders a list of 1,000 items using a standard `.map()`. The browser mounts every DOM node at once — including the ones that are completely off-screen. Scroll through the list and open the Performance tab in Chrome DevTools to see the impact.

## What to look for

Open React Developer Tools, go to the Profiler tab, click Record, scroll through the list, and stop recording. Then open the Chrome DevTools Performance tab and look at the number of DOM nodes being rendered on the initial mount.

## Hints

- The browser renders every item in the list, even the ones you can't see
- List virtualization (windowing) renders only the items visible in the viewport
- `react-window` is a well-tested library that handles this without scroll jank or memory leaks
- Only virtualize if profiling confirms the list is the bottleneck — for small lists it adds unnecessary complexity

## References

- https://react-window.vercel.app
- https://web.dev/articles/virtualize-long-lists-react-window
- https://www.debugbear.com/blog/measuring-react-app-performance
