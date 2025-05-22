// TAILWIND CSS CONFIGURATION FILE
module.exports = {
  // CONTENT SOURCES CONFIGURATION
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}", // Ensure this covers your HTML files
  ],

  // THEME CUSTOMIZATION
  theme: {
    extend: {
      // COLOR PALETTE DEFINITIONS
      colors: {
        "main-color-one": "#ff3b05",
        "main-color-two": "#ff3b05",
        "portfolio-color": "#ff8e47",
        "logistic-color": "#ff8e47",
        "industry-color": "#ff8e47",
        "secondary-color": "#1d2228",
        "heading-color": "#0a1121",
        "paragraph-color": "#878a95",
        "construction-color": "#ffbc13",
        "lawyer-color": "#c89e66",
        "political-color": "#e70f49",
        "medical-color": "#47ccf1",
        "medical-two-color": "#fc6286",
        "fruits-color": "#4ca338",
        "fruits-heading-color": "#014019",
        "portfolio-dark-one": "#202334",
        "portfolio-dark-two": "#191c47",
        "charity-color": "#d1312e",
        "dagency-color": "#ff8a47",
        "cleaning-color": "#fee126",
        "cleaning-two-color": "#20beea",
        "course-color": "#21baf7",
        "course-two-color": "#fda809",
        "grocery-color": "#80b82d",
        "grocery-heading-color": "#014019",
        "main-color-three": "#ff805d",
        "main-color-four": "#ff1747",
        "main-color-five": "#fcda69",
        "heading-color-home-19": "#1B1C25",
        "light-color": "#666666",
        "extra-light-color": "#999999",
        "review-color": "#FABE50",
        "stock-color": "#5AB27E",
      },

      // FONT FAMILY CONFIGURATIONS
      fontFamily: {
        heading: ["Nunito", "sans-serif"], // Used for headings across the site
        body: ["Nunito", "sans-serif"], // Primary body font
        "home-19-heading": ["Outfit", "sans-serif"],
        "home-20-heading": ['"Source Serif Pro"', "serif"],
        "home-21-heading": ['"Space Grotesk"', "sans-serif"],
        "home-19-body": ["Roboto", "sans-serif"],
        "home-21-body": ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"], // Additional Roboto font reference
      },
    },
  },

  // PLUGINS CONFIGURATION
  plugins: [],
};
