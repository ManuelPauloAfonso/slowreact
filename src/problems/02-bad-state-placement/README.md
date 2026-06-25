# 02 - Bad State Placement

## What is happening

This component stores the search input state in the parent, even though only the search box needs it. Type in the input and watch what happens in the React Developer Tools Profiler components that don't use the value still re-render.

## What to look for

Open React Developer Tools, go to the Profiler tab, click Record, type in the search input, and stop recording. Look at which components are rendering on each keystroke and ask yourself: should `Chart` and `Summary` be re-rendering at all?

## Hints

- State should live as close as possible to where it is used
- Ask yourself: does `Chart` or `Summary` actually need the `search` value?
- The fix here is moving state down, not memoizing everything
- Lifting state is only justified when multiple components need the same value

## References

- https://react.dev/learn/sharing-state-between-components
- https://react.dev/learn/lifting-state-up
- https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster
