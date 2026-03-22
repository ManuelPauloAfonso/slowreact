# 04 - Heavy Bundle

## What is happening

This component imports `chart.js` using the default entry point, which registers every chart type, scale, and plugin — even the ones never used. Open Chrome DevTools, run a Lighthouse audit, and click View Treemap to see how much of the bundle comes from this single import.

## What to look for

Run a Lighthouse audit in Chrome DevTools and click the View Treemap button. Look at how much of the bundle is occupied by `chart.js`. Then check how much of that code is actually used by the component.

## Hints

- Importing from `chart.js/auto` loads everything, even unused chart types
- Tree shaking only works when unused code is never imported in the first place
- Import only the specific controllers, scales, and elements you need
- Use Rollup Plugin Visualizer or Lighthouse Treemap to identify heavy dependencies

## References

- https://bundlephobia.com/package/chart.js
- https://web.dev/articles/reduce-javascript-payloads-with-tree-shaking
- https://www.debugbear.com/blog/measuring-react-app-performance
