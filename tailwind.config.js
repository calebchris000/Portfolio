/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d0c1d",
        "accent-1": "#161b33",
        "accent-2": "#474973",
        "accent-3": "#a69cac",
        secondary: "#f1dac4",
      },
    },
  },
  plugins: [],
};
