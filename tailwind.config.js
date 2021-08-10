module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: ['hidden', 'spacer', 'container'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        glow10: '#B0FBBC',
        glow20: '#82F9A1',
        blue10: '#111A20',
        blue20: '#1C2C35',
        blue30: '#243B4A',
        blue40: '#416883',
        blue50: '#5E8CA7',
      },
      textColor: {
        text10: '#ECF8FF',
        text20: '#C9E2F0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
