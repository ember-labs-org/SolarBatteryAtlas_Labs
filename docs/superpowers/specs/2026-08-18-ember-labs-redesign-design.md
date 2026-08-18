# Design Specification: Ember Labs Complete Redesign Overhaul

**Date:** 2026-08-18  
**Topic:** Solar + Battery Atlas — Full Ember Labs Redesign Overhaul  
**Status:** Approved by User  
**Reference Assets & Documents:**
- `docs/superpowers/specs/DESIGN.md` (Ember Labs Dark Theme Design System)
- `docs/superpowers/specs/component-gallery.html` (Reference Component Library & CSS implementation)
- `docs/superpowers/specs/svg/ember-labs-logo-white.svg` (Official white vector wordmark)
- `docs/superpowers/specs/svg/ember-labs-logo-black.svg` (Official black/navy vector wordmark)
- `docs/superpowers/specs/svg/icon-sparkle.svg` (Badge sparkle icon)
- `docs/superpowers/specs/svg/icon-flask.svg` (Badge flask icon)

---

## 1. Overview & Creative North Star

The **Solar + Battery Atlas** repository is an interactive global renewable energy data tool containing three distinct frontend surfaces:
1. **Hub / Landing Portal** (`index.html`)
2. **Interactive Atlas Data Tool** (`deployment/index.html`)
3. **Scrollytelling Article: Harnessing the Sun** (`deployment/scrollytelling/index.html`)

This specification defines the complete overhaul of all three surfaces to conform strictly to the **Ember Labs** design system and the canonical component implementations in `component-gallery.html`.

### The Core Design Philosophy
- **"The Bar-Chart Grid":** Sharp rectangular geometry across all surfaces. Every container is cut to hard corners (`0px` border-radius with zero exceptions).
- **Squares Over Circles:** All indicators, slider handles, confidence marks, radio buttons, switch knobs, spinner loaders, popover pointers, and legend swatches are square.
- **Tonal Depth Model (No Shadows):** Zero `box-shadow` throughout the entire system. Front-to-back elevation is achieved solely through contrasting neutral tiers stacked on top of one another with `rgba(255, 255, 255, 0.12)` hairline dividers.
- **Strict Color Roles:** Exactly one Filament Yellow (`#FFC400`) for interactive elements, one Deep Ink Navy (`#192238`) for structural surfaces, Live Green (`#13CE74`) for metric numerals, and Ember Orange (`#E04B00`) reserved strictly for error/destructive/alarm states.
- **Official Vector Logos:** Real vector wordmarks (`ember-labs-logo-white.svg`) and badge icons (`icon-sparkle.svg`, `icon-flask.svg`) loaded directly from assets or embedded inline.
- **Typography:** A single geometric sans family (`Poppins`), constrained strictly to two weights: `600` (SemiBold) for headings, labels, and numerals, and `400` (Regular) for body and captions.

---

## 2. Design Tokens & Palette Specifications

### 2.1 CSS Variables & Colors (from `component-gallery.html`)

