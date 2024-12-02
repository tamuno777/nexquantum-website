import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2880,fit=crop/m2Wpx8O7ByS1Xvg5/adobestock_936085695-A3QwL7kXPziBxl6N.jpeg')",
        'about-bg': "url('/path/to/about-background.jpg')",
        'contact-bg': "url('/path/to/contact-background.jpg')",
      },
      colors: {
        customPink: "#ed51c2",
        customPurple: "#6A2ED3",
      },
      textGradient: {
        background: "linear-gradient(to right, #ed51c2, #8a2be2)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  },
  plugins: [],
} satisfies Config;
