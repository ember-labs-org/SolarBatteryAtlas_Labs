# Design Specification: Ember Labs Complete Redesign Overhaul

**Date:** 2026-08-18  
**Topic:** Solar + Battery Atlas — Full Ember Labs Redesign Overhaul  
**Status:** Approved by User  
**Reference Document:** `DESIGN.md` (Ember Labs Dark Theme Design System)

---

## 1. Overview & Creative North Star

The **Solar + Battery Atlas** repository is an interactive global renewable energy data tool containing three distinct frontend surfaces:
1. **Hub / Landing Portal** (`index.html`)
2. **Interactive Atlas Data Tool** (`deployment/index.html`)
3. **Scrollytelling Article: Harnessing the Sun** (`deployment/scrollytelling/index.html`)

This specification defines the complete overhaul of all three surfaces to conform strictly to the **Ember Labs** design system defined in `DESIGN.md`.

### The Core Design Philosophy
- **"The Bar-Chart Grid":** Sharp rectangular geometry across all surfaces. Every container is cut to hard corners (`0px` border-radius with zero exceptions).
- **Squares Over Circles:** All indicators, slider handles, confidence marks, radio buttons, switch knobs, spinner loaders, popover pointers, and legend swatches are square.
- **Tonal Depth Model (No Shadows):** Zero `box-shadow` throughout the entire system. Front-to-back elevation is achieved solely through contrasting neutral tiers stacked on top of one another with `rgba(255, 255, 255, 0.12)` hairline dividers.
- **Strict Color Roles:** Exactly one Filament Yellow (`#FFC400`) for interactive elements, one Deep Ink Navy (`#192238`) for structural surfaces, Live Green (`#13CE74`) for metric numerals, and Ember Orange (`#E04B00`) reserved strictly for error/destructive/alarm states.
- **Typography:** A single geometric sans family (`Poppins`), constrained strictly to two weights: `600` (SemiBold) for headings, labels, and numerals, and `400` (Regular) for body and captions.

---

## 2. Design Tokens & Palette Specifications

### 2.1 Colors

| Token | Hex / Value | Semantic Role |
|---|---|---|
| `navy` | `#192238` | Deep Ink Navy: Primary card background, tool structural tier, hero bands, modal backdrop (`rgba(25, 34, 56, 0.75)`). |
| `canvas` | `#414F6F` | Bench Slate: Content canvas background behind cards in tool pages. |
| `slate` | `#626E88` | Lifted Slate: Marketing section wrappers and cards nested inside navy bands. |
| `black` | `#000000` | Hard top navigation bar, tooltips background, loading overlay. |
| `white` | `#FFFFFF` | Primary text, secondary button borders, stat units. |
| `yellow` | `#FFC400` | Filament Yellow: Interactive controls, slider fills/handles, active button/tab segments, primary badges, chart series 1. |
| `yellow-hover` | `#E6B300` | Hover state for primary buttons and interactive yellow elements. |
| `yellow-active` | `#CC9F00` | Active/pressed state for primary buttons. |
| `orange` | `#E04B00` | Ember Orange: Alarm lamp, destructive actions, danger tags, chart series 4 / deficit. |
| `orange-hover` | `#C64300` | Hover state for danger buttons. |
| `green` | `#13CE74` | Live Green: Metric numerals, success tags, chart series 3 / good outcome. |
| `blue` | `#37A6E6` | Burner Blue: Chart series 2, info tags. |
| `blue-light` | `#97CCED` | Vapour Blue: Stacked/paired chart sub-series. |
| `muted` | `#B0B7C6` | Ash Grey: Secondary/caption text, axis labels, unfilled slider tracks, unfilled confidence squares. |
| `white-wash-08` | `rgba(255, 255, 255, 0.08)` | Hover wash for secondary/ghost buttons and cards. |
| `white-wash-12` | `rgba(255, 255, 255, 0.12)` | Input background wash, neutral tags. |
| `divider` | `rgba(255, 255, 255, 0.12)` | Hairline dividers, table row lines, tab underline tracks, chart gridlines. |

### 2.2 Typography

