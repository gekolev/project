module.exports = {
  // purge: ['./dist/*.html'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'body-brown': '#3B2C29',
        
      },
      backgroundImage: {
        'hero-image': "url('/src/images/content/hero_bg.png')",
        'logodaj-wheel': "url('/src/images/content/logodaj_wheel.png')",
      },
      fontFamily: {
        jost: 'Jost',
      
      },
      fontSize: {
        '8xl': ['8rem', '1'],
        '9xl': ['11rem', '145px'],
        '10xl': ['12rem', '132px'],
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
  plugins: [],
};
