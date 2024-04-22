const html = require("@html-eslint/eslint-plugin");
const parser = require("@html-eslint/parser");

module.exports = [
  {
    files: ["**/*.html"],
    plugins: {
      "@html-eslint": html
    },
    languageOptions: {
      parser
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      "@html-eslint/indent": "error"
    }
  }
];
