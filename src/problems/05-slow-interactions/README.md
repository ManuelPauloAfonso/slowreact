# 05 - Slow Interactions

## What is happening

This component filters a large list on every keystroke. React processes the input update and the list re-render with the same priority, blocking the main thread until the filter completes. Type into the input and notice how it feels sluggish.

## What to look for

Open Chrome DevTools, go to the Performance tab, click Record, type into the input, and stop recording. Look at the main thread activity you should see long tasks blocking the input from feeling responsive.

## Hints

- React processes all state updates with the same priority by default
- `useTransition` lets you mark the list update as non-urgent, keeping the input responsive
- `useDeferredValue` is the right choice when the value comes from props instead of local state
- The input update should always feel instant — the list can wait

## References

- https://react.dev/reference/react/useTransition
- https://react.dev/reference/react/useDeferredValue
- https://react.dev/blog/2022/03/29/react-v18#new-feature-transitions
- https://www.debugbear.com/blog/measuring-react-app-performance
