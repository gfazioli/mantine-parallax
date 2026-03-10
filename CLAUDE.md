# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@gfazioli/mantine-parallax` is a Mantine UI extension that provides an interactive parallax/3D tilt effect component (Apple TV card style). It supports hover-driven rotation, background parallax, content parallax layers, light effects, scroll-driven transformations, and initial static transforms.

## Commands

| Command | Purpose |
|---------|---------|
| `yarn build` | Build the package via Rollup (outputs to `package/dist/`) |
| `yarn dev` | Start Next.js docs dev server on port 9281 |
| `yarn test` | Full test suite: syncpack + prettier + typecheck + lint + jest |
| `yarn jest` | Run only Jest tests |
| `yarn jest --testPathPattern=Parallax` | Run a single test file |
| `yarn lint` | ESLint + Stylelint |
| `yarn eslint` | ESLint only |
| `yarn typecheck` | TypeScript type checking (root + docs) |
| `yarn prettier:check` | Check formatting |
| `yarn prettier:write` | Fix formatting |
| `yarn docgen` | Generate component API docs from TSDoc comments |
| `yarn clean && yarn build` | Clean rebuild |
| `yarn storybook` | Start Storybook on port 8271 |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn release:patch` | Bump patch version + deploy docs |

## Architecture

**Yarn workspaces** with two packages:
- `package/` — the published npm package
- `docs/` — Next.js documentation site

### Component Source (`package/src/`)

Single component architecture — all source lives in `package/src/`:
- `Parallax.tsx` — main component using `polymorphicFactory` from Mantine. Uses `useMouse` hook to track cursor position and compute 3D transforms via inline styles. Three style layers: `root` (the card with transforms), `content` (children wrapper), `light` (gradient overlay).
- `Parallax.module.css` — CSS modules (hashed with `hash-css-selector` via `me` prefix)
- `index.ts` — public exports: `Parallax` component + types (`ParallaxBaseProps`, `ParallaxProps`, `ParallaxFactory`, `ParallaxStylesNames`)

### Build Pipeline

Rollup builds both ESM (`.mjs`) and CJS (`.cjs`) outputs with:
- `esbuild` for transpilation
- `postcss` with Mantine preset for CSS modules (scoped names via `hash-css-selector`)
- `'use client'` banner on non-index chunks
- CSS extracted to `package/dist/styles.css` and `styles.layer.css`

### Docs (`docs/`)

- Next.js 15 site deployed to GitHub Pages
- `docs/demos/` — interactive demo files following `Parallax.demo.<name>.tsx` naming
- `docs/pages/index.tsx` — single-page docs
- `docs/components/` — shared shell components (Shell, Footer, Logo)

### Testing

- Jest with `jsdom` environment and `@mantine-tests/core` render utilities
- Tests in `package/src/Parallax.test.tsx`
- Note: hover/mouse interaction tests are limited in jsdom because `useMouse` requires a real DOM — full interaction testing needs E2E (Playwright/Cypress)

## Key Patterns

- The component uses Mantine's `polymorphicFactory` pattern — it accepts a `component` prop for custom root elements and forwards refs.
- Props interface is split: `ParallaxBaseProps` (parallax-specific) + `BoxProps` + `StylesApiProps` = `ParallaxProps`.
- Default props are defined as a `defaultProps` object with `satisfies Partial<ParallaxProps>` and consumed via `useProps`.
- Perspective values >= 10000 are treated as `'none'` (effectively disabling perspective).
- The component wraps content in a double-Box structure: outer Box captures mouse events via `useMouse` ref, inner Box applies transforms via `getStyles('root')`.
- `backgroundPosition` is only set when `backgroundImage` is provided, to avoid React 19 shorthand/longhand CSS conflicts with Mantine's `bg` prop.
- `contentParallax` uses `React.Children.map` + `cloneElement` to inject per-child transform styles based on child index.

## Known Limitations

- Mouse-only: no touch/gyroscope support for mobile devices.
- No `prefers-reduced-motion` support.
- `transition: 'all ...'` on root can cause unintended transitions on properties changed by the consumer.
- `useEffect` with `useMouse` coordinates triggers `setRotation`/`setLightPosition` on every mouse move (no throttle/RAF).
