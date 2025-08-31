import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: 'var(--brand-500)',
          700: 'var(--brand-700)'
        },
        accent: 'var(--accent)',
        neutral: 'var(--neutral)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
