---
name: Ember Labs
description: Ember Labs' dark theme for interactive HTML data tools — zero-radius, square-indicator, one-yellow-one-navy.
colors:
  navy: "#192238"
  canvas: "#414F6F"
  slate: "#626E88"
  black: "#000000"
  white: "#FFFFFF"
  yellow: "#FFC400"
  yellow-hover: "#E6B300"
  yellow-active: "#CC9F00"
  orange: "#E04B00"
  orange-hover: "#C64300"
  green: "#13CE74"
  blue: "#37A6E6"
  blue-light: "#97CCED"
  muted: "#B0B7C6"
  chart-cat-5: "#C4D9E9"
  chart-cat-6: "#FFF4A3"
  white-wash-08: "rgba(255, 255, 255, 0.08)"
  white-wash-12: "rgba(255, 255, 255, 0.12)"
  divider: "rgba(255, 255, 255, 0.12)"
  overlay: "rgba(25, 34, 56, 0.75)"
typography:
  h1:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "60px"
    fontWeight: 600
    lineHeight: 1.15
  h2:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "42px"
    fontWeight: 600
    lineHeight: 1.15
  h3:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.15
  h4:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.15
  h5:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.15
  h6:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  stat-value:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1
  stat-unit:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1
rounded:
  sharp: "0px"
  badge: "0px"
spacing:
  gap: "20px"
  gap-stats: "14px"
  pad-card: "28px"
  pad-section: "48px"
  gutter: "32px"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
    textColor: "{colors.navy}"
  button-primary-active:
    backgroundColor: "{colors.yellow-active}"
    textColor: "{colors.navy}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "10px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.white-wash-08}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "12px 10px"
  button-danger:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "12px 22px"
  button-danger-hover:
    backgroundColor: "{colors.orange-hover}"
    textColor: "{colors.white}"
  button-sm:
    padding: "8px 14px"
  button-lg:
    padding: "16px 28px"
  input:
    backgroundColor: "{colors.white-wash-08}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "12px 14px"
  input-hover:
    backgroundColor: "{colors.white-wash-12}"
    textColor: "{colors.white}"
  badge:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.badge}"
    padding: "7px 14px"
  badge-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.badge}"
    padding: "7px 14px"
  tag-neutral:
    backgroundColor: "{colors.white-wash-12}"
    textColor: "{colors.white}"
    rounded: "{rounded.badge}"
    padding: "3px 9px"
  tag-info:
    backgroundColor: "rgba(55, 166, 230, 0.18)"
    textColor: "{colors.blue}"
    rounded: "{rounded.badge}"
    padding: "3px 9px"
  tag-success:
    backgroundColor: "rgba(19, 206, 116, 0.18)"
    textColor: "{colors.green}"
    rounded: "{rounded.badge}"
    padding: "3px 9px"
  tag-warning:
    backgroundColor: "rgba(255, 196, 0, 0.18)"
    textColor: "{colors.yellow}"
    rounded: "{rounded.badge}"
    padding: "3px 9px"
  tag-danger:
    backgroundColor: "rgba(224, 75, 0, 0.18)"
    textColor: "{colors.orange}"
    rounded: "{rounded.badge}"
    padding: "3px 9px"
  card:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.pad-card}"
  card-on-navy:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "{spacing.pad-card}"
  stat:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "20px 22px"
  nav:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "20px 32px"
  hero:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "48px 32px"
  footer-cta:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.sharp}"
    padding: "48px 32px"
  slider-track:
    backgroundColor: "{colors.muted}"
    rounded: "{rounded.sharp}"
    height: "6px"
    width: "100%"
  slider-fill:
    backgroundColor: "{colors.yellow}"
    rounded: "{rounded.sharp}"
    height: "6px"
  slider-handle:
    backgroundColor: "{colors.yellow}"
    rounded: "{rounded.sharp}"
    width: "16px"
    height: "16px"
  confidence-square:
    backgroundColor: "{colors.muted}"
    rounded: "{rounded.sharp}"
    width: "18px"
    height: "18px"
  confidence-square-filled:
    backgroundColor: "{colors.yellow}"
    rounded: "{rounded.sharp}"
    width: "18px"
    height: "18px"
  switch-track:
    backgroundColor: "{colors.white-wash-12}"
    rounded: "{rounded.sharp}"
    width: "40px"
    height: "22px"
  switch-track-checked:
    backgroundColor: "{colors.yellow}"
    rounded: "{rounded.sharp}"
    width: "40px"
    height: "22px"
  table-header:
    textColor: "{colors.muted}"
    padding: "12px 16px"
  table-cell:
    textColor: "{colors.white}"
    padding: "14px 16px"
