import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        // Italea Brand Colors - based on product packaging
        italea: {
          // Primary beige cream - base background tone
          cream: "#FDF9EF",
          "cream-50": "#FEFCF7",
          "cream-100": "#FDF9EF",
          "cream-200": "#FBF3E3",
          "cream-300": "#F8EDD7",
          "cream-400": "#F5E7CB",
          "cream-500": "#F2E1BF",

          // Warm macadamia brown - buttons, icons, accents
          macadamia: "#B28A60",
          "macadamia-50": "#F7F1E8",
          "macadamia-100": "#EFE3D1",
          "macadamia-200": "#DFC7A3",
          "macadamia-300": "#CFAB75",
          "macadamia-400": "#BF8F47",
          "macadamia-500": "#B28A60",
          "macadamia-600": "#9A7650",
          "macadamia-700": "#826240",
          "macadamia-800": "#6A4E30",
          "macadamia-900": "#523A20",

          // Deep forest green - body text and headings
          forest: "#27341D",
          "forest-50": "#F2F4F1",
          "forest-100": "#E5E9E3",
          "forest-200": "#CBD3C7",
          "forest-300": "#B1BDAB",
          "forest-400": "#97A78F",
          "forest-500": "#7D9173",
          "forest-600": "#637B57",
          "forest-700": "#49653B",
          "forest-800": "#384F2C",
          "forest-900": "#27341D",

          // Burnt red-orange - accent color for CTAs
          burnt: "#BA4A1D",
          "burnt-50": "#FDF4F0",
          "burnt-100": "#FBE9E1",
          "burnt-200": "#F7D3C3",
          "burnt-300": "#F3BDA5",
          "burnt-400": "#EFA787",
          "burnt-500": "#EB9169",
          "burnt-600": "#E77B4B",
          "burnt-700": "#E3652D",
          "burnt-800": "#D1541F",
          "burnt-900": "#BA4A1D",

          // Soft olive leaf green - subtle backgrounds
          olive: "#7F9B6C",
          "olive-50": "#F4F6F2",
          "olive-100": "#E9EDE5",
          "olive-200": "#D3DBCB",
          "olive-300": "#BDC9B1",
          "olive-400": "#A7B797",
          "olive-500": "#91A57D",
          "olive-600": "#7F9B6C",
          "olive-700": "#6D8359",
          "olive-800": "#5B6B46",
          "olive-900": "#495333",
        },
        // Standard Tailwind colors with Italea overrides
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#B28A60", // Italea macadamia
          foreground: "#27341D", // Italea forest
        },
        secondary: {
          DEFAULT: "#F2E1BF", // Italea cream-500
          foreground: "#27341D", // Italea forest
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F5E7CB", // Italea cream-400
          foreground: "#49653B", // Italea forest-700
        },
        accent: {
          DEFAULT: "#7F9B6C", // Italea olive
          foreground: "#27341D", // Italea forest
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Primary serif for headings (mimicking logo typography)
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "Times New Roman", "serif"],
        // Clean sans-serif for body content
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        // Display font for brand elements
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        // Brand-specific typography scale
        "brand-hero": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "brand-xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "brand-lg": ["2.25rem", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        "brand-md": ["1.75rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
        "brand-sm": ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.02em", fontWeight: "500" }],
      },
      borderRadius: {
        lg: "1rem", // More rounded for organic feel
        md: "0.75rem",
        sm: "0.5rem",
        xs: "0.25rem",
      },
      boxShadow: {
        // Soft, natural shadows
        kraft: "0 2px 8px rgba(39, 52, 29, 0.08), 0 1px 3px rgba(39, 52, 29, 0.06)",
        "kraft-md": "0 4px 12px rgba(39, 52, 29, 0.1), 0 2px 6px rgba(39, 52, 29, 0.08)",
        "kraft-lg": "0 8px 24px rgba(39, 52, 29, 0.12), 0 4px 12px rgba(39, 52, 29, 0.1)",
        "kraft-xl": "0 16px 48px rgba(39, 52, 29, 0.15), 0 8px 24px rgba(39, 52, 29, 0.12)",
        // Warm glow effects
        warm: "0 0 20px rgba(178, 138, 96, 0.15)",
        "warm-lg": "0 0 40px rgba(178, 138, 96, 0.2)",
      },
      backgroundImage: {
        // Textured backgrounds
        "kraft-texture": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B28A60' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        "paper-grain": `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.7 0 0 0 0 0.5 0 0 0 0 0.3 0 0 0 0.02 0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        "leaf-pattern": `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%237F9B6C' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10c2.5 0 4.8-1 6.5-2.5C18.5 25.5 20 22.9 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
        // Gradient backgrounds
        "warm-gradient": "linear-gradient(135deg, #FDF9EF 0%, #F5E7CB 50%, #F2E1BF 100%)",
        "forest-gradient": "linear-gradient(135deg, #27341D 0%, #49653B 50%, #637B57 100%)",
        "macadamia-gradient": "linear-gradient(135deg, #B28A60 0%, #9A7650 50%, #826240 100%)",
      },
      keyframes: {
        // Natural, organic animations
        "gentle-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "leaf-sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "warm-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(178, 138, 96, 0.15)" },
          "50%": { boxShadow: "0 0 30px rgba(178, 138, 96, 0.25)" },
        },
        "kraft-shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "gentle-float": "gentle-float 4s ease-in-out infinite",
        "leaf-sway": "leaf-sway 3s ease-in-out infinite",
        "warm-pulse": "warm-pulse 2s ease-in-out infinite",
        "kraft-shimmer": "kraft-shimmer 2s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
