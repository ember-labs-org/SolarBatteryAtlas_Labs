/**
 * Shared constants
 */

export const ALL_FUELS = ['coal', 'oil_gas', 'bioenergy', 'nuclear'];

// Ember Labs categorical chart colours. Colour 1 (yellow) means solar across
// this tool and colour 4 (orange) is reserved for warnings, so plants use 2, 3, 5, 6.
export const FUEL_COLORS = {
    coal: '#C4D9E9',      // categorical 5
    oil_gas: '#37A6E6',   // categorical 2
    bioenergy: '#13CE74', // categorical 3
    nuclear: '#FFF4A3'    // categorical 6
};

export const BASE_LOAD_MW = 1000;
export const DIESEL_THERMAL_KWH_PER_LITER = 10.0;
// Global unsubsidized diesel floor (~crude + refining + delivery, pre-tax).
// Clamps heavily-subsidized pump prices (Venezuela, Iran, Algeria) up to the
// true economic cost a genset operator would face.
export const DIESEL_PRICE_FLOOR_USD_PER_LITER = 0.80;
// 1 MWh_thermal = 3.412 MMBtu. Converts a wholesale gas price ($/MMBtu) into an
// OCGT fuel cost: $/MWh_elec = price_per_MMBtu * MMBTU_PER_MWH / efficiency.
export const MMBTU_PER_MWH = 3.412;

export const TX_WACC = 0.06;
export const TX_LIFE = 50;

export const LCOE_NO_DATA_COLOR = '#192238'; // --el-navy: no result

export const VIEW_MODE_EXPLANATIONS = {
    capacity: 'Capacity Factor Map shows what share of the year a given solar + storage build can sustain a 1\u00a0MW baseload.',
    samples: 'Hourly Profile Samples replay a representative 168-hour week so you can examine solar output, storage dispatch, and any unmet 1\u00a0MW demand.',
    potential: 'Potential Map shows the annual PVOUT potential (TWh/yr) per Voronoi zone. “Technical” excludes rugged terrain, urban/industrial areas, forests, and remote zones; “Policy” adds regulatory limits such as cropland protection and conservation.',
    lcoe: 'LCOE Map compares the levelized cost ($/MWh) of every location that can meet the target capacity factor.',
    population: 'Supply-Demand Matching links where people live (population density as a proxy for demand) with the CF or LCOE of each location.'
};

export const CF_COLOR_SCALE = {
    domain: [0, 0.05, 0.4, 0.7, 1.0],
    range: ["#203772", "#1E609C", "#37A6E6", "#13CE74", "#FFC400"] // Ember multi-hue ramp: dark blue (low) -> yellow (high); lightness rises steadily
};

// Color scale for Energy Access (0% to 100%)
// Labs green ramp, light (low) -> dark (high)
export const ACCESS_COLOR_SCALE = {
    domain: [0, 50, 100],
    range: ["#D3EADF", "#13CE74", "#0B6638"]
};

export const POTENTIAL_MULTIPLE_BUCKETS = [
    { max: 1,    label: '< 1×',        color: "#B0B7C6" }, // --el-muted: below 1x
    { max: 3,    label: '1–3×',        color: "#D3EADF" }, // green ramp 5
    { max: 10,   label: '3–10×',       color: "#A3D9A5" }, // green ramp 4
    { max: 100,  label: '10–100×',     color: "#13CE74" }, // green ramp 3
    { max: 1000, label: '100–1000×',   color: "#109553" }, // green ramp 2
    { max: null, label: '1000×+',      color: "#0B6638" }  // green ramp 1
];


// Annual solar generation potential per person (ground + rooftop), MWh/person/yr.
// Log-decade buckets: the metric spans < 1 to ~11 million MWh/cap across zones
// (median ~1,260), so a linear scale is useless. Same scale as the multiple buckets:
// muted = little potential per person, dark green = abundant.
export const POTENTIAL_PER_CAPITA_BUCKETS = [
    { max: 10,     label: '< 10',           color: "#B0B7C6" }, // --el-muted: below 1x
    { max: 100,    label: '10–100',         color: "#D3EADF" }, // green ramp 5
    { max: 1000,   label: '100–1,000',      color: "#A3D9A5" }, // green ramp 4
    { max: 10000,  label: '1,000–10,000',   color: "#13CE74" }, // green ramp 3
    { max: 100000, label: '10,000–100,000', color: "#109553" }, // green ramp 2
    { max: null,   label: '100,000+',       color: "#0B6638" }  // green ramp 1
];

export const POTENTIAL_TOTAL_COLORS = ['#D3EADF', '#A3D9A5', '#13CE74', '#109553', '#0B6638']; // Labs green ramp

/**
 * Feature flags used for staged rollout of browser performance optimizations.
 *
 * Rollout order:
 * 1) config index (always-on helper, no flag)
 * 2) FEATURE_VORONOI_REUSE
 * 3) FEATURE_STAGED_PRELOAD (scrollytelling)
 * 4) FEATURE_WORKER_LCOE
 * 5) FEATURE_FRAMECACHE (scrollytelling)
 * 6) FEATURE_VORONOI_GEOM_CACHE (skip Delaunay/path rebuilds when the
 *    viewport and point set are unchanged; recolor-only fast path)
 */
export const FEATURE_WORKER_LCOE = true;
export const FEATURE_STAGED_PRELOAD = true;
export const FEATURE_VORONOI_REUSE = true;
export const FEATURE_FRAMECACHE = false;
export const FEATURE_VORONOI_GEOM_CACHE = true;

// 7) FEATURE_VORONOI_CANVAS — render the main Voronoi map on a single <canvas>
//    instead of ~5,000 SVG <path> nodes (the interaction-lag bottleneck on weak
//    GPUs/Safari, measured at 50-190ms/render vs ~0.1ms for day/night). Default
//    ON: verified pixel/behavior-identical across all maps (single, dual,
//    supply-demand split, samples, scrolly, subset) and ~12x faster per render.
//    Override per-page with ?canvas=0 (force SVG) or ?canvas=1 (force canvas),
//    handled in map.js resolveVoronoiCanvas() — kept for A/B and quick rollback.
export const FEATURE_VORONOI_CANVAS = true;