- **Font Family:** `Poppins, system-ui, sans-serif` loaded via Google Fonts (`family=Poppins:wght@400;600`).
- **Hierarchy:**
  - `H1` (60px, weight 600, line-height 1.15): Landing page hero only.
  - `H2` (42px, weight 600, line-height 1.15): Scrollytelling title, primary page headers.
  - `H3` (36px, weight 600, line-height 1.15): Denser hero headers.
  - `H4` (32px, weight 600, line-height 1.15): Feature card titles on marketing grids.
  - `H5` (24px, weight 600, line-height 1.15): Section headers.
  - `H6` (22px, weight 600, line-height 1.15): Panel & card headers inside data tools.
  - `Body` (20px / 16px, weight 400, line-height 1.4): Prose paragraphs, narrative steps.
  - `Caption` (15px, weight 400, line-height 1.4): Slider captions, help text, empty state copy, stat deltas.
  - `Label` (15px, weight 600, line-height 1.4): Buttons, badges, form labels, nav links (16px).
  - `Stat Value` (40px, weight 600, line-height 1.0): Metric numbers in Live Green `#13CE74`.
  - `Stat Unit` (18px, weight 400, line-height 1.0): Metric units in White `#FFFFFF`.
- **Tabular Figures:** `font-variant-numeric: tabular-nums` on all numeric data cells, stat deltas, and HUD counters.

---

## 3. Surface Specifications

### 3.1 Hub Page (`index.html`)

A banded portal introducing the suite of tools:

1. **Top Navigation Bar (`#000000`):**
   - Height: 68px (`20px 32px`).
   - Left: `EMBER LABS ▪ SOLAR + BATTERY ATLAS` in Poppins 600 SemiBold with yellow square indicator.
   - Right: Nav links in Poppins 16px SemiBold with 36px gap.
2. **Hero Band (`#192238`):**
   - Padding: 48px 32px.
   - Solid Filament Yellow badge: `LIVE EXPERIMENT ▪ BETA` (`7px 14px`, 0px radius, 15px SemiBold navy text).
   - Display H1 (60px, 600): "Solar + Battery Atlas".
   - Subtitle (20px, 400, Ash Grey): "Interactive global capacity simulators, hourly dispatch replay, and levelized cost analytics for 24/7 solar + storage baseload power."
3. **Content Canvas (`#414F6F`):**
   - Padding: 48px 32px.
   - Grid: `repeat(auto-fit, minmax(280px, 1fr))` with 20px gap.
   - **Card 1: Interactive Atlas**
     - Background `#192238`, padding 28px, 0px radius, hairline border.
     - Tag: `EXPLORE` in Filament Yellow tag style (`rgba(255, 196, 0, 0.18)` fill, `#FFC400` text, 0px radius).
     - H4 Title (32px): "Interactive Atlas".
     - Description: "The full interactive experience with map views, LCOE calculators, and population analysis."
     - Primary Button: Filament Yellow `#FFC400` fill, Deep Ink Navy `#192238` text, 0px radius, `12px 22px`, 15px SemiBold.
   - **Card 2: Scrollytelling Article**
     - Background `#192238`, padding 28px, 0px radius, hairline border.
     - Tag: `NARRATIVE` in Burner Blue tag style (`rgba(55, 166, 230, 0.18)` fill, `#37A6E6` text, 0px radius).
     - H4 Title (32px): "Harnessing the Sun".
     - Description: "A guided narrative exploration of global solar potential and the energy transition."
     - Secondary Button: Transparent fill, 2px solid white border, white text, 0px radius, `10px 20px`, 15px SemiBold.
4. **Footer CTA Band (`#192238`):**
   - Top hairline divider `rgba(255, 255, 255, 0.12)`.
   - H5 Title (24px): "About Ember Labs".
   - Methodology context and citations (GEM, Global Solar Atlas, ERA5).

---

### 3.2 Interactive Atlas (`deployment/index.html`)

A full-viewport instrumentation shell (Option A) combining an interactive map canvas with precision control and analytics panels:

1. **Top Navigation Bar (`#000000`):**
   - Full-width attached black bar across the top edge.
   - Left: `EMBER LABS ▪ SOLAR + BATTERY ATLAS` with square `BETA` badge.
   - Center: **View Mode Segmented Control** (`0px` radius, flush buttons separated by `1px` hairlines).
     - Active Segment: Solid Filament Yellow `#FFC400` fill with Deep Ink Navy `#192238` text.
     - Inactive Segments: Transparent fill, white text (0.8 opacity), `rgba(255, 255, 255, 0.08)` hover wash.
     - Modes: `Capacity Factor Map`, `Sample Weeks`, `Potential Map`, `LCOE Map`, `Supply-Demand Matching`.
   - Right: Action buttons (Tour Guide, Search, Settings) styled as ghost/secondary sharp buttons.
