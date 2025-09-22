import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blueOne: "rgba(147, 250, 186, 1)",
        blueTwo: "rgba(140, 238, 214, 1)",
        blueThree: "rgba(130, 224, 249, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        move: {
          0: {
            left: "0",
            opacity: "0",
          },
          35: {
            left: "41%",
            transform: "rotate(0deg)",
            opacity: "1",
          },
          65: {
            left: "59%",
            transform: "rotate(0deg)",
            opacity: "1",
          },
          100: {
            left: "100%",
            transform: "rotate(720deg)",
            opacity: "0",
          },
        },
        "loading-rotate-one": {
          "0%": { transform: "rotateX(35deg) rotateY(-45deg) rotateZ(0deg)" },
          "100%": {
            transform: "rotateX(35deg) rotateY(-45deg) rotateZ(360deg)",
          },
        },
        "loading-rotate-two": {
          "0%": { transform: "rotateX(50deg) rotateY(10deg) rotateZ(0deg)" },
          "100%": {
            transform: "rotateX(50deg) rotateY(10deg) rotateZ(360deg)",
          },
        },
        "loading-rotate-three": {
          "0%": { transform: "rotateX(35deg) rotateY(55deg) rotateZ(0deg)" },
          "100%": {
            transform: "rotateX(35deg) rotateY(55deg) rotateZ(360deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        text: "text 5s ease infinite",
        "spin-slow": "spin 3s linear infinite",
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
        loading: "move 2s linear infinite",
        "loading-rotate-one": "loading-rotate-one 1s linear infinite",
        "loading-rotate-two": "loading-rotate-two 1s linear infinite",
        "loading-rotate-three": "loading-rotate-three 1s linear infinite",
      },
      gridTemplateColumns: {
        projectTable: "auto 1fr 20px auto",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
