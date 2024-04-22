const solid = require("eslint-plugin-solid");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescript = require("typescript-eslint");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");
const jsonc = require("eslint-plugin-jsonc");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [{
    ignores: ["**/dist/**", "**/node_modules/**", "**/build/**"],
    files: [
      "**/*.jsx",
      "**/*.tsx",
      "**/*.json",
      "**/*.ts",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
      "./.*.js"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  js.configs.recommended,
  jsdoc.configs["flat/recommended"],
  ...jsonc["configs"]["flat/recommended-with-json"],
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
        ...globals.browser,
        ...globals.node
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
      jsonc: jsonc
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
