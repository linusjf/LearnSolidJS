const js = require("@eslint/js");
const solid = require("eslint-plugin-solid/configs/recommended");
const tsParser = require("@typescript-eslint/parser");
const globals = require("globals");

const config = [
  js.configs.recommended,
  {
    files: ["**/*.jsx", "**/*.tsx"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];

module.exports = config;
