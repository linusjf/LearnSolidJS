const globals = require("globals");
const yaml = require("eslint-plugin-yml");
const yamlparser = require("yaml-eslint-parser");

module.exports = [{
  name: "ESLint for Yaml",
  files: ["**/*.yaml"],
  languageOptions: {
    parserOptions: {
      defaultYAMLVersion: "1.2"
    },
    parser: yamlparser
  },
  linterOptions: {
    noInlineConfig: false,
    reportUnusedDisableDirectives: "error"
  },
  plugins: {
    yaml
  },
  settings: {}
}];
