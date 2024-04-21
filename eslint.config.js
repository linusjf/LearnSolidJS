const solid = require("eslint-plugin-solid");
const json = require("eslint-plugin-json");
const jsonFiles = require("eslint-plugin-json-files");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescript = require("@typescript-eslint/eslint-plugin");

module.exports = [{
  name: "ESLint for SolidJS",
  files: ["**/*.jsx", "**/*.tsx", "**/*.json", "**/*.ts"],
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...globals.browser
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    parser: tsParser
  },
  linterOptions: {
    noInlineConfig: false,
    reportUnusedDisableDirectives: "error"
  },
  plugins: {
    solid,
    json,
    jsonFiles,
    typescript
  },
  settings: {
    solid: {
      version: "detect"
    }
  }
}];
