/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            boxShadow: {
                'dark': 'inset 0 1px 0 0 hsl(0deg 0% 100% / 5%)'
            }
        },
    },
    darkMode: 'class',
    plugins: [],
};
