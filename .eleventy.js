module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/style.css");
    eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");

  
  
    return {
          dir: {
            input: "src",
            output: "public",
          },
        };
  };