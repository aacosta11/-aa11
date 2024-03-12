import type { Config } from "tailwindcss"
import { black, white } from "tailwindcss/colors"

const config = {
  darkMode: "selector",
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
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
    colors: {
      black,
      white,
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      border: "hsl(var(--color-border) / <alpha-value>)",
      input: "hsl(var(--color-input) / <alpha-value>)",
      ring: "hsl(var(--color-ring) / <alpha-value>)",
      background: "hsl(var(--color-background) / <alpha-value>)",
      foreground: "hsl(var(--color-foreground) / <alpha-value>)",
      primary: {
        DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
        foreground: "hsl(var(--color-primary-foreground) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
        foreground: "hsl(var(--color-secondary-foreground) / <alpha-value>)",
      },
      destructive: {
        DEFAULT: "hsl(var(--color-destructive) / <alpha-value>)",
        foreground: "hsl(var(--color-destructive-foreground) / <alpha-value>)",
      },
      muted: {
        DEFAULT: "hsl(var(--color-muted) / <alpha-value>)",
        foreground: "hsl(var(--color-muted-foreground) / <alpha-value>)",
      },
      accent: {
        DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
        foreground: "hsl(var(--color-accent-foreground) / <alpha-value>)",
      },
      popover: {
        DEFAULT: "hsl(var(--color-popover) / <alpha-value>)",
        foreground: "hsl(var(--color-popover-foreground) / <alpha-value>)",
      },
      card: {
        DEFAULT: "hsl(var(--color-card) / <alpha-value>)",
        foreground: "hsl(var(--color-card-foreground) / <alpha-value>)",
      },
    },
    extend: {
      fontSize: {
        "2xs": "0.625rem",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("./lib/tw/data-attributes-plugin")
  ],
} satisfies Config

export default config