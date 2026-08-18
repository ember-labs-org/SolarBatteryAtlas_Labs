/**
 * Ember Labs Tailwind Configuration
 *
 * Implements the official Ember Labs tokens:
 * - Tonal tiers: navy (#192238), canvas (#414F6F), slate (#626E88), black (#000000), white (#FFFFFF)
 * - Accents: yellow (#FFC400), orange (#E04B00), green (#13CE74), blue (#37A6E6), blue-light (#97CCED), muted (#B0B7C6)
 * - Typography: Poppins, system-ui, sans-serif (weights 400 and 600)
 * - Geometry: 0px border-radius everywhere
 * - Depth: zero box-shadow
 *
 * Rebuild with: npm run build:css
 */
module.exports = {
    content: [
        './index.html',
        './deployment/index.html',
        './deployment/scrollytelling/index.html',
        './deployment/js/**/*.js',
        './deployment/scrollytelling/js/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'system-ui', 'sans-serif'],
            },
            colors: {
                navy: '#192238',
                canvas: '#414F6F',
                slate: '#626E88',
                black: '#000000',
                white: '#FFFFFF',
                yellow: '#FFC400',
                'yellow-hover': '#E6B300',
                'yellow-active': '#CC9F00',
                orange: '#E04B00',
                'orange-hover': '#C64300',
                green: '#13CE74',
                blue: '#37A6E6',
                'blue-light': '#97CCED',
                muted: '#B0B7C6',
                'white-wash-08': 'rgba(255, 255, 255, 0.08)',
                'white-wash-12': 'rgba(255, 255, 255, 0.12)',
                divider: 'rgba(255, 255, 255, 0.12)',
                overlay: 'rgba(25, 34, 56, 0.75)',

                // Semantic aliases mapped to Ember Labs tokens
                primary: '#FFC400',
                'ember-hover': '#E6B300',
                accent: '#FFC400',
                solar: '#FFC400',
                battery: '#37A6E6',
                surface: '#192238',
                'surface-variant': '#414F6F',
                'bg-page': '#414F6F',
                'on-surface': '#FFFFFF',
                outline: 'rgba(255, 255, 255, 0.12)',
                input: 'rgba(255, 255, 255, 0.08)',
            },
            borderRadius: {
                DEFAULT: '0px',
                none: '0px',
                sm: '0px',
                md: '0px',
                lg: '0px',
                xl: '0px',
                '2xl': '0px',
                '3xl': '0px',
                full: '0px',
            },
            boxShadow: {
                DEFAULT: 'none',
                none: 'none',
                sm: 'none',
                md: 'none',
                lg: 'none',
                xl: 'none',
                '2xl': 'none',
                inner: 'none',
            },
        },
    },
};
