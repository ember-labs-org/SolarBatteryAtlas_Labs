/**
 * Superset of the inline Play-CDN configs previously embedded in
 * deployment/index.html, deployment/scrollytelling/index.html and the hub
 * index.html. The union only ADDS utility definitions (e.g. `accent` from
 * the Article, `solar`/`battery`/`input` from the tool), which is inert for
 * pages that never use those classes.
 *
 * Version pinned to 3.4.17 — the exact version cdn.tailwindcss.com served
 * when the static build replaced it (see the header comment it injected).
 *
 * Rebuild with: npm run build:css
 */
module.exports = {
    content: [
        './index.html',
        './deployment/index.html',
        './deployment/scrollytelling/index.html',
        // JS is included because popup/tooltip HTML templates carry literal
        // class="..." strings; the scanner extracts string tokens from any
        // file, and false positives only add unused (inert) rules.
        './deployment/js/**/*.js',
        './deployment/scrollytelling/js/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                // Ember brand typeface: Poppins (loaded from Google Fonts in
                // deployment/index.html). Mirrors --font-sans in deployment/css/style.css.
                sans: ['Poppins', '"Noto Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
            },
            colors: {
                // Interface colours, all from Ember's brand palette (ember-branding skill).
                // Data colours (solar, battery, map and chart scales) are unchanged for now.
                surface: '#192238',            // Neutral 5
                'surface-variant': '#3E4860',  // Neutral 4
                primary: '#FFC400',            // Yellow 3 (Ember Futures)
                'ember-hover': '#FFDA44',      // Yellow 2
                'on-surface': '#FFFFFF',
                outline: '#3E4860',            // Neutral 4
                'bg-page': '#000000',
                muted: '#B0B7C6',              // Neutral 2
                input: '#000000',
                accent: '#FFC400',             // Yellow 3
                solar: '#f59e0b',
                battery: '#a855f7',
                // Tailwind's grey scales remapped onto Ember neutrals, so every
                // text-gray-* / bg-slate-* class in the app uses the brand palette.
                // Mid shades favour Neutral 2 for legibility on dark backgrounds.
                gray: {
                    50: '#FFFFFF', 100: '#D8DBE6', 200: '#D8DBE6', 300: '#D8DBE6',
                    400: '#B0B7C6', 500: '#B0B7C6', 600: '#626E88', 700: '#3E4860',
                    800: '#192238', 900: '#192238', 950: '#000000',
                },
                slate: {
                    50: '#FFFFFF', 100: '#D8DBE6', 200: '#D8DBE6', 300: '#D8DBE6',
                    400: '#B0B7C6', 500: '#B0B7C6', 600: '#626E88', 700: '#3E4860',
                    800: '#192238', 900: '#192238', 950: '#000000',
                },
            },
        },
    },
};
