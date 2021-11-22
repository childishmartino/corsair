module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      bebas: "'Bebas', serif",
      hn: "'HelveticaNeueLT Pro 65 Md', monospace",
    },
    extend: {
      textDecoration: ['active'],
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
