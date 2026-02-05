# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Nick Hibbits' portfolio website built with Next.js 15, showcasing web development work and achievements. The site features custom animations using Motion Plus and Framer Motion, with a modern design system built on SCSS.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: Version 19
- **Animations**: Motion Plus (motion-plus) and Framer Motion (motion/react)
- **Styling**: SCSS with modular architecture
- **Fonts**: Custom local font (Switzer) loaded via next/font/local

### Project Structure

```
src/
├── app/
│   ├── components/       # React components
│   ├── layout.js        # Root layout with custom cursors and nav
│   ├── page.js          # Home page composing Hero, About, Work, Contact
│   └── fonts.js         # Local font configuration
├── styles/
│   ├── abstracts/       # SCSS variables, mixins, functions
│   │   ├── _colors.scss
│   │   ├── _sizes.scss
│   │   ├── _typography.scss
│   │   ├── _breakpoints.scss
│   │   ├── _mixins.scss
│   │   └── _functions.scss
│   ├── base/            # Base styles and resets
│   ├── layout/          # Layout-specific styles
│   ├── utilities/       # Utility classes
│   └── main.scss        # Main SCSS entry point
└── lib/                 # Shared utilities (minimal)
```

### Key Components

**Layout & Navigation**

- `layout.js`: Root layout includes dual custom cursors via Motion Plus (`<Cursor />`) - a small dot and a larger magnetic reticule. Navigation component is included here.
- `Nav.jsx`: Full-screen overlay navigation with animated menu items that slide up when opened.

**Page Sections** (composed in `page.js`)

- `Hero.jsx`: Landing section with animated gradient spheres and large title text
- `About.jsx`: Parallax scroll section with image and text that moves with scroll progress
- `Work.jsx`: Project showcase grid with hover states managed via shared state
- `Contact.jsx`: Contact information and footer

**Reusable Components**

- `AnimatedBlob.jsx`: Animated SVG gradient orbs with configurable movement patterns ("float" or "water"). Used in Hero and Contact sections with different sizes and positions.
- `ProjectListItem.jsx`: Individual project cards with hover effects and extended descriptions
- `BackgroundContainer.jsx`: Layout wrapper component

### SCSS Architecture

The SCSS follows a modular pattern with clear separation of concerns:

- **Abstracts layer** (`src/styles/abstracts/`): Contains variables, functions, and mixins
  - Use `fs()` function for font sizes (e.g., `fs(500)`, `fs(700)`)
  - Use `mq()` mixin for responsive breakpoints (e.g., `@include mq(medium)`)
  - Color variables follow `$clr-neutral-XXX` pattern

- **Import pattern**: `main.scss` uses `@use` to import abstracted modules, then `@use` is used in component styles to access variables/mixins

- **Component-specific styles**: Most component styles are in `main.scss` using class-based selectors (`.hero`, `.project-list`, `.nav`, etc.)

### Animation Patterns

**Motion Plus Cursors**: Two-cursor system with magnetic snapping and pointer variants

- Small cursor: Fixed 5x5px dot
- Reticule: 40x40px circle with magnetic behavior and pointer variant scaling

**Framer Motion Patterns**:

- Gradient spheres use complex multi-keyframe animations with custom easing
- About section uses `useScroll` and `useTransform` for parallax effects
- Navigation menu items use CSS keyframe animations with staggered delays

### Path Aliases

- `@/*` maps to `./src/*` (configured in jsconfig.json)
- Used throughout for imports: `@/app/components/`, `@/styles/`, etc.

## Important Notes

- The site uses client-side interactivity extensively - many components are marked `"use client"`
- Custom cursor implementation requires Motion Plus, which is loaded from a registry URL in package.json
- Local fonts (Switzer) are stored in `public/fonts/` and loaded with multiple weights
- Images are in `public/` and used via Next.js `<Image />` component
- The site is a single-page application with section-based navigation (Hero, About, Work, Contact)

## Motion for React Animation Guidelines

**Framer Motion is now Motion for React** - all Framer Motion knowledge applies to Motion for React.

### Importing Rules

- **Never** import from `framer-motion`
- **Always** import from `motion/react` for client components
- For server components, import like: `import * as motion from "motion/react-client"`
- If file has `"use client"` at top, import from `"motion/react"`
- For the `animate` function in React files, import from `"motion/react"`; otherwise from `"motion"`

### Performance Best Practices

**In animation frame functions** (`useTransform`, `onUpdate`, etc.):

- Avoid object allocation, prefer mutation where safe
- Prefer `for` loops over `forEach`/`map`
- Avoid `Object.entries`, `Object.values` (creates new objects)

**Hardware Acceleration**:

- When animating transforms (`x`, `y`, `scale`, `rotate`, etc.), add `willChange: "transform"` to styles
- For `opacity`, `clipPath`, `filter`, also add to `willChange`
- Only ever add these to `willChange`: `transform`, `opacity`, `clipPath`, `filter`
- Prefer animating `transform` for hardware acceleration
- Use independent transforms (`x`, `scaleX`, etc.) for composable animations

### Motion Values

- **Never** use `value.onChange(update)` - always use `value.on("change", update)`
- **Never** read from MotionValue in render - only in effects/callbacks
- ✅ Correct: `useTransform(() => value.get())`
- ❌ Wrong: `propName={value.get()}`

### Animation Patterns

- Compose chains of `useTransform`, `useSpring`, `useMotionValue`, `useVelocity` rather than complex `if` logic
- Prefer `willChange`/`will-change` over `transform: translateZ(0)`
- When animating MotionValues:
  - Use `animate()` function to animate source MotionValue directly
  - Don't use `transition` prop when values are driven by MotionValues via `style` prop
  - Derived values (`useTransform`, `useSpring`) automatically follow source animation

### `useTransform` Syntax

Two current syntaxes (prefer range mapping when possible):

1. Range mapping: `useTransform(value, inputRange, outputRange, options)`
2. Function: `useTransform(() => otherMotionValue.get() * 2)`

**Never use deprecated syntax**: `useTransform(value, (latestValue) => newValue)`

### Radix Integration

- Add animations: provide `asChild` to Radix component, then `motion.div`/`motion.li` as first child
- Exit/layout animations: hoist state to `useState` with `open`/`onOpenChange` or `value`/`onValueChange`, conditionally render component
- Conditionally rendered component should accept `forceMount` (must be set)
- Only apply `forceMount` on Radix components, never DOM components