---

# Design System: Ember Labs

## Overview

**Creative North Star: "The Bar-Chart Grid"**

The wordmark gives the system away. In "EMBER.LABS" the second E is not a
letter but three loose horizontal bars with no connecting stroke — a bar
chart hiding inside the name — and a single yellow square sits between the
two words. That geometry is the whole design language. Every surface in an
Ember Labs tool is a rectangle with hard corners, every indicator is a
square, and the only curve permitted anywhere in the system is a pie
chart, where the geometry *is* the data. The chart is the brand; the
interface is just more of the same rectangles.

This is a dark theme built for interactive data tools — capacity
simulators, target trackers, calculators — that analysts assemble quickly,
often with an AI assistant. Its job is consistency under speed: an analyst
moving from one Labs tool to the next should not have to relearn what
yellow means. So the colour coding is fixed rather than expressive. Yellow
is what you touch, green is what the tool reads back, orange is the alarm
lamp and stays dark unless something is genuinely wrong, and everything
else is one of three navy-to-slate tiers stacked by tone. Depth is
achieved entirely by tier contrast: there is not a single `box-shadow` in
the system.

Density sits between marketing page and application. The type scale is
generous at the top (60px display) because it was drawn for a landing
page, but a tool's own interior runs on the 22px panel header and 15px
caption, with one 40px numeral per tile carrying the answer. The confirmed
anti-reference is the generic rounded SaaS dashboard: rounding corners is
the single most common way a generated Labs tool drifts off-brand, and
sharp corners are what make it read as instrumentation instead.

**Key Characteristics:**

- Zero border-radius, everywhere, with no exceptions — both radius tokens
  resolve to `0px`
- Squares where every other design system uses circles: slider handles,
  confidence marks, radio buttons, switch knobs, spinners, popover
  pointers, chart legend swatches
- Exactly one yellow (`#FFC400`) and one navy (`#192238`), including
  inside the logo files — no near-duplicates tolerated
- Flat by construction: depth comes from a three-tier neutral scale and
  hairline dividers, never from shadow
- One typeface (Poppins), two weights (600 headings/labels, 400 body)
- Fixed semantic colour roles that never get reassigned per tool
- No media queries: layout responds through intrinsic `auto-fit` grids

*Provenance: converted from the `ember-labs-branding` Claude skill, whose
values were read off Ember Labs' brand-guidelines sheet or pixel-sampled
from the "UK Gas Capacity Simulator" and Labs homepage mockups. This is a
distinct dark sub-brand from Ember's main light-theme identity.*

## Colors

A dark, cool, low-chroma ground with a small number of high-saturation
signals placed on it very sparingly — the palette's character comes from
how little colour appears, not how much.

### Primary

- **Filament Yellow** (`#FFC400`): The brand colour and the interaction
  colour. Slider fills and handles, the primary badge, primary button and
  CTA fills, feature icons, focus borders on inputs, the active segment of
  a button group, the filled squares of a confidence rating, and
  categorical chart colour 1. If something on screen is adjustable,
  it is yellow. Reach for this first for anything interactive.

### Secondary

- **Ember Orange** (`#E04B00`): Exceptional and warning states only.
  Form validation errors, the required-field asterisk, the danger button,
  the danger tag/toast/alert variant, the alternate "needs review" badge,
  and one dataviz role — the cost or still-to-cover area fill. Never for
  routine secondary text.

### Tertiary

- **Live Green** (`#13CE74`): Big positive and headline metric numerals
  (the "26.6 GW" in a stat tile), success tags, and the "good outcome"
  chart series. Shares its hex exactly with Ember's main brand green as
  deliberate cross-brand consistency — do not retint it for dark
  backgrounds, it already carries enough contrast on navy.
