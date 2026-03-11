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

All source lives in `package/src/`:
- `Parallax.tsx` — main component using `polymorphicFactory` from Mantine. Uses native `onMouseMove`/`onTouchMove` events with `requestAnimationFrame` throttling to compute 3D transforms. Supports `prefers-reduced-motion` via `useMediaQuery`. Three style layers: `root` (the card with transforms), `content` (children wrapper), `light` (gradient overlay). Exposes `Parallax.Layer` compound component.
- `ParallaxLayer.tsx` — compound component (`Parallax.Layer`) with `depth` prop for per-element parallax. Consumes `ParallaxContext` for rotation/transition data.
- `ParallaxContext.ts` — React context providing rotation state, transition config, and hover status to `Parallax.Layer` children.
- `Parallax.module.css` — CSS modules (hashed with `hash-css-selector` via `me` prefix)
- `index.ts` — public exports: `Parallax`, `ParallaxLayer`, `ParallaxContext`, `useParallaxContext` + all types

### Build Pipeline

Rollup builds both ESM (`.mjs`) and CJS (`.cjs`) outputs with:
- `esbuild` for transpilation
- `postcss` with Mantine preset for CSS modules (scoped names via `hash-css-selector`)
- `'use client'` banner on non-index chunks
- CSS extracted to `package/dist/styles.css` and `styles.layer.css`

### Docs (`docs/`)

- Next.js 15 site deployed to GitHub Pages
- `docs/demos/` — interactive demo files following `Parallax.demo.<name>.tsx` naming
- `docs/pages/index.tsx` — single-page docs, `componentsProps` array controls which components appear in the Props tab
- `docs/components/` — shared shell components (Shell, Footer, Logo)
- `docs/styles-api/` — Styles API definitions (selectors, vars, modifiers) per component
- `scripts/docgen.ts` — generates `docs/docgen.json` from component TSDoc via `mantine-docgen-script`. When adding new components, add them to `componentsPaths` array.

### Important: When adding new components or compound components

1. Add the source file to `scripts/docgen.ts` → `componentsPaths` array
2. Run `yarn docgen` to regenerate `docs/docgen.json`
3. Add the component name to `componentsProps` in `docs/pages/index.tsx`
4. If the component uses `useStyles`/CSS modules, add a styles-api entry in `docs/styles-api/`
5. Run `yarn build` before `yarn test` so docs typecheck picks up new types

### Testing

- Jest with `jsdom` environment and `@mantine-tests/core` render utilities
- Tests in `package/src/Parallax.test.tsx`
- Note: hover/mouse interaction tests are limited in jsdom — `useMediaQuery` may return unexpected values and `matchMedia` is mocked. Full interaction testing needs E2E (Playwright/Cypress)

## Key Patterns

- The component uses Mantine's `polymorphicFactory` pattern — it accepts a `component` prop for custom root elements and forwards refs.
- Props interface is split: `ParallaxBaseProps` (parallax-specific) + `BoxProps` + `StylesApiProps` = `ParallaxProps`.
- Default props are defined as a `defaultProps` object with `satisfies Partial<ParallaxProps>` and consumed via `useProps`.
- Perspective values >= 10000 are treated as `'none'` (effectively disabling perspective).
- The component wraps content in a double-Box structure: outer Box captures mouse/touch events, inner Box applies transforms via `getStyles('root')`.
- Touch support is enabled by default (`touchEnabled` prop). The outer Box sets `touch-action: none` to prevent scroll interference.
- `prefers-reduced-motion` is respected: all transitions and hover/touch effects are disabled when the OS setting is active.
- `keyboardEnabled` adds `tabIndex={0}`, `role="group"`, `aria-roledescription`, and `aria-label` to the outer Box. Arrow keys control tilt, Escape resets. Works with `springEffect` for bouncy keyboard-driven movement.
- `backgroundPosition` is only set when `backgroundImage` is provided, to avoid React 19 shorthand/longhand CSS conflicts with Mantine's `bg` prop.
- `contentParallax` (legacy) uses `React.Children.map` + `cloneElement` to inject per-child transform styles based on child index. Prefer `Parallax.Layer` for new code.
- `Parallax.Layer` uses React Context to read rotation/transition state — no `cloneElement` needed. The `depth` prop controls parallax intensity per layer.
- `staticComponents` in `ParallaxFactory` type enables typed `Parallax.Layer` access.

## Known Limitations

- `contentParallax` uses `React.Children.map` + `cloneElement` — does not work with Fragment or non-element children.
- Gyroscope support (`gyroscopeEnabled`) requires the DeviceOrientation API — not available in all browsers. On iOS 13+, permission is requested on first user interaction (tap/click).
