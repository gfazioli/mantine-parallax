# CLAUDE.md

## Project
`@gfazioli/mantine-parallax` -- an interactive parallax/3D tilt effect component for Mantine 9 (Apple TV card style), supporting hover-driven rotation, background parallax, content parallax layers, light effects, scroll-driven transforms, gyroscope input, and keyboard control.

## Commands
| Command | Purpose |
|---------|---------|
| `yarn build` | Build the npm package via Rollup |
| `yarn dev` | Start the Next.js docs dev server (port 9281) |
| `yarn test` | Full test suite (syncpack + oxfmt + typecheck + lint + jest) |
| `yarn jest` | Run only Jest unit tests |
| `yarn docgen` | Generate component API docs (docgen.json) |
| `yarn docs:build` | Build the Next.js docs site for production |
| `yarn docs:deploy` | Build and deploy docs to GitHub Pages |
| `yarn lint` | Run ESLint + Stylelint |
| `yarn format:write` | Format all files with oxfmt |
| `yarn storybook` | Start Storybook dev server |
| `yarn clean` | Remove build artifacts |
| `yarn release:patch` | Bump patch version and deploy docs |
| `diny yolo` | AI-assisted commit (stage all, generate message, commit + push) |

> **Important**: After changing the public API, always run `yarn clean && yarn build` before `yarn test`.

## Architecture

### Workspace Layout
Yarn workspaces monorepo with two workspaces: `package/` (npm package) and `docs/` (Next.js 15 documentation site).

### Package Source (`package/src/`)
- `Parallax.tsx` -- main component using `polymorphicFactory`. Uses native `onMouseMove`/`onTouchMove` events with `requestAnimationFrame` throttling to compute 3D transforms. Three style layers: `root` (card with transforms), `content` (children wrapper), `light` (gradient overlay). Exposes `Parallax.Layer` compound component.
- `ParallaxLayer.tsx` -- compound component (`Parallax.Layer`) with `depth` prop for per-element parallax. Consumes `ParallaxContext` for rotation/transition data.
- `ParallaxContext.ts` -- React context providing rotation state, transition config, and hover status to `Parallax.Layer` children.
- `Parallax.module.css` -- CSS modules (hashed with `hash-css-selector` via `me` prefix).
- `index.ts` -- public exports: `Parallax`, `ParallaxLayer`, `ParallaxContext`, `useParallaxContext` + all types.

### Build Pipeline
Rollup bundles to dual ESM/CJS with `'use client'` banner. CSS modules hashed with `hash-css-selector` (prefix `me`). TypeScript declarations via `rollup-plugin-dts`. CSS split into `styles.css` and `styles.layer.css`.

## Component Details

### Polymorphic Factory Pattern
Uses Mantine's `polymorphicFactory` -- accepts a `component` prop for custom root elements and forwards refs. Props interface split: `ParallaxBaseProps` (parallax-specific) + `BoxProps` + `StylesApiProps` = `ParallaxProps`.

### Double-Box Structure
The component wraps content in a double-Box structure: outer Box captures mouse/touch events, inner Box applies transforms via `getStyles('root')`.

### Perspective
Perspective values >= 10000 are treated as `'none'` (effectively disabling perspective).

### Touch and Input Support
- Touch enabled by default (`touchEnabled` prop). Outer Box sets `touch-action: none` to prevent scroll interference.
- `keyboardEnabled` adds `tabIndex={0}`, `role="group"`, `aria-roledescription`, and `aria-label` to the outer Box. Arrow keys control tilt, Escape resets. Works with `springEffect` for bouncy keyboard-driven movement.

### Gyroscope / DeviceOrientation API
`gyroscopeEnabled` prop uses the DeviceOrientation API for tilt control. Not available in all browsers. On iOS 13+, permission is requested on first user interaction (tap/click) via `DeviceOrientationEvent.requestPermission()`. The component handles the async permission flow transparently.

### Spring Effect
`springEffect` enables a physics-based spring animation for smooth return-to-center and keyboard-driven movement.

### Content Parallax
- `contentParallax` (legacy) uses `React.Children.map` + `cloneElement` to inject per-child transform styles based on child index. Does not work with Fragment or non-element children.
- `Parallax.Layer` (preferred) uses React Context to read rotation/transition state -- no `cloneElement` needed. The `depth` prop controls parallax intensity per layer.

### Reduced Motion
`prefers-reduced-motion` is respected: all transitions and hover/touch effects are disabled when the OS setting is active (via `useMediaQuery`).

### Background Image
`backgroundPosition` is only set when `backgroundImage` is provided, to avoid React 19 shorthand/longhand CSS conflicts with Mantine's `bg` prop.

## Testing
Jest with `jsdom`, `esbuild-jest` transform, CSS mocked via `identity-obj-proxy`. Tests use `@mantine-tests/core` render helper. Test file: `package/src/Parallax.test.tsx`. Note: hover/mouse interaction tests are limited in jsdom -- `useMediaQuery` may return unexpected values and `matchMedia` is mocked. Full interaction testing needs E2E (Playwright/Cypress).

## Known Issues
- `contentParallax` uses `React.Children.map` + `cloneElement` -- does not work with Fragment or non-element children.
- Gyroscope support (`gyroscopeEnabled`) requires the DeviceOrientation API -- not available in all browsers. On iOS 13+, permission must be requested on user interaction.

## Ecosystem
This repo is part of the Mantine Extensions ecosystem, derived from the `mantine-base-component` template. See the workspace `CLAUDE.md` (in the parent directory) for:
- Development checklist (code -> test -> build -> docs -> release)
- Cross-cutting patterns (compound components, responsive CSS, GitHub sync)
- Update packages workflow
- Release process
