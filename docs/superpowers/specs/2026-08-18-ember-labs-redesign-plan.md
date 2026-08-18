# Ember Labs Redesign Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely overhaul the Solar + Battery Atlas codebase (Hub portal, Interactive Atlas, and Scrollytelling Article) to strictly adhere to the Ember Labs design system (`DESIGN.md` and `component-gallery.html`).

**Architecture:** Replace existing rounded-pill and shadowed UI patterns with sharp zero-radius geometry, tonal neutral tier contrast (Black `#000000` Nav → Bench Slate `#414F6F` Canvas → Deep Ink Navy `#192238` Cards), Google Fonts Poppins typography (weights 400 and 600 only), square indicators/handles/toggles, official Ember Labs vector SVG wordmarks and badge icons, and fixed categorical chart coloring.

**Tech Stack:** HTML5, CSS3 / Tailwind CSS (v3.4), Vanilla JavaScript (ES modules), Chart.js, D3.js, Leaflet, Vite, esbuild.

**Spec:** `docs/superpowers/specs/2026-08-18-ember-labs-redesign-design.md`

## Global Constraints

- **Zero Radius:** `border-radius: 0px` everywhere without exception. No rounded buttons, pills, tags, inputs, modals, or badges.
- **Zero Shadows:** No `box-shadow` anywhere. Depth is established purely by tonal tier contrast and `rgba(255, 255, 255, 0.12)` hairline dividers.
- **Squares Over Circles:** All slider handles, switch knobs, confidence ratings, legend swatches, radio marks, and spinner loaders are squares.
- **Exact Colors:** Only use official Ember Labs tokens: Navy `#192238`, Slate Canvas `#414F6F`, Lifted Slate `#626E88`, Black `#000000`, White `#FFFFFF`, Yellow `#FFC400` (hover `#E6B300`, active `#CC9F00`), Orange `#E04B00` (hover `#C64300`), Green `#13CE74`, Blue `#37A6E6`, Vapour Blue `#97CCED`, Ash Grey `#B0B7C6`.
- **Typography:** `Poppins, system-ui, sans-serif` loaded from Google Fonts (`family=Poppins:wght@400;600`). Headings/labels: 600, Body/captions: 400.
- **Official Logos:** Use vector SVGs from `docs/superpowers/specs/svg/` (`ember-labs-logo-white.svg`, `icon-sparkle.svg`, etc.).

---

### Task 1: Asset Pipeline & Official Vector SVGs

**Files:**
- Create: `deployment/assets/svg/ember-labs-logo-white.svg`
- Create: `deployment/assets/svg/ember-labs-logo-black.svg`
- Create: `deployment/assets/svg/icon-sparkle.svg`
- Create: `deployment/assets/svg/icon-flask.svg`
- Modify: `scripts/build-dist.mjs`

**Interfaces:**
- Consumes: SVG vector files in `docs/superpowers/specs/svg/`.
- Produces: SVG assets under `deployment/assets/svg/` available for both local dev and production builds in `dist/assets/svg/`.

- [ ] **Step 1: Copy SVG assets to `deployment/assets/svg/`**

Create `deployment/assets/svg/` directory and copy `ember-labs-logo-white.svg`, `ember-labs-logo-black.svg`, `icon-sparkle.svg`, and `icon-flask.svg` into it.

- [ ] **Step 2: Verify `scripts/build-dist.mjs` copies `deployment/assets/`**

Check `scripts/build-dist.mjs` to ensure the directory walk copies all `.svg` files in `deployment/assets/svg/` into `dist/assets/svg/`.

- [ ] **Step 3: Run build test to verify assets copy**

Run: `node scripts/build-dist.mjs`
Expected: `dist/assets/svg/` contains all 4 SVGs.

- [ ] **Step 4: Commit**

```bash
git add deployment/assets/svg/ scripts/build-dist.mjs
git commit -m "feat(assets): add official Ember Labs SVG wordmarks and badge icons"
```

---

### Task 2: Design Tokens, Typography & Tailwind Config

**Files:**
- Modify: `tailwind.config.js`
- Modify: `tailwind.source.css`

**Interfaces:**
- Consumes: Ember Labs token specifications from `DESIGN.md` and `component-gallery.html`.
- Produces: Compiled Tailwind utilities with Ember Labs palette, Poppins font-sans, and zero-radius tokens.

