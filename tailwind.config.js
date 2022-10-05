module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                'primary-yellow': '#FD4B1B',
                // 'primary-purple': '#583BEE',
                'primary-black': '#0A083A',
                'secondary-purple': '#5B5A8F',
                'secondary-yellow': '#FFEDE8',
                'primary-gray': '#91989E',

                'primary-purple': '#230158',
                'primary-pink': '#E8296F',
            },
            dropShadow: {
                'gray': '0 1px 1px rgba(0, 0, 0, 0.1)',
                'yellow': '0 1px 3px rgba(253, 75, 27, 0.1)'
            },
            fontFamily: {
                'primary': ['Roboto', 'sans-serif'],
                'secondary': ['Comfortaa', 'cursive']
            },
            minHeight: {
                'with-footer': '79vh'
            },
            width: {
                '112': '36rem'
            }
        },
    },
    plugins: [],
}
