module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'old-standard': ['"Old Standard TT"'],
                'lato': ['Lato']
            },
            textColor: {
                'red': '#C01B33',
                'gray': '#2D2F31',
                'gray-white': '#BCBCBC',
                'white': '#FFFFFF',
            },
            container: {
                center: true,
                padding: '2rem',
            },
            backgroundImage: theme => ({
                'car': "url('img/car.png')",
            }),
            height: theme => ({
                "screen/2": "50vh",
            }),
            borderColor: theme => ({
                'gray': '#D5D5D5',
                'red': '#C01B33',
                'black': 'black',
            }),
            width: {
                '150': '150%'
            },
            backgroundColor: theme => ({
                'red': '#C01B33',
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
