# Slow React

A collection of real React performance problems for you to solve.

Each problem is intentionally written with bad practices. Your job is to identify what is wrong and fix it using React best practices.

## Motivation

I created this repository as a personal way to practice React performance topics that have come up in technical interviews. The inspiration came from the article [How to Measure and Optimize React Performance](https://www.debugbear.com/blog/measuring-react-app-performance) by Anna Monus, from which I learned a lot. If you haven't read it, start there.

Most React performance content shows you the solution. This project shows you the problem and lets you figure out the rest. The goal is to build muscle memory for spotting performance issues in real codebases.

## Problems

| #   | Problem                | Concept                         |
| --- | ---------------------- | ------------------------------- |
| 01  | Unnecessary Re-renders | memo, useMemo, useCallback      |
| 02  | Bad State Placement    | state colocation, prop drilling |
| 03  | List Virtualization    | windowing, react-window         |
| 04  | Heavy Bundle           | tree shaking, lazy imports      |
| 05  | Slow Interactions      | useTransition, useDeferredValue |
| 06  | Costly Hydration       | SSR, React Server Components    |

## Getting started

```bash
git clone https://github.com/your-username/slow-react
cd slow-react
pnpm install
pnpm dev
```

## How to work on a problem

1. Open the problem folder inside `src/problems/`
2. Read the `README.md` inside the folder
3. Open `Problem.tsx` and identify what is wrong
4. Fix it directly in the file
5. Use React Developer Tools Profiler to validate your solution

## Stack

- Vite
- React 19
- TypeScript

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
