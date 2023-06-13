/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,vue}",
   ],
   theme: {
      extend: {
         colors:{
            main: "#ffffff",
            accent: "#0b67a3"
         }
      },
   },
   plugins: [],
}