- **Burner Blue** (`#37A6E6`): The second categorical chart series and
  informational tags. Also from Ember's main palette.
- **Vapour Blue** (`#97CCED`): A lighter step of the same blue for a
  paired or stacked sub-segment beside `#37A6E6`.
- **Frosted Blue** (`#C4D9E9`) and **Filament Wash** (`#FFF4A3`): The
  fifth and sixth categorical chart colours — the only two palette
  entries that exist purely for charts and have no UI role.

### Neutral

- **Deep Ink Navy** (`#192238`): The darkest tier and the system's
  structural colour. Hero bands, the footer CTA band, and — on a tool page
  where the canvas is the mid tier — the data and control cards
  themselves. Also the wordmark ink in the black logo variant, and the
  stroke that separates touching stacked chart segments.
- **Bench Slate** (`#414F6F`): The mid tier. The scrolling content canvas
  a tool's card grid sits in, and the fill for cards nested inside a navy
  band (the footer CTA's "Test with us" cards).
- **Lifted Slate** (`#626E88`): The lightest tier. Marketing-page section
  wrappers, and card fills when the canvas behind them is already navy.
- **Black** (`#000000`): The top navigation bar on a standalone tool page,
  and tooltip fills. Used as a deliberate hard edge at the top of the
  page, not as a general surface.
- **White** (`#FFFFFF`): All primary text on any navy or slate surface.
  Secondary lines inside a stat tile stay white at 0.85 / 0.75 opacity
  rather than switching to grey.
- **Ash Grey** (`#B0B7C6`): Secondary and caption text, chart gridline
  labels and axis ticks, placeholder text, the unfilled portion of a
  slider track, and unfilled confidence squares. Shares its hex with
  Ember's main-brand Neutral 2.

### Named Rules

**The Contrasting Tier Rule.** Every surface picks the neutral tier that
contrasts with its parent. A card never sits at the same tier as the
canvas directly behind it. Tool pages: canvas Bench Slate, cards Deep Ink
Navy. Marketing pages: alternate bands between navy and Lifted Slate so
consecutive sections never share a background. When adding a panel, look
at what it sits on and take the adjacent step, never a repeat. This rule
is the entire depth model — see Elevation & Depth.

**The One Yellow, One Navy Rule.** There is exactly one yellow and one
navy in this system, and the logo files obey it too. An earlier logo
export shipped `#FFCD00` and `#212E48`; that was accidental drift and both
files were corrected to be pixel-identical to the UI tokens. If a future
export reintroduces a near-duplicate, snap it back rather than preserving
it as a "logo-only" colour.

**The Alarm Lamp Rule.** Orange marks something the user should
specifically notice as a problem — an error, a destructive action, a
needs-review flag, the cost side of a chart. It is not a general-purpose
colour for "numbers that went down" or cost-flavoured text. A stat tile's
delta line reading "-5.1 GW (16%) vs no battery" is plain white at 0.75
opacity, confirmed by pixel-sampling. If a tool genuinely needs to flag a
delta as a problem, pair it with an alert or danger tag; don't recolour
body text.

**The Fixed Order Rule.** Chart series take categorical colours 1–6 in
order — yellow, blue, green, orange, Frosted Blue, Filament Wash — never
cycled, never reassigned per tool for variety. Orange is skipped as a
routine "next available" slot because it still carries its warning
connotation; a genuine before/without or cost-side series earns it. When
a chart needs magnitude inside one hue rather than a new identity, use
that hue's five-step sequential ramp instead of the next categorical
colour.

**The No Ad Hoc Hex Rule.** Never invent, estimate, or eyeball a colour
for this theme, including for charts. If a tool needs a colour the palette
doesn't cover, extend the token list deliberately and say so.

## Typography

**Display Font:** Poppins SemiBold (600), with `system-ui, sans-serif`
fallback
**Body Font:** Poppins Regular (400), same fallback
**Label/Mono Font:** None — Poppins SemiBold at 13–16px does all label
work; tabular figures come from `font-variant-numeric: tabular-nums` on
numeric table cells rather than a second family

**Character:** A single geometric sans doing every job, which is why the
system reads as engineered rather than art-directed. Poppins' circular
bowls are the one soft geometry allowed anywhere, and they sit against
hard-cornered containers as deliberate contrast. Headings are set tight
(1.15) and left-aligned, so blocks of type read as labelled parts rather
than composed layout.

### Hierarchy

- **H1** (600, 60px, 1.15): The Labs landing page hero only. Never a tool
  page.
- **H2** (600, 42px, 1.15): Tool page titles in the hero band, and footer
  CTA headings.
- **H3** (600, 36px, 1.15): The compact alternative to H2 for a tool title
  in a denser hero.
- **H4** (600, 32px, 1.15): Feature-card titles on a marketing grid —
  larger than a tool's own panel headers because it is promotional, not a
  data panel.
- **H5** (600, 24px, 1.15): Marketing section headings ("About Ember
  Labs").
- **H6** (600, 22px, 1.15): The workhorse. Card and panel headers inside a
  data tool ("Supply capacity", "Gas load-duration curve"), with 16px
  below before content starts.
- **Body** (400, 20px, 1.4): Prose paragraphs and the muted one-line hero
  subtitle. Not for UI chrome.
- **Caption** (400, 15px, 1.4): Slider captions, chart description lines,
  stat deltas, field help text, empty-state copy — all the dense secondary
  text inside cards.
- **Label** (600, 15px, 1.4): Buttons, badges, form labels, section
  eyebrows, nav links (16px). Section eyebrows sit above a heading in Ash
  Grey or an accent.
- **Stat value** (600, 40px, 1.0): One per tile, in Live Green, with its
  unit set at 18px regular weight in white immediately after it on the
  same line.

### Named Rules

**The Two Weights Rule.** Poppins SemiBold for every heading and label,
Poppins Regular for body copy. There is no third weight and no second
family anywhere in the system. Load from Google Fonts
(`family=Poppins:wght@400;600`) or self-host for offline tools.

**The Panel Header Rule.** Inside a data tool, panel titles are H6
(22px), not H4 or H5. Defaulting a tool's interior to marketing sizes is
the second most common drift after rounded corners.

**The Prose Stays Neutral Rule.** Body text is never set in Filament
Yellow or Ember Orange. The accents belong to numerals, controls, and
short labels — never a paragraph.

**The Right-Edge Numeral Rule.** Left-align everything except a numeric
value in a label/value row — a slider's current value, a stat delta, a
numeric table column — which is right- or baseline-aligned to its label.
Never centre or justify paragraph text.

## Layout

Full-bleed horizontal bands stacked vertically, each band a single
neutral tier, with a card grid inside the content band. A page reads
top to bottom as: black nav bar → navy hero → Bench Slate canvas holding
the card grid → navy footer CTA. Horizontal gutters are a consistent
32px on every band; vertical band padding is 48px.

Inside the canvas, two grids do all the work. The general grid is
`repeat(auto-fit, minmax(220px, 1fr))` with a 20px gap, for full cards and
chart panels. Stat tiles get their own tighter grid —
`repeat(auto-fit, minmax(150px, 1fr))` with a 14px gap — which is what
lets four compact tiles pack into a row instead of stretching to card
width. The footer CTA uses a third, wider variant at `minmax(280px, 1fr)`
for its two promotional cards.

Card padding is 28px, tightening to `20px 22px` for a stat tile. Sibling
slider rows inside a control card sit 26px apart. The nav bar runs
`20px 32px`, giving roughly a 68px bar.

No page-level `max-width` is defined: bands run edge to edge and the grid
absorbs width by adding columns. If a tool grows long-form prose, cap the
measure deliberately at that component rather than introducing a global
container — this is provisional guidance, not observed practice.

### Named Rules

**The No-Breakpoint Rule.** This system ships zero `@media` blocks.
Responsiveness comes from intrinsic sizing — `auto-fit` plus `minmax`
reflows columns, percentage widths handle the rest. Add a media query only
when intrinsic sizing genuinely cannot express the change, and never as
the default reflex.

**The Stat Grid Rule.** Stat tiles use the narrow stat grid, never the
generic card grid. The generic grid is sized for cards and charts and will
stretch a compact tile far wider than it should be.

**The Explicit Margin Rule.** Default UA paragraph margins are reset to
zero at the root, and every gap in the system is an explicit margin on the
class that needs it. A stat tile relying on browser defaults renders as a
wall of accidental whitespace instead of a packed 5:4 tile — this was a
real regression in an earlier draft. If you rebuild any of these
components elsewhere, carry the reset with them.

## Elevation & Depth

There are no shadows in this system. Not one `box-shadow` is defined
anywhere — not on cards, modals, dropdowns, popovers, toasts, or chart
tooltips, all of which carry shadows in essentially every other UI kit.
Depth is entirely tonal: the three-step neutral scale establishes
front-to-back order, and a surface reads as raised because it contrasts
with the tier behind it, per the Contrasting Tier Rule. Hairlines finish
the job — `rgba(255, 255, 255, 0.12)` for table rows, list dividers, tab
underline tracks, and chart gridlines, so structural lines everywhere in
the system are the same line.

State is signalled by fill, not lift. Hover washes a surface with
`rgba(255, 255, 255, 0.08)`; a stronger `0.12` wash marks input hover and
neutral tag backgrounds. Nothing translates upward, scales, or gains a
glow on hover. The modal backdrop is navy-tinted
`rgba(25, 34, 56, 0.75)` rather than black, so an overlay dims the page
into the palette instead of out of it.

### Named Rules

**The No-Shadow Rule.** Depth is tonal, never cast. If a floating
element needs to separate from what's behind it, give it the contrasting
neutral tier and a hairline border — a dropdown, popover, toast, and chart
tooltip all resolve this way.

**The Wash-Not-Lift Rule.** Interactive feedback changes fill or border
colour over 0.15s. It never changes elevation or geometry.

## Shapes

Rectangles, at every scale, with corners left as cut. Both radius tokens
resolve to `0px` — the badge keeps a separate token purely so its sizing
could change independently, but its value is 0 like everything else, and
the 3px rounding an earlier draft gave it was a bug, not an exception.

The form language then extends into places where roundness is near
universal, and refuses it each time. Slider handles are 16px squares with
a 1px navy border, not circles. The data-confidence rating is five 18px
squares, not dots. The spinner is a square with one yellow border edge
rotating, not a circular ring. A popover's pointer is a small rotated
square, not a rounded speech-bubble tail. Radio buttons keep the
checkbox's square track and mark selection with a solid inner square,
distinguishing single- from multi-select by glyph-versus-fill rather than
by shape. Switch tracks are plain 40×22 rectangles with a 16px square knob
that slides, and colour — muted grey off, Filament Yellow on — does the
state work a pill shape usually does. Chart legend swatches and carousel
indicators are squares too.

Borders are hairlines at `rgba(255,255,255,0.12)`, stepping up to a solid
2px white for secondary buttons and 2px dashed for a dropzone. Bar and
column ends are flat; stacked segments separate with a 2px navy gap rather
than a contrasting outline.

### Named Rules

**The Zero Radius Rule.** No `border-radius`, anywhere, no exceptions.
Check for it explicitly before shipping — it is the single most common way
a generated Labs tool drifts off-brand, and it is load-bearing: sharp
corners are what make the system read as technical rather than as a
generic SaaS dashboard.

**The Squares Over Circles Rule.** Every indicator, handle, marker,
swatch, knob, spinner, and pointer is a square. If a component
conventionally uses a circle, that is precisely where to apply this rule
rather than where to except it.

**The Pie Exception.** The pie chart is the one deliberate break, because
its geometry is the data rather than decoration. It is not licence for
round anything else.

## Components

Machined, never softened — parts cut to size, edges left as cut, fastened
together without trim. Components state what they are in SemiBold and get
out of the way of the number.

### Buttons

- **Shape:** Hard rectangle (`0px` radius), inline-flex with an 8px gap
  for an optional icon.
- **Primary:** Filament Yellow fill, Deep Ink Navy text, 15px SemiBold,
  `12px 22px` padding. The single default action per screen — Save, Apply,
  Run.
- **Hover / Active:** Fill steps down to `#E6B300` then `#CC9F00` over
  0.15s. No lift, no shadow, no scale.
- **Secondary:** Transparent with a 2px white border and `10px 20px`
  padding, so its outer box matches the primary's. Hover adds the 0.08
  white wash. For Cancel and Export — actions that shouldn't compete.
- **Ghost:** Text only, `12px 10px`, same hover wash. Low-emphasis actions
  inline with content.
- **Danger:** Ember Orange fill, white text, hover `#C64300`. Destructive
  actions only; never a spare colour for a routine secondary action.
- **Sizes:** `8px 14px` at 13px (sm), `16px 28px` at 17px (lg).
- **Disabled:** `:disabled` plus 0.4 opacity. Grey out, don't hide — the
  user should see that the action exists.
- **Button group:** Segmented control for mutually exclusive options
  (24h / 7d / 30d / 1y). Buttons sit flush with shared 1px hairlines and
  no gap; the active segment takes the solid yellow primary treatment.

### Chips

- **Style:** Two distinct families. The **badge** is the "Live
  experiments" marker: solid Filament Yellow with navy text, `7px 14px`,
  15px SemiBold, with a 14–16px sparkle or flask icon inline coloured to
  match the text. An orange-fill/white-text variant covers a
  higher-urgency category.
- **Tag:** The quieter general-purpose label at `3px 9px` and 12px, using
  an 18%-opacity tint of its semantic colour with matching text — neutral
  (white wash), info (blue), success (green), warning (yellow), danger
  (orange). Semantics match the palette's roles: positive is green, a
  problem is orange, never the reverse.
- **Both are sharp-cornered.** Never round either into a pill.

### Cards / Containers

- **Corner Style:** `0px`, no exceptions.
- **Background:** Whichever neutral tier contrasts with the canvas behind
  it — Deep Ink Navy on a Bench Slate or Lifted Slate canvas, Lifted Slate
  on a navy canvas.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** None by default; the tier contrast is the edge.
- **Internal Padding:** 28px, with a 20px grid gap between siblings. A
  card's H6 title sits at the top with 16px below it.

### Inputs / Fields

- **Style:** A 0.08 white wash fill with a `rgba(255,255,255,0.12)`
  hairline border, white 15px text, `12px 14px` padding, sharp corners.
  Placeholders in Ash Grey at full opacity.
- **Focus:** The native outline is removed and replaced by a Filament
  Yellow border — the accent doing focus duty, consistent with yellow
  meaning "this is the thing you're operating."
- **Error:** `.has-error` shifts the border to Ember Orange and adds an
  orange caption below; required fields carry a small orange asterisk.
- **Disabled:** 0.4 opacity, `not-allowed` cursor.
- **Structure:** Label above control above optional help or error text,
  wrapped so inter-field spacing stays uniform.
- **Select:** Native `<select>` with `appearance: none` and a chevron
  built from two 6px yellow gradient triangles, because the browser's own
  arrow can't be recoloured or squared off.

### Navigation

- **Style:** Full-width solid black bar, `20px 32px`, logo left and links
  right with a 36px gap. On a marketing hero it may go transparent and
  layer over the navy band instead — never over the plain content canvas.
- **Links:** White, 16px SemiBold, no underline, hover to 0.8 opacity.
- **Tabs:** Underline-style, with the active tab marked by a Filament
  Yellow rule over a hairline track.
- **Breadcrumbs:** Muted text with `/` separators, current page bold white
  and hooked off `aria-current="page"` so the styling and the screen
  reader stay in sync. Sits under the nav, above the hero — never inside a
  card.

### Stat tile (signature)

The tool's answer, in one packed rectangle — roughly 5:4, wider than
tall, with four tight lines: a 16px SemiBold white label, a 15px white
sublabel at 0.85 opacity, the 40px Live Green numeral with its 18px white
unit beside it and 14px of deliberate space above, and a 15px white
delta line at 0.75 opacity. Padding is `20px 22px`, tighter than a
generic card. Lay four or more across in the stat grid.

### Control / slider row (signature)

Label left in 17px SemiBold white, current value right in 19px SemiBold
Filament Yellow, on one baseline-aligned row. Below it a 6px track: Ash
Grey unfilled, Filament Yellow filled, with a 16px yellow square handle
centred on the current value. A 15px muted caption underneath gives
context ("Scales the whole load."). Rows stack 26px apart inside one card.

### Data-confidence indicator (signature)

The label "Data confidence:" followed by five 18px squares with 4px gaps —
filled squares in Filament Yellow, the remainder Ash Grey. A rating
rendered as a bar chart of one, which is exactly the point.

### Chart card (signature)

A card whose H6 title is followed by a one-to-two-line muted
plain-language read-me before the chart itself. Series step through
categorical colours in fixed order on a transparent card-coloured
background — never a light chart background inside a dark card.
Gridlines use the shared hairline divider token, run on the value axis
only, and cap at 5–6 steps. A legend appears for two or more series with
small square swatches. Hover is mandatory: every chart ships a crosshair
or per-mark highlight with a solid black tooltip, hairline-bordered and
unshadowed. Never a dual y-axis; never a number on every mark.

*Note: the chart specification is an active work in progress in the source
skill, with two open questions flagged for the analyst — whether the
mockup's decorative bar-top highlight should be carried in, and whether
the world map's regional square-grid should become real country-level
geography. Treat chart decisions as provisional.*

### Logo

Real supplied vector wordmarks only — white on navy or slate (the tool
default), navy-inked on light. Inline the SVG for a single-file tool or
reference it with `<img>` in a multi-file project. Never redraw,
re-typeset, or recolour the wordmark, and never set "EMBER LABS" as live
text. The small yellow square never changes colour in either variant. No
monogram or favicon-only mark exists yet; ask for one rather than cropping
the wordmark.

## Do's and Don'ts

### Do:

- **Do** set every corner to `0`, and audit for stray `border-radius`
  before calling a tool done.
- **Do** use a square for any indicator, handle, marker, swatch, or knob —
  including the radio, the switch, the spinner, and the popover pointer.
- **Do** pick each surface's neutral tier by what sits behind it. Default
  for a new tool: Bench Slate canvas (`#414F6F`), Deep Ink Navy cards
  (`#192238`).
- **Do** keep colour roles fixed — yellow for controls, Live Green for
  headline numerals, Ember Orange for exceptional states only.
- **Do** set every heading and label in Poppins 600 and every paragraph in
  Poppins 400, and nothing else.
- **Do** use H6 (22px) for panel headers inside a tool.
- **Do** reset paragraph margins and set every gap explicitly on the class
  that needs it.
- **Do** pair every chart with a plain-language line explaining how to
  read it, and a working hover tooltip.
- **Do** reach for a hue's five-step sequential ramp when a chart needs
  magnitude, and the fixed categorical order when it needs identity.
- **Do** extend the token list deliberately, in writing, if a tool needs
  something the palette doesn't cover.

### Don't:

- **Don't** round anything — not cards, buttons, inputs, badges, tags,
  modals, toasts, or pagination items. The badge's old 3px was a
  corrected bug.
- **Don't** use Ember Orange for routine secondary or delta text, even
  when the text reports a cost or a reduction. Ordinary context stays
  white or Ash Grey.
- **Don't** add a `box-shadow`. Depth is tier contrast plus hairlines.
- **Don't** lift, scale, or glow on hover — change the fill.
- **Don't** introduce a third font weight, a second typeface, or accent
  colour on a paragraph.
- **Don't** repeat a neutral tier between a surface and its parent, or
  between adjacent full-width bands.
- **Don't** invent, estimate, or eyeball a hex value for this theme,
  including for chart series.
- **Don't** give the stat-tile grid the generic card grid — the tiles will
  stretch far wider than they should.
- **Don't** put the hero badge on the same line as the title. `.el-hero`
  must set `display: flex; flex-direction: column;` itself; `display:
  flex` without an explicit column direction is the exact bug that has
  broken this in the wild.
- **Don't** plot two differently-scaled series on a dual y-axis, or cycle
  chart colours for variety.
- **Don't** reach for a circular radio, a pill switch, or a circular
  spinner because it reads more conventionally. If the square genuinely
  tests as ambiguous, raise it as a usability finding instead of quietly
  reverting the rule.
- **Don't** redraw the wordmark, recolour it, or crop a monogram out of
  it.
- **Don't** add a media query as the first reflex — reflow with
  `auto-fit` and `minmax` instead.
