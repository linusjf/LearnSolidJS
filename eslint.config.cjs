const solid = require("eslint-plugin-solid/configs/typescript");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const typescript = require("typescript-eslint");
const js = require("@eslint/js");
const jsdoc = require("eslint-plugin-jsdoc");
const jsonc = require("eslint-plugin-jsonc");
const jsoncParser = require("jsonc-eslint-parser");

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
  {
    name: "ESLint for SolidJS",
    files: ["**/*.jsx", "**/*.tsx"],
    plugins: {
      solid: solid
    },
    rules: {
      ...solid.plugins.rules
    },
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
    rules: {
      ...jsonc.configs["flat/recommended-with-json"].rules
    },
    languageOptions: {
      ecmaVersion: "latest",
      globals: {},
      parser: jsoncParser
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "error"
    },
    settings: {
      jsonc: {
        version: "detect"
      }
    }
  }
];
