# Contributing

Contributions are welcome. If you have a real React performance problem you have seen in production or learned from, add it here.

## How to add a problem

### 1. Create a folder

Inside `src/problems/`, create a new folder following the naming convention:

```
src/problems/07-your-problem-name/
```

Use the next available number and a short descriptive name in kebab-case.

### 2. Create Problem.tsx

This file must contain the intentionally bad code. The problem should be visible and reproducible. Write it as if it were real application code, not a toy example.

Rules for Problem.tsx:

- Must be a working React component
- Must clearly demonstrate the performance issue
- Must not contain comments pointing out what is wrong
- Must not contain the solution

### 3. Create README.md

This file explains the problem to whoever is trying to solve it. Follow this structure:

```md
# Problem name

## What is happening

Describe what the component does and what the user can observe.

## What to look for

Tell the person which tool to use and what to look for, without giving away the fix.

## Hints

Give 2 or 3 hints that guide without solving.

## References

Link to relevant React documentation.
```

### 4. Open a pull request

- Title: `add: 07-your-problem-name`
- Description: explain the problem in one or two sentences and where you have seen it in the real world

## Rules

- Do not include the solution in your PR
- One problem per PR
- The problem must be reproducible without any extra setup
- Do not add new dependencies unless strictly necessary for the problem to make sense
