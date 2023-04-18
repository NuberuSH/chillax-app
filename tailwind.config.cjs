module.exports = {
  content: [
    './index.html',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        web: {
          boton: "#b41c10",
          boton2: "#f37373",
          fondo: "#C9D5E0",
          topBar: "#4FA9A9",
          loginButton: "#A5E1AD",
          formBgDarkMode: "#1b1b32",
          custom1: "#21094E",
          custom2: "#511281",
          custom3: "#4CA1A3",
          custom4: "#A5E1AD",
          buttonBack: "#353434",
          card: "#4e4e4e",
          shadowCard: "#3d3c3c",
          navbar: "#510d0d"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}