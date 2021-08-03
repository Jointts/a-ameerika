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
                'gray-white': '#E4E4E4',
                'white': '#FFFFFF',
            },
            container: {
                center: true,
            },
            backgroundImage: theme => ({
                'car': "url('img/car.png')",
            }),
            height: theme => ({
                "screen/2": "50vh",
            }),
            borderColor: theme => ({
                'gray': '#E4E4E4',
                'red': '#C01B33',
            }),
            width: {
                '150': '150%'
            },
            backgroundColor: theme => ({
                'red': '#C01B33',
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
