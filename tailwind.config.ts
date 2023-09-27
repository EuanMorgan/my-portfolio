import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-3deg)'},
          '50%': {transform: 'rotate(3deg)'},
        },
        sideToSide: {
          '0%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(-400px)'},
          '100%': {transform: 'translateX(0)'},
        },
        wave: {
          '0%': {transform: 'rotate( 0.0deg)'},
          '10%': {
            transform: 'rotate(18.0deg)',
          },
          '20%': {transform: 'rotate(-12.0deg)'},
          '30%': {transform: 'rotate(18.0deg)'},
          '40%': {transform: 'rotate(-8.0deg)'},
          '50%': {transform: 'rotate(14.0deg)'},
          '60%': {
            transform: 'rotate( 0.0deg)',
          } /* Reset for the last half to pause */,
          '100%': {transform: 'rotate( 0.0deg)'},
        },
      },
      animation: {
        wiggle: 'wiggle 6s ease-in-out infinite',
        sideToSide: 'sideToSide 9s ease-in-out infinite',
        wave: 'wave 2s ease-in-out 2 alternate both 2s',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'mint-green': 'hsl(154, 68%, 86%)',
        'light-pink': 'hsl(337, 100%, 89%)',
      },
    },
  },
  plugins: [],
};
export default config;
