# 07 - Context Value Churn

## What is happening

A settings context wraps a large list of rows. The rows are already wrapped in
`React.memo`, and the values they read (`user`, `theme`) never change. Yet
clicking the unrelated "Tick" button re-renders every single row. Open the React
Developer Tools Profiler, record one click, and watch the whole list light up.

## What to look for

Open the Profiler, record a single click on "Tick", and look at how many
components commit. The button's `count` is the only state that changed, but the
entire list re-renders anyway. Ask yourself what the provider hands to its
consumers on every render.

## Hints

- A context consumer re-renders whenever the context value changes by identity, even if the data inside is the same
- `{ user, theme }` is a brand new object every time the provider renders
- `React.memo` on the rows cannot help when the value they consume gets a new reference each render
- The values themselves (`user`, `theme`) never actually change

## References

- https://react.dev/reference/react/useMemo
- https://react.dev/reference/react/createContext
- https://www.debugbear.com/blog/measuring-react-app-performance