```css
:root {
  /* ---- Neutrals (Three-step contrast scale) ---- */
  --el-navy: #192238;     /* Primary / darkest surface: Cards, panels, hero */
  --el-canvas: #414F6F;   /* Mid surface: Content canvas */
  --el-slate: #626E88;    /* Lighter surface: Section wrappers, nested cards */
  --el-black: #000000;    /* Hard top nav bar, tooltips */
  --el-white: #FFFFFF;    /* Primary text, secondary borders */

  /* ---- Accents ---- */
  --el-yellow: #FFC400;   /* Primary accent: Controls, primary badge, active tabs, slider fills/handles */
  --el-orange: #E04B00;   /* Secondary accent: Errors, destructive buttons, unserved deficit */

  /* ---- Dataviz & Semantics ---- */
  --el-green: #13CE74;    /* Headline / positive metric numerals, success tags */
  --el-blue: #37A6E6;     /* Dataviz series 2 (Battery storage), info tags */
  --el-blue-light: #97CCED; /* Dataviz series sub-step (Vapour blue) */
  --el-muted: #B0B7C6;    /* Secondary text, gridlines, unfilled slider tracks */

  /* ---- Official 6-Colour Categorical Palette ---- */
  --el-chart-cat-1: #FFC400; /* Solar */
  --el-chart-cat-2: #37A6E6; /* Battery Storage / Oil & Gas */
  --el-chart-cat-3: #13CE74; /* State of Charge / Bioenergy */
  --el-chart-cat-4: #E04B00; /* Unserved / Coal / Deficit */
  --el-chart-cat-5: #C4D9E9; /* Nuclear / Hydro / Sub-series */
  --el-chart-cat-6: #FFF4A3; /* Filament Wash */

  /* ---- Sequential Ramps ---- */
  --el-ramp-yellow-1: #B77A00; --el-ramp-yellow-2: #CC9900; --el-ramp-yellow-3: #FFC400; --el-ramp-yellow-4: #FFDA44; --el-ramp-yellow-5: #FFF4A3;
  --el-ramp-green-1: #0B6638;  --el-ramp-green-2: #109553;  --el-ramp-green-3: #13CE74;  --el-ramp-green-4: #A3D9A5;  --el-ramp-green-5: #D3EADF;
  --el-ramp-blue-1: #203772;   --el-ramp-blue-2: #1E609C;   --el-ramp-blue-3: #37A6E6;   --el-ramp-blue-4: #97CCED;   --el-ramp-blue-5: #C4D9E9;
  --el-ramp-orange-1: #891B05; --el-ramp-orange-2: #BF3100; --el-ramp-orange-3: #E04B00; --el-ramp-orange-4: #EE7309; --el-ramp-orange-5: #FCA311;

  /* ---- Interaction States ---- */
  --el-yellow-hover: #E6B300;
  --el-yellow-active: #CC9F00;
  --el-orange-hover: #C64300;
  --el-white-wash-08: rgba(255, 255, 255, 0.08);
  --el-white-wash-12: rgba(255, 255, 255, 0.12);
  --el-divider: rgba(255, 255, 255, 0.12);
  --el-overlay: rgba(25, 34, 56, 0.75);

  /* ---- Geometry & Spacing ---- */
  --el-radius: 0px;
  --el-radius-badge: 0px;
  --el-gap: 20px;
  --el-pad-card: 28px;
  --el-pad-section: 48px;
}
```

### 2.2 Typography

- **Font Stack:** `font-family: 'Poppins', system-ui, sans-serif;` loaded from Google Fonts (`family=Poppins:wght@400;600&display=swap`).
- **Hierarchy:**
  - `H1` (60px, weight 600, line-height 1.15): Landing page hero.
  - `H2` (42px, weight 600, line-height 1.15): Scrollytelling title, primary page headers.
  - `H3` (36px, weight 600, line-height 1.15): Compact tool titles.
  - `H4` (32px, weight 600, line-height 1.15): Feature card titles on marketing grids.
  - `H5` (24px, weight 600, line-height 1.15): Section titles.
  - `H6` (22px, weight 600, line-height 1.15): Panel & card titles inside data tools.
  - `Body` (20px / 16px, weight 400, line-height 1.4): Narrative and explanatory copy.
  - `Caption` (15px, weight 400, line-height 1.4): Captions, field help text, stat deltas.
  - `Label` (15px, weight 600, line-height 1.4): Buttons, badges, form labels, nav links (16px).
  - `Stat Value` (40px, weight 600, line-height 1.0): Metric numbers in Live Green `#13CE74`.
  - `Stat Unit` (18px, weight 400, line-height 1.0): Metric units in White `#FFFFFF`.
- **Tabular Figures:** `font-variant-numeric: tabular-nums` on all numeric data cells, stat deltas, and HUD counters.

---

## 3. Surface Specifications

### 3.1 Hub Page (`index.html`)

A banded portal introducing the suite of tools:

1. **Top Navigation Bar (`.el-nav`, `#000000`):**
   - Solid black bar, `20px 32px`.
   - Left: Official SVG wordmark (`ember-labs-logo-white.svg`) or `EMBER LABS ▪ SOLAR + BATTERY ATLAS` in Poppins 600 SemiBold with yellow square indicator.
   - Right: Nav links in Poppins 16px SemiBold (`Live Tool`, `Article`, `Documentation`, `GitHub`).
2. **Hero Band (`.el-hero`, `#192238`):**
   - Padding: 48px 32px, flex column.
   - Solid Filament Yellow badge (`.el-badge`): `icon-sparkle.svg` + `LIVE EXPERIMENT ▪ BETA` (`7px 14px`, 0px radius, 15px SemiBold navy text).
   - Display H1 (60px, 600): "Solar + Battery Atlas".
   - Subtitle (20px, 400, Ash Grey): "Interactive global capacity simulators, hourly dispatch replay, and levelized cost analytics for 24/7 solar + storage baseload power."