- [ ] **Step 1: Update `tailwind.config.js`**

Configure `tailwind.config.js` with:
- `fontFamily.sans`: `['Poppins', 'system-ui', 'sans-serif']`
- `colors`:
  - `navy`: `'#192238'`
  - `canvas`: `'#414F6F'`
  - `slate`: `'#626E88'`
  - `black`: `'#000000'`
  - `white`: `'#FFFFFF'`
  - `yellow`: `'#FFC400'`
  - `'yellow-hover'`: `'#E6B300'`
  - `'yellow-active'`: `'#CC9F00'`
  - `orange`: `'#E04B00'`
  - `'orange-hover'`: `'#C64300'`
  - `green`: `'#13CE74'`
  - `blue`: `'#37A6E6'`
  - `'blue-light'`: `'#97CCED'`
  - `muted`: `'#B0B7C6'`
  - `'white-wash-08'`: `'rgba(255, 255, 255, 0.08)'`
  - `'white-wash-12'`: `'rgba(255, 255, 255, 0.12)'`
  - `divider`: `'rgba(255, 255, 255, 0.12)'`
  - `overlay`: `'rgba(25, 34, 56, 0.75)'`
  - Maintain semantic aliases: `primary: '#FFC400'`, `surface: '#192238'`, `'surface-variant': '#414F6F'`, `'bg-page': '#414F6F'`, `accent: '#FFC400'`, `solar: '#FFC400'`, `battery: '#37A6E6'`
- `borderRadius`:
  - `{ DEFAULT: '0px', none: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px', '2xl': '0px', full: '0px' }`
- `boxShadow`:
  - `{ DEFAULT: 'none', none: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none', '2xl': 'none' }`

- [ ] **Step 2: Update `tailwind.source.css`**

Add Poppins Google Fonts import:
`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');`
Add global CSS reset for UA margins and explicit zero-radius/no-shadow rules.

- [ ] **Step 3: Rebuild Tailwind CSS**

Run: `npm run build:css`
Expected: `deployment/css/tailwind.css` compiles successfully without errors.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js tailwind.source.css deployment/css/tailwind.css
git commit -m "feat(tokens): update Tailwind config and source CSS with Ember Labs tokens"
```

---

### Task 3: Global Stylesheet & Canonical Components (`deployment/css/style.css`)

**Files:**
- Modify: `deployment/css/style.css`

**Interfaces:**
- Consumes: CSS custom properties and `.el-*` component classes from `component-gallery.html`.
- Produces: Comprehensive styling for all data tool components, control rows, range sliders, stat tiles, confidence indicators, switches, tooltips, popovers, and drawers.

- [ ] **Step 1: Define CSS Custom Properties (`:root`)**

Add full `--el-*` variables (`--el-navy`, `--el-canvas`, `--el-slate`, `--el-black`, `--el-white`, `--el-yellow`, `--el-orange`, `--el-green`, `--el-blue`, `--el-muted`, `--el-chart-cat-*`, `--el-ramp-*`, `--el-radius: 0px`, `--el-divider: rgba(255,255,255,0.12)`, `--el-overlay: rgba(25, 34, 56, 0.75)`).

- [ ] **Step 2: Implement Component Classes from `component-gallery.html`**

Add:
- `.el-root`, `.el-nav`, `.el-hero`, `.el-canvas`, `.el-footer-cta`
- `.el-card`, `.el-card--on-navy`, `.el-card-grid`, `.el-stat-grid`
- `.el-btn-primary`, `.el-btn-secondary`, `.el-btn-ghost`, `.el-btn-danger`, `.el-btn-group`
- `.el-badge`, `.el-badge--orange`, `.el-tag`, `.el-tag--neutral`, `.el-tag--info`, `.el-tag--success`, `.el-tag--warning`, `.el-tag--danger`
- `.el-control-row`, `.el-slider`, `.el-slider__track`, `.el-slider__fill`, `.el-slider__handle`, `.el-slider__value`, `.el-slider__caption`
- `.el-stat`, `.el-stat__label`, `.el-stat__sublabel`, `.el-stat__value`, `.el-stat__unit`, `.el-stat__delta`
- `.el-confidence`, `.el-confidence__sq`, `.el-confidence__sq--filled`
- `.el-switch`, `.el-input`, `.el-select`, `.el-radio`, `.el-checkbox`, `.el-spinner`, `.el-tooltip`

- [ ] **Step 3: Update Atlas-specific layout classes**

Update `#map-shell`, `.map-pane`, `.panel-collapsible`, drawers, and popups to use sharp corners (`0px`), `--el-navy` backgrounds, `--el-divider` hairlines, and remove all `box-shadow` / rounded rules.

