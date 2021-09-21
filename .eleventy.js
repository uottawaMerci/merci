const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/resources/img");
    eleventyConfig.addPassthroughCopy("src/resources/js");
    eleventyConfig.addPassthroughCopy("src/resources/favicon.ico");

    eleventyConfig.addPassthroughCopy({
      "./src/admin/config.yml": "./admin/config.yml",
    });
    eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
    );
  
  
    return {
          dir: {
            input: "src",
            output: "public",
          },
        };
  };