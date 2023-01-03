/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './src/navigators/*.tsx',
    './src/screens/*.tsx',
    './src/queries/*.tsx',
    './src/requests/*.tsx'
  ],
  theme: {
    colors: {
      success: "#7ACC66",
      error: "#7D000A",
      warning: "#62B3D0",
      info: "#250687",
      light: "#BAFFF1",
      dark: "#80B0A6"
    },
    extend: {
    },
  },
  plugins: [],
}