- [ ] **Step 4: Verify syntax and lint**

Ensure CSS is valid and check styles.

- [ ] **Step 5: Commit**

```bash
git add deployment/css/style.css
git commit -m "feat(css): implement Ember Labs canonical component classes and layout rules in style.css"
```

---

### Task 4: Scrollytelling Stylesheet (`deployment/scrollytelling/css/scrolly.css`)

**Files:**
- Modify: `deployment/scrollytelling/css/scrolly.css`

**Interfaces:**
- Consumes: Ember Labs tokens and editorial layout rules.
- Produces: Clean, unshadowed, zero-radius scrollytelling article styles with Poppins typography, square toggles, square spinners, and sharp visual overlays.

- [ ] **Step 1: Import Google Fonts & CSS Custom Properties**

Import Poppins 400 & 600 and declare `--el-*` design tokens in `scrolly.css`.

- [ ] **Step 2: Restyle Narrative Article Column & Step Cards**

Update `.scrolly-article`, `.scrolly-section`, narrative step boxes, callout boxes, and stat boxes to use `--el-navy` surfaces over `--el-canvas` ground, `0px` radius, and hairline dividers.

- [ ] **Step 3: Restyle Visual Column, Overlays, and Square Spinner**

Update `.scrolly-visual`, parameter overlay cards, legend containers, and loading spinner (`.el-spinner` square border rotating) to zero-radius, unshadowed containers.

- [ ] **Step 4: Commit**

```bash
git add deployment/scrollytelling/css/scrolly.css
git commit -m "feat(scrolly-css): overhaul scrollytelling stylesheet with Ember Labs styling"
```

---

### Task 5: Hub Page (`index.html`) Redesign

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Ember Labs banded layout, SVG wordmark, `.el-badge`, `.el-card`, `.el-btn-primary`, `.el-btn-secondary`.
- Produces: The Ember Labs styled landing portal.

- [ ] **Step 1: Update HTML Head with Google Fonts & Clean Meta**

Include Google Fonts Poppins 400 & 600 and Material Symbols. Remove inline Tailwind CDN script and link to pre-built Tailwind / Ember Labs styles.

- [ ] **Step 2: Build Full-Bleed Top Navigation Bar (`.el-nav`)**

Solid Black bar (`#000000`, `20px 32px`), embedding `ember-labs-logo-white.svg` alongside `SOLAR + BATTERY ATLAS` (Poppins 600) with links to Live Tool, Article, Documentation, GitHub.

- [ ] **Step 3: Build Hero Band (`.el-hero`)**

Deep Ink Navy band (`#192238`, 48px padding) with `.el-badge` (`icon-sparkle.svg` + `LIVE EXPERIMENT ▪ BETA`), H1 (60px, 600) "Solar + Battery Atlas", and 20px Ash Grey subtitle.

- [ ] **Step 4: Build Content Canvas (`.el-canvas`) & Feature Cards**

Bench Slate band (`#414F6F`, 48px padding) containing 2 Deep Ink Navy cards (`.el-card`, 0px radius, 28px padding):
- Card 1: Interactive Atlas (`.el-tag--warning` EXPLORE, H4 32px title, description, `.el-btn-primary` "Launch Tool →").
- Card 2: Scrollytelling Article (`.el-tag--info` NARRATIVE, H4 32px title, description, `.el-btn-secondary` "Read Article →").

- [ ] **Step 5: Build Footer CTA Band (`.el-footer-cta`)**

