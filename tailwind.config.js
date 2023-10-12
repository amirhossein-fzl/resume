/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,vue,ts}',
        './index.html',
    ],
    theme: {
        extend: {
            boxShadow: {
                'dark': 'inset 0 1px 0 0 hsl(0deg 0% 100% / 5%)',
                'light': '0px 2px 13px -2px rgba(0,0,0,0.13)',
            },
            fontFamily: {
                "main": "IRANSans"
            }
        },
        screens: {
            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            screens: {
                'sm': '540px',
                // => @media (min-width: 640px) { ... }

                'md': '730px',
                // => @media (min-width: 768px) { ... }

                'lg': '960px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1143px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1320px',
                // => @media (min-width: 1536px) { ... }
            }
        },
    },
    darkMode: 'class',
    plugins: [],
};
