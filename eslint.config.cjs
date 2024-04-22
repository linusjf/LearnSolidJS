const solid = require("eslint-plugin-solid");
const json = require("eslint-plugin-json");
const jsonFiles = require("eslint-plugin-json-files");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescript = require("typescript-eslint");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");

module.exports = [{
    ignores: ["**/dist/**", "**/node_modules/**", "**/build/**"],
    files: [
      "**/*.jsx",
      "**/*.tsx",
      "**/*.json",
      "**/*.ts",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs"
    ]
  },
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  {
    name: "ESLint for SolidJS",
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      solid: solid
    },
    ...solid.configs["flat/recommended"],
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
    settings: {
      solid: {
        version: "detect"
      }
    }
  },
  {
    name: "ESLint for TypeScript",
    files: ["**/*.ts"],
    plugins: {
      ts: typescript
    },
    ...typescript.configs["flat/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      parser: tsParser
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    },
    settings: {
      typescript: {
        version: "detect"
      }
    }
  },
  {
    name: "ESLint for JSON",
    files: ["**/*.json"],
    plugins: {
      json: json,
      jsonFiles: jsonFiles
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: {},
      parser: tsParser
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    },
    settings: {
      json: {
        version: "detect"
      },
      jsonFiles: {
        version: "detect"
      }
    }
  }
];