Deep Ink Navy band (`#192238`) with top hairline divider, H5 "About Ember Labs", citations, and links.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat(hub): redesign landing portal to Ember Labs banded layout"
```

---

### Task 6: Interactive Atlas (`deployment/index.html`) Redesign

**Files:**
- Modify: `deployment/index.html`

**Interfaces:**
- Consumes: Option A Full-Screen Instrumentation Shell layout, SVG wordmark, `.el-*` components.
- Produces: Complete zero-radius, unshadowed instrumentation UI for the interactive data tool.

- [ ] **Step 1: Update `<head>` with Poppins Fonts & Clean Module Preloads**

Include Google Fonts Poppins (`family=Poppins:wght@400;600&display=swap`), verify Leaflet, `style.css`, and `tailwind.css` link tags.

- [ ] **Step 2: Redesign Attached Top Navigation Bar**

Replace floating rounded header with solid Black attached bar (`#000000`, `border-b border-white/12`).
- Left: Embedded vector wordmark / `EMBER LABS ▪ SOLAR + BATTERY ATLAS` with square `BETA` badge.
- Center: Segmented view mode tab bar (`.el-btn-group`, 0px radius, flush buttons). Active tab: solid Yellow (`#FFC400`) background with Navy text; inactive: transparent with white text (0.8 opacity).
- Right: Action buttons (Tour, Search, Reset) styled with `.el-btn-ghost` / `.el-btn-secondary`.

- [ ] **Step 3: Redesign Left Control Drawer & Parameter Controls**

- Style drawer container as `#192238` card with hairline border and 0px radius.
- Rebuild slider controls using `.el-control-row`: label left, yellow numeral right, 6px track, 16px square yellow handle, Ash Grey caption below.
- Rebuild fuel checkboxes / filters as 16px square selection boxes.

- [ ] **Step 4: Redesign Bottom Analytics Drawer & Stat Tiles**

- Dock drawer to bottom with `#192238` background, 0px radius, hairline borders.
- Rebuild metric tiles as signature `.el-stat` tiles: 16px label, 15px sublabel, 40px Live Green (`#13CE74`) numeral + 18px white unit, 15px white delta line.
- Rebuild confidence rating with `.el-confidence` (5 square 18px boxes, filled `#FFC400`, unfilled `#B0B7C6`).
- Rebuild chart containers and legend cards with sharp square swatches.

- [ ] **Step 5: Redesign Modals, Popovers, Tour & Overlays**

- Remove all `rounded-full`, `rounded-2xl`, `rounded-lg`, `shadow-2xl` classes.
- Update modal backdrops to `rgba(25, 34, 56, 0.75)` and modal cards to `#192238` with hairline borders and square buttons.

- [ ] **Step 6: Recompile Tailwind and Test Markup**

Run: `npm run build:css`
Expected: Rebuilds cleanly with all new classes indexed.

- [ ] **Step 7: Commit**

```bash
git add deployment/index.html deployment/css/tailwind.css
git commit -m "feat(atlas): redesign Interactive Atlas HTML to Ember Labs instrumentation cockpit"
```

---

### Task 7: Scrollytelling Article (`deployment/scrollytelling/index.html`) Redesign

**Files:**
- Modify: `deployment/scrollytelling/index.html`

**Interfaces:**
- Consumes: Scrollytelling narrative structure and Ember Labs editorial/dataviz rules.
- Produces: The redesigned "Harnessing the Sun" scrollytelling article.

- [ ] **Step 1: Update `<head>` with Poppins Typography**

Load Poppins 400 & 600 alongside Material Symbols.

- [ ] **Step 2: Rebuild Loading Overlay & Square Spinner**

Replace circular spinner with `.el-spinner` (rotating 24px square with yellow border) on solid Black `#000000` backdrop.

- [ ] **Step 3: Rebuild Navigation Bar & Article Stream (Left Column)**

- Top bar: Solid Black bar with Ember Labs branding and quick links.
- Narrative Sections: Deep Ink Navy (`#192238`) step cards on Bench Slate (`#414F6F`) background, 0px radius, hairline dividers.
- Stat Callouts: Live Green (`#13CE74`) numerals, Ash Grey captions, zero radius.

- [ ] **Step 4: Rebuild Sticky Dataviz & Map Pane (Right Column)**

- Segmented Map/Chart toggle with 0px radius and solid yellow active tab.
- Parameter overlays, season toggles, and sliders styled with `#192238`, square handles, and square toggle buttons.
- Legends styled as sharp rectangular gradient bars with square swatches.

- [ ] **Step 5: Recompile Tailwind CSS**

Run: `npm run build:css`
Expected: Rebuilds cleanly.

- [ ] **Step 6: Commit**

```bash
git add deployment/scrollytelling/index.html deployment/css/tailwind.css
git commit -m "feat(scrolly): redesign Scrollytelling article to Ember Labs editorial style"
```

