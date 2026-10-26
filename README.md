# Solar + Battery Atlas

An interactive map showing how well solar plus batteries can supply a constant 1 GW of electricity at around 4,900 locations worldwide, what it costs, and where good solar resources line up with population, electricity demand and existing power plants.

Published on Ember Labs. Developed by the Ember Futures team.

## Repository layout

| Path | What it is |
| --- | --- |
| `index.html` | Entry page. Redirects to the Atlas. |
| `deployment/` | The app: HTML, CSS, JavaScript and the data it loads. This is what gets published. |
| `deployment/data/` | Data used by the app (about 28 MB), plus `samples/` (about 2.3 GB, see below). |
| `deployment/scrollytelling/` | The "Harnessing the Sun" article. Not linked from the Ember Labs version. |
| `workspace/scripts/pipeline/` | Simulation scripts that generate the capacity factor results and sample weeks. |
| `scripts/build-dist.mjs` | Builds a minified copy of `deployment/` into `dist/` for deployment. |

## Running locally

```bash
npm install
npm run dev
```

Then open the local address Vite prints. To build a deployable copy:

```bash
npm run build   # rebuilds Tailwind CSS, then writes dist/ (without data/samples)
```

## Large data files

`deployment/data/samples/` holds 290 Parquet files (about 2.3 GB) used by the Sample Weeks view. This is too large for GitHub Pages, which limits a published site to 1 GB.

For deployment, host the samples elsewhere (for example a cloud storage bucket) and tell the app where they are:

- with the build script, set `SAMPLES_BASE_URL` (and `SAMPLES_LIGHT_BASE_URL`) before running `npm run build`; or
- set `window.__SAMPLES_BASE_URL__` in `deployment/index.html` before the app scripts load.

The URL must end with a slash. Everything else in `deployment/data/` ships with the app.

## Data sources

| Data | Source | Used for |
| --- | --- | --- |
| Hourly solar and weather data | NASA POWER | Capacity factors, sample weeks, LCOE |
| Population (2020) | NASA SEDAC, Gridded Population of the World v4 | Supply-demand matching |
| Electricity demand | Chen et al. (2022), *Scientific Data*, gridded electricity consumption from nighttime lights | Supply-demand matching |
| Power plants | Global Energy Monitor plant trackers (December 2024), CC BY 4.0 | Power plant layer, displaceable capacity |
| Solar potential | Global Solar Atlas PVOUT (World Bank / Solargis) | Potential map |
| Grid reliability and access | HREA, University of Michigan (Min et al., 2024) | Supply-demand matching |
| Cost of capital | Hatton et al. (2025), *Scientific Data* | LCOE (local mode) |
| Solar and battery capital costs | IRENA, IEA and BNEF | LCOE (local mode) |
| Gas prices | IGU Wholesale Gas Price Survey (2024 data) | LCOE comparison |
| Diesel prices | World Bank / GlobalPetrolPrices | LCOE comparison |
| Land outline | Natural Earth 50m land (public domain) | Map background |
| Night lights image | NASA Black Marble (2016) | Background imagery |

Licence terms for BNEF, GlobalPetrolPrices and IGU data are being confirmed.

## Method in brief

For each location, `workspace/scripts/pipeline/simulation.py` runs an hourly simulation of a 1 GW constant load supplied by every combination of solar (1–20 GW) and battery (0–36 GWh) capacity, with 90% battery round-trip efficiency. The battery charges from surplus solar and discharges when solar falls short. Sample weeks are the first 72 hours of January, April, July and October. LCOE and transmission costs are calculated in the browser from these results and the cost assumptions selected in the app.

To rerun the simulation:

```bash
cd workspace
python3 -m scripts.pipeline.run --overwrite      # add --sample N to test on N locations
```

## Pipeline status

The repository does not yet contain the full data pipeline. Still to be added:

- `workspace/scripts/pipeline/data_loader.py` (imported by `run.py`) and the conversion of NASA POWER irradiance into hourly solar output per kW
- location sampling and Voronoi cell creation
- the scripts that build each `deployment/data/voronoi_*.csv` file
- the Google Earth Engine script for solar potential (PVOUT)
- download steps or source URLs and dates for the raw input data

Until these are added, the data files in `deployment/data/` can't be regenerated from this repository.
