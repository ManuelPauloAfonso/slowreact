# 01 - Slow Interactions

## What is happening

This component renders a list of items and allows the user to interact with each one. Open the app, interact with the list, and watch what happens in the React Developer Tools Profiler.

## What to look for

Open React Developer Tools, go to the Profiler tab, click Record, interact with the list, and stop recording. Look at which components are rendering on each interaction and how many times they render.

## Hints

- Not every component in the tree needs to re-render when the parent updates
- React has a way to tell a component to skip re-rendering when its props have not changed
- Functions and objects created inline in the parent get a new reference on every render

## References

- https://react.dev/reference/react/memo
- https://react.dev/reference/react/useMemo
- https://react.dev/reference/react/useCallback
- https://www.debugbear.com/blog/measuring-react-app-performance