3. **Content Canvas (`.el-canvas`, `#414F6F`):**
   - Padding: 48px 32px.
   - Card Grid: `.el-card-grid` (`repeat(auto-fit, minmax(280px, 1fr))` with 20px gap).
   - **Card 1: Interactive Atlas**
     - `.el-card` (Background `#192238`, padding 28px, 0px radius, hairline border).
     - Tag: `.el-tag.el-tag--warning` (`EXPLORE`).
     - H4 Title (32px): "Interactive Atlas".
     - Description: "The full interactive experience with map views, LCOE calculators, and population analysis."
     - Primary Button (`.el-btn-primary`): Filament Yellow `#FFC400` fill, Deep Ink Navy `#192238` text, 0px radius, `12px 22px`, 15px SemiBold.
   - **Card 2: Scrollytelling Article**
     - `.el-card` (Background `#192238`, padding 28px, 0px radius, hairline border).
     - Tag: `.el-tag.el-tag--info` (`NARRATIVE`).
     - H4 Title (32px): "Harnessing the Sun".
     - Description: "A guided narrative exploration of global solar potential and the energy transition."
     - Secondary Button (`.el-btn-secondary`): Transparent fill, 2px solid white border, white text, 0px radius, `10px 20px`, 15px SemiBold.
4. **Footer CTA Band (`.el-footer-cta`, `#192238`):**
   - Top hairline divider `rgba(255, 255, 255, 0.12)`.
   - H5 Title (24px): "About Ember Labs".
   - Methodology context, citations (GEM, Global Solar Atlas, ERA5), and links.

---

### 3.2 Interactive Atlas (`deployment/index.html`)

A full-viewport instrumentation shell (Option A) combining an interactive map canvas with precision control and analytics panels:

1. **Top Navigation Bar (`#000000`):**
   - Full-width attached black bar across the top edge.
   - Left: `ember-labs-logo-white.svg` (or `EMBER LABS ▪ SOLAR + BATTERY ATLAS`) with square `.el-badge` `BETA`.
   - Center: **View Mode Segmented Control** (`.el-btn-group`, `0px` radius, flush buttons separated by `1px` hairlines).
     - Active Segment: Solid Filament Yellow `#FFC400` fill with Deep Ink Navy `#192238` text.
     - Inactive Segments: Transparent fill, white text (0.8 opacity), `rgba(255, 255, 255, 0.08)` hover wash.
     - Modes: `Capacity Factor Map`, `Sample Weeks`, `Potential Map`, `LCOE Map`, `Supply-Demand Matching`.
   - Right: Action buttons (Tour Guide, Search, Reset) styled as ghost/secondary sharp buttons (`.el-btn-ghost`, `.el-btn-secondary`).
2. **Left Control Drawer (`.el-card`, `#192238`):**
   - Positioned on the left side of the map viewport, 0px radius, hairline border `rgba(255,255,255,0.12)`.
   - Header: H6 (22px SemiBold) "Parameters".
   - Control Rows (`.el-control-row`, 26px gap between rows):
     - Line 1: Label left in 15px SemiBold white, Current Value right in 19px SemiBold Filament Yellow (`#FFC400`).
     - Line 2: 6px slider track (`.el-slider__track`, Ash Grey unfilled, Filament Yellow filled) with 16px square yellow handle (`.el-slider__handle`, 1px navy border).
     - Line 3: 15px caption in Ash Grey (`.el-slider__caption`).
3. **Bottom Analytics Drawer (`.el-card`, `#192238`):**
   - Docked at the bottom of the map viewport, 0px radius, hairline top and side borders.
   - **Stat Grid:** `.el-stat-grid` (`repeat(auto-fit, minmax(150px, 1fr))` with 14px gap).
   - **Stat Tiles (`.el-stat`, 4-Line Formula):**
     - Line 1: `.el-stat__label` (16px SemiBold white label).
     - Line 2: `.el-stat__sublabel` (15px white sublabel at 0.85 opacity).
     - Line 3: `.el-stat__value` (40px Live Green `#13CE74` value) + `.el-stat__unit` (18px white unit, 14px space above).
     - Line 4: `.el-stat__delta` (15px white delta line at 0.75 opacity).
     - Padding: `20px 22px`, 0px radius, `#192238` background.
4. **Data Confidence & Legend Overlays:**
   - 5-square confidence indicator (`.el-confidence`): 18px squares with 4px gap (`.el-confidence__sq`, filled: `#FFC400`, unfilled: `#B0B7C6`).
   - Legend containers: `#192238` background, 0px radius, hairline borders, square color swatches (`width: 12px; height: 12px;`).
