# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint across all .js/.jsx files
```

No test suite is configured.

## Architecture

Single-page React portfolio app built with Vite. All content is hardcoded — no backend, no routing, no state management library.

**Key files:**
- `src/App.jsx` — the entire page: Hero, Tech Stack, Personal Projects, Work Experience sections, all in one component
- `src/AnimatedText.jsx` — reusable word-by-word fade-in animation component; accepts `text`, `delay` (seconds before first word), and `loopDelay` (ms between replays, default 10000)
- `src/App.css` — all styles; uses CSS custom properties (`--text-primary`, `--text-secondary`, `--accent-gradient`) and a shared dark glass-card style applied to `.tech-group`, `.project-card`, and `.experience-card`

**Styling conventions:**
- Dark theme only; background is `#05060a` with radial gradient overlays
- Accent palette: indigo `#6366f1`, cyan `#22d3ee`, purple `#a855f7` composed via `--accent-gradient`
- Cards share a single CSS rule block — editing the shared style affects all three card types simultaneously
- `.fade-in` and `@keyframes wordFadeUp` / `float` are the two animation primitives

**Content updates** (adding projects, experience, tech stack entries) are all done directly in `src/App.jsx` — the `techStack` object and JSX sections are the source of truth.
