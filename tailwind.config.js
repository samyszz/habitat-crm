/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['"Baloo 2"', 'cursive'],
      },
      colors: {
        background: "#FDFBF7", // Creme do fundo
        primary: "#6B4A2D",    // Marrom Texto Principal
        secondary: "#8A6A4F",  // Marrom Suave
        muted: "#E6D5C5",

        // Cores de Destaque
        accent: {
          yellow: "#D4A017",   // Amarelo Queimado
          orange: "#E67817",   // Laranja Terra (CTA)
          lightOrange: "#F2A65A", // Laranja Claro
        },

        // Cores Funcionais
        status: {
          green: "#8FB339",    // Verde Oliva
          blue: "#4A90C2",     // Azul Calmo
          red: "#D96C6C",      // Vermelho Suave
        }
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',         // 32px (Bento Cards)
        'bento': '2.25rem',    // 36px for large card buttons
        'pill': '9999px',      // Pilulas
      },
      boxShadow: {
        'soft': '0 12px 30px rgba(0, 0, 0, 0.08)',
        'hover': '0 16px 40px rgba(0, 0, 0, 0.12)',
        'inset-soft': 'inset 0 6px 18px rgba(107, 74, 45, 0.04)',
      }
    },
  },
  plugins: [],
}