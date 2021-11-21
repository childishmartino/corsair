module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        iCue: "url('/iCue-panel-bg.jpg')",
        hex: "url('/bg-TriHexBackground3.png')",
        flavor: "url('/bg-creme-min.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
