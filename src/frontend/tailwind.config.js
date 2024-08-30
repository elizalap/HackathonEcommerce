/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Garante que todos os arquivos dentro da pasta src sejam escaneados
        "./src/styles/globalStyles.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        caveat: ['Caveat Brush', 'cursive'],
      },
      colors: {
        primaryGreen: 'var(--primary-green-color)',
        secondaryGreen: 'var(--secondary-green-color)',
        redNormal: 'var(--red-normal)',
        blackNormal: 'var(--black-normal)',
        whiteNormal: 'var(--white-normal)',
        whatsappColor: 'var(--whatsapp-color)',
        primaryDarkLight: 'var(--dark-light-color)',
        darkFadeColor: 'var(--dark-fade-color)',
      },
    },
  },
  plugins: [],
}

