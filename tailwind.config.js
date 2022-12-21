/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pura: "PuradakGentleGothicR",
        pretendard: "Pretendard",
      },
    },
  },
  plugins: [],
};
