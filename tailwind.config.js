/**********************************************************
 * Tailwind CSS configuration for Next.js App Router
 **********************************************************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        },
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
      },
      boxShadow: {
        magic: "0 10px 25px -5px rgba(59,130,246,0.35), 0 8px 10px -6px rgba(59,130,246,0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%, 100%": { filter: "drop-shadow(0 0 0.75rem rgba(59,130,246,0.5))" },
          "50%": { filter: "drop-shadow(0 0 1.25rem rgba(59,130,246,0.8))" },
        },
      },
    },
  },
  plugins: [],
};
