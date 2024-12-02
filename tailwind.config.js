/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "red-normal": "rgb(255,58,63)",
        "blue-normal": "rgb(24,36,221)",
        "green-normal": "rgb(0,161,83)",
        "gray-normal": "rgb(219,234,254)",
        "clay-normal": "rgb(122,210,230)",
        "pink-normal": "rgb(255,178,189)",
        "orange-normal": "rgb(255,109,41)",
        "yellow-normal": "rgb(254,224,84)",
      },
      padding: {
        "spacing-small": "5%",
        "spacing-normal": "8%",
        "spacing-large": "10%",
        "spacing-x-small": "2%",
        "spacing-x-large": "14%"
      },
      margin: {
        "spacing-small": "5%",
        "spacing-normal": "8%",
        "spacing-large": "10%",
        "spacing-x-small": "2%",
        "spacing-x-large": "14%"
      },
      gridTemplateColumns: {
        'auto-fill-18': 'repeat(auto-fill, minmax(18em, 1fr))',
        'auto-fill-20': 'repeat(auto-fill, minmax(20em, 1fr))',
        'auto-fill-22': 'repeat(auto-fill, minmax(22em, 1fr))',
        'auto-fill-24': 'repeat(auto-fill, minmax(24em, 1fr))',
      },
    }
  },
  plugins: [],
  content: ['./src/**/*.{css,ts,tsx}'],
}