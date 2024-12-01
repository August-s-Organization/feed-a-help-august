/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            fontFamily: {
                'main': ['"Manrope"'],
            },
            colors: {
                'white': {
                    white: '#FDFDFD', 
                },
                'cream': {
                    cream: '#FCF9F0',
                },
                'black': {
                    100: '#D4D4D4',
                    200: '#A6A6A6',
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
                    300: '#FBD592',
                    500: '#F8BB4D',
                },
            },
        },
    },
  };