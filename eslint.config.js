const solid = require("eslint-plugin-solid");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    name: "ESLint for SolidJS",
    files: ["**/*.jsx", "**/*.tsx"],
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
        sourceType: "module",
        project: "tsconfig.json"
      },
      parser: tsParser
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    },
    plugins: {
      solid
    },
    settings: {
      solid: {
        version: "detect"
      }
    }
  }
];
