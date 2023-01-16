/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                burtons: "burtons",
                gg: "gg",
            },
            keyframes: {
                'slide-top': {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        transform: 'translateY(-100px)',
                    }
                },
            },
            animation: {
                'slide-top': 'slide-top 1s cubic-bezier(.25,.46,.45,.94) both',
                'spin-only': 'spin 1s ease-in-out none',
                'spin': 'spin 1s linear infinite',
            }
        },
    },
    variants: {
        animation: ['responsive'],
    },
    plugins: [],
}