5. **Modals, Popovers, Guided Tour & Perf HUD:**
   - Guided Tour Callout: `#192238` box, 0px radius, hairline border, `.el-btn-primary` action button, `.el-btn-secondary` secondary button.
   - Tooltips (`.el-tooltip`, `tooltip.js`): Solid Black `#000000` background, 0px radius, hairline border, no shadow.
   - Perf HUD (`perf-hud.js`): Solid Black / Deep Ink Navy card, 0px radius, tabular numbers, status square indicators.

---

### 3.3 Scrollytelling Article (`deployment/scrollytelling/index.html`)

A two-column narrative reading experience:

1. **Top Navigation Bar (`.el-nav`, `#000000`):**
   - Full-bleed black bar (`20px 32px`), `EMBER LABS ▪ HARNESSING THE SUN`, links to Atlas Tool and Docs.
2. **Left Column (Article Stream - `#414F6F` Canvas):**
   - Section Eyebrow: `.el-tag.el-tag--warning` or 15px SemiBold text.
   - Article Hero Title: H2 (42px, 600, Poppins).
   - Body Paragraphs: 20px / 16px, weight 400, line-height 1.4, neutral white text.
   - Narrative Step Cards: `.el-card` (Deep Ink Navy `#192238`, 0px radius, 28px padding, hairline dividers).
   - Stat Callouts: `.el-stat` with 40px Live Green numerals, 18px white units, Ash Grey captions.
3. **Right Column (Sticky Dataviz & Map Pane - `#192238`):**
   - Sticky visual container on `#192238` ground.
   - Segmented View Mode Toggle (Map vs Chart): `.el-btn-group` with 0px radius, Filament Yellow active state.
   - Floating Overlay Parameter Cards: `.el-card` with hairline border, 0px radius, square toggles, square sliders.
   - Legends: Flat rectangular gradient strips with square category swatches.
4. **Loading Screen & Spinner:**
   - Solid Black `#000000` backdrop.
   - Ember Labs square spinner (`.el-spinner`: rotating 24px square with single Filament Yellow border edge, zero radius).

---

## 4. Dataviz & Charting Specifications

### 4.1 Categorical Series Order
In `constants.js`, `charts.js`, and `scrolly-charts.js`:
1. **Series 1 (Solar Generation):** Filament Yellow (`#FFC400`)
2. **Series 2 (Battery Storage Dispatch):** Burner Blue (`#37A6E6`)
3. **Series 3 (Battery State of Charge / Target):** Live Green (`#13CE74`)
4. **Series 4 (Unserved Demand / Deficit):** Ember Orange (`#E04B00`)
5. **Series 5 (Hydro / Nuclear):** Frosted Blue (`#C4D9E9`) / Vapour Blue (`#97CCED`)
6. **Series 6 (Filament Wash):** `#FFF4A3`

### 4.2 Fuel Types Mapping
- `coal`: `#E04B00` (Ember Orange)
- `oil_gas`: `#37A6E6` (Burner Blue)
- `bioenergy`: `#13CE74` (Live Green)
- `nuclear`: `#97CCED` (Vapour Blue)

### 4.3 Chart.js & D3 Rendering Rules
- Font Family: `Poppins, system-ui, sans-serif`
- Axis lines & gridlines: Hairline `rgba(255, 255, 255, 0.12)`, value-axis only, max 5–6 ticks.
- Bar charts: `borderRadius: 0` (flat column ends).
- Legend swatches: Square `pointStyle: 'rect'`.
- Backgrounds: Transparent (container provides `#192238`).

---

## 5. Build, Packaging & Quality Verification

1. **Asset Management:**
   - Copy SVGs (`ember-labs-logo-white.svg`, `ember-labs-logo-black.svg`, `icon-sparkle.svg`, `icon-flask.svg`) to `deployment/assets/svg/` so they are bundled into `dist/assets/svg/` by `scripts/build-dist.mjs`.
2. **Build Commands:**
   - `npm run build:css`: Recompiles Tailwind CSS using `tailwind.config.js` and `tailwind.source.css` to `deployment/css/tailwind.css`.
   - `npm run build:dist`: Runs `scripts/build-dist.mjs` to create minified distribution files in `dist/`.
3. **Audits & Verification:**
   - **Zero Radius Audit:** Grep check confirming zero unapproved `rounded-*` or `border-radius` instances across all HTML, CSS, and JS.
   - **Zero Shadow Audit:** Grep check confirming zero `box-shadow` or `shadow-*` instances.
   - **Typography Audit:** Verify Poppins 400 & 600 loaded and applied everywhere.
   - **Color Token Audit:** Verify strict usage of Ember Labs hex tokens.
   - **Interactive Testing:** Verify view mode switching, range sliders, sample week 168h replay charts, tooltips, tour guides, and Voronoi map interactions.
