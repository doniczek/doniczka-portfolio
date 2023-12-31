import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blacks': '#0c0c0c',
        'blackd': '#1e1e1e',
        'blacke': '#282828'
      },
      margin: {
        '15vh': '15vh',
        '20vh' : '20vh'
      },
      height: {
        '19.5vw': '19.5vw',
        '40vw': '40vw'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
