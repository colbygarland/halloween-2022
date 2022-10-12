module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        creep: ['Creepster', 'cursive'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        primary: '#232929',
        secondary: '#db6428',
        tertiary: '#efe8d6',
      },
    },
  },
  plugins: [],
};
