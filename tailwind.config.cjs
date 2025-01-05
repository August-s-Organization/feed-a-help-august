/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],

    /* Konfigurerer (tilpasser) Tailwind med tilføjet typografi og farver baseret på primitive Figma-variabler */
    theme: {
        extend: {
            fontFamily: {
                'main': ['"Manrope"'],
            },
            colors: {
                'white': {
                    white: '#FDFDFD',
                    cream: '#FCF9F0',
                },
                'black': {
                    100: '#D4D4D4',
                    200: '#A6A6A6',
                    300: '#7A7A7A',
                    400: '#4D4D4D',
                    500: '#212121',
                },
                'red': {
                    500: '#ED500E',
                    700: '#8C2E08',
                    800: '#602105',
                },
                'blue': {
                    200: '#DAF1FD',
                },
                'yellow': {
                    50: '#FEF7EB',
                    100: '#FEF2DC',
                    200: '#FDE4BA',
                    300: '#FBD592',
                    500: '#F8BB4D',
                    800: "#815304",
                    900: '#402902',
                },
            },
        },
    },
  };