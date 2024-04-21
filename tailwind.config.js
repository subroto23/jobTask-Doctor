/** @type {import('tailwindcss').Config} */

function WithOpacity(rgbColorName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${rgbColorName},${opacityValue}))`;
    } else {
      return `rgb(var(${rgbColorName}))`;
    }
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          navbar: WithOpacity("--color-bg-navbar"),
          banner: WithOpacity("--color-bg-banner"),
          "button-green": WithOpacity("--color-bg-fill-button-green"),
          "icon-card": WithOpacity(" --color-bg-icon-card"),
          "specilist-btn": WithOpacity("--color-bg-specialiest-btn"),
        },
      },
      colors: {
        skin: {
          "gradent-start": WithOpacity("--color-bg-section-gredient-form"),
          "gradent-center": WithOpacity("--color-bg-section-gredient-via"),
          "gradent-end": WithOpacity("--color-bg-section-gredient-to"),
        },
      },
      textColor: {
        skin: {
          primary: WithOpacity(" --color-text-primary"),
          secoundry: WithOpacity("--color-text-secondary"),
          muted: WithOpacity("--color-text-muted"),
          danger: WithOpacity("--color-danger"),
          info: WithOpacity("--color-info"),
          "specialist-icon": WithOpacity("--color-text-icon-specialist"),
          "strong-text": WithOpacity("--color-text-strong"),
          "icon-star": WithOpacity("--color-icon-star"),
        },
      },
      borderColor: {
        skin: {
          "border-primary": WithOpacity("--color-border-primary"),
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