---

### Task 8: Charting, Dataviz & Color Scales (`charts.js`, `scrolly-charts.js`, `constants.js`, `tooltip.js`, `tour.js`, `perf-hud.js`)

**Files:**
- Modify: `deployment/js/constants.js`
- Modify: `deployment/js/charts.js`
- Modify: `deployment/scrollytelling/js/constants.js`
- Modify: `deployment/scrollytelling/js/scrolly-charts.js`
- Modify: `deployment/js/tooltip.js`
- Modify: `deployment/scrollytelling/js/tooltip.js`
- Modify: `deployment/js/tour.js`
- Modify: `deployment/js/perf-hud.js`

**Interfaces:**
- Consumes: Official 6-color categorical palette and Ember Labs typography/tooltip rules.
- Produces: Consistent dataviz styling across all Chart.js instances, canvas maps, and tooltip overlays.

- [ ] **Step 1: Update Series & Fuel Colors in `constants.js`**

Update `FUEL_COLORS`, `CF_COLOR_SCALE`, and dataviz series constants to use Ember Labs tokens:
- Solar / Series 1: `#FFC400`
- Battery / Series 2 / Oil & Gas: `#37A6E6`
- State of Charge / Series 3 / Bioenergy: `#13CE74`
- Unserved / Series 4 / Coal / Deficit: `#E04B00`
- Nuclear / Series 5: `#97CCED` / `#C4D9E9`
- Filament Wash / Series 6: `#FFF4A3`

- [ ] **Step 2: Update Chart.js Defaults in `charts.js` and `scrolly-charts.js`**

- Set `Chart.defaults.font.family = "'Poppins', system-ui, sans-serif"`.
- Set `Chart.defaults.color = '#B0B7C6'`.
- Set `Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.12)'`.
- Ensure all bar datasets set `borderRadius: 0`.
- Ensure tooltips use `cornerRadius: 0`, `backgroundColor: '#000000'`, `borderColor: 'rgba(255, 255, 255, 0.12)'`, `borderWidth: 1`.

- [ ] **Step 3: Update `tooltip.js` & `perf-hud.js` & `tour.js`**

- Update dynamic DOM tooltips to solid Black `#000000` with hairline border, 0px radius, no shadow.
- Update `tour.js` popovers to `#192238` with square action buttons.
- Update `perf-hud.js` overlay to `#192238` / `#000000` with square status indicators.

- [ ] **Step 4: Commit**

```bash
git add deployment/js/ deployment/scrollytelling/js/
git commit -m "feat(dataviz): align Chart.js, tooltips, tour, and constants with Ember Labs palette"
```

---

### Task 9: Build Pipeline & End-to-End Quality Verification

**Files:**
- Modify: `scripts/build-dist.mjs` (if any adjustments needed)
- Verification on all built outputs.

**Interfaces:**
- Consumes: Complete codebase.
- Produces: Verified production build in `dist/` and clean audit passing all Ember Labs criteria.

- [ ] **Step 1: Recompile Tailwind CSS & Build Distribution**

Run: `npm run build`
Expected: `build:css` and `build:dist` finish with 0 errors.

- [ ] **Step 2: Automated Zero-Radius Audit**

Run grep check to ensure zero stray `rounded-*` classes remain (except explicit `rounded-none` or `rounded: 0px`):
`grep -rn "rounded-[a-z0-9]" index.html deployment/index.html deployment/scrollytelling/index.html`
Expected: 0 matches.

- [ ] **Step 3: Automated Zero-Shadow Audit**

Run grep check to ensure zero `box-shadow` or `shadow-*` classes remain:
`grep -rn "shadow-" index.html deployment/index.html deployment/scrollytelling/index.html`
Expected: 0 matches.

- [ ] **Step 4: Automated Typography & Color Token Audit**

Check that Poppins 400 & 600 are loaded and that all UI and chart hex codes match the Ember Labs token list.

- [ ] **Step 5: Interactive Verification with Local Dev Server**

Test navigation, sliders, view tab switches, 168h sample chart replay, Voronoi map rendering, and scrollytelling step transitions.

- [ ] **Step 6: Final Commit**

```bash
git add -A
git commit -m "chore(release): complete Ember Labs redesign overhaul across all surfaces"
```
