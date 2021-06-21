const { FontAwesomeIcon } = require("@campj/eleventy-fa-icons");

const isDev = process.env.NODE_ENV === "development";

module.exports = function (eleventyConfig) {
  // Copy static files directly to output.
  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });

  // set up fontawesome
  eleventyConfig.addNunjucksShortcode("FontAwesomeIcon", FontAwesomeIcon);

  // format date filter
  eleventyConfig.addFilter("formatDate", function (date) {
    return new Date(date).toLocaleDateString();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    passthroughFileCopy: true,
  };
};