2. **Left Control Drawer (`#192238`):**
   - Positioned on the left side of the map viewport, 0px radius, hairline border `rgba(255,255,255,0.12)`.
   - Header: H6 (22px SemiBold) "Parameters".
   - Control Rows (26px gap between rows):
     - Line 1: Label left in 15px SemiBold white, Current Value right in 19px SemiBold Filament Yellow (`#FFC400`).
     - Line 2: 6px slider track (Ash Grey unfilled, Filament Yellow filled) with 16px square yellow handle (1px navy border).
     - Line 3: 15px caption in Ash Grey.
3. **Bottom Analytics Drawer (`#192238`):**
   - Docked at the bottom of the map viewport, 0px radius, hairline top and side borders.
   - **Stat Grid:** `repeat(auto-fit, minmax(150px, 1fr))` with 14px gap.
   - **Stat Tiles (4-Line Formula):**
     - Line 1: 16px SemiBold white label.
     - Line 2: 15px white sublabel (0.85 opacity).
     - Line 3: 40px Live Green (`#13CE74`) value + 18px white unit (14px space above).
     - Line 4: 15px white delta line (0.75 opacity).
     - Padding: `20px 22px`, 0px radius, `#192238` background.
4. **Data Confidence & Legend Overlays:**
   - 5-square confidence indicator: 18px squares with 4px gap (filled: `#FFC400`, unfilled: `#B0B7C6`).
   - Legend containers: `#192238` background, 0px radius, hairline borders, square color swatches.
5. **Modals, Popovers, Guided Tour & Perf HUD:**
   - Guided Tour Callout: `#192238` box, 0px radius, hairline border, Filament Yellow primary button, white-border secondary button.
   - Tooltips (`tooltip.js`): Solid Black `#000000` background, 0px radius, hairline border, no shadow.
   - Perf HUD (`perf-hud.js`): Solid Black / Deep Ink Navy card, 0px radius, tabular numbers, status square indicators.

---

### 3.3 Scrollytelling Article (`deployment/scrollytelling/index.html`)

A two-column narrative reading experience:

1. **Top Navigation Bar (`#000000`):**
   - Full-bleed black bar (`20px 32px`), `EMBER LABS ▪ HARNESSING THE SUN`, links to Atlas Tool and Docs.
2. **Left Column (Article Stream - `#414F6F` Canvas):**
   - Section Eyebrow: Filament Yellow (`#FFC400`) or Ash Grey 15px SemiBold.
   - Article Hero Title: H2 (42px, 600, Poppins).
   - Body Paragraphs: 20px / 16px, weight 400, line-height 1.4, neutral white text.
   - Narrative Step Cards: Deep Ink Navy (`#192238`) cards, 0px radius, 28px padding, hairline dividers.
   - Stat Callouts: 40px Live Green numerals, 18px white units, Ash Grey captions.
3. **Right Column (Sticky Dataviz & Map Pane - `#192238`):**
   - Sticky visual container.
   - Segmented View Mode Toggle (Map vs Chart): 0px radius, Filament Yellow active state.
   - Floating Overlay Parameter Cards: Deep Ink Navy `#192238` card, hairline border, 0px radius, square toggles, square sliders.
   - Legends: Flat rectangular gradient strips with square category swatches.
4. **Loading Screen & Spinner:**
   - Solid Black `#000000` backdrop.
   - Ember Labs square spinner (rotating 24px square with single Filament Yellow border edge, zero radius).

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

1. **Build Commands:**
   - `npm run build:css`: Recompiles Tailwind CSS using `tailwind.config.js` and `tailwind.source.css` to `deployment/css/tailwind.css`.
   - `npm run build:dist`: Runs `scripts/build-dist.mjs` to create minified distribution files in `dist/`.
2. **Audits & Verification:**
   - **Zero Radius Audit:** Grep check confirming zero unapproved `rounded-*` or `border-radius` instances across all HTML, CSS, and JS.
   - **Zero Shadow Audit:** Grep check confirming zero `box-shadow` or `shadow-*` instances.
   - **Typography Audit:** Verify Poppins 400 & 600 loaded and applied everywhere.
   - **Color Token Audit:** Verify strict usage of Ember Labs hex tokens.
   - **Interactive Testing:** Verify view mode switching, range sliders, sample week 168h replay charts, tooltips, tour guides, and Voronoi map interactions.
