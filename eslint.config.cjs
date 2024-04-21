const solid = require("eslint-plugin-solid");
const json = require("eslint-plugin-json");
const jsonFiles = require("eslint-plugin-json-files");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescript = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");
const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: solid.configs.recommended,
  allConfig: solid.configs.typescript
});

module.exports = [
  {
    name: "ESLint for SolidJS",
    files: ["**/*.jsx", "**/*.tsx", "**/*.json", "**/*.ts", "**/*.yaml"],
    ...js.configs.recommended,
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
      },
      json: {
        version: "detect"
      },
      jsonFiles: {
        version: "detect"
      },
      typescript: {
        version: "detect"
      }
    }
  }
];
