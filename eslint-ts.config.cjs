const globals = require("globals");
const typescript = require("typescript-eslint");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const config = [{
    ignores: ["**/dist/**", "**/node_modules/**", "**/build/**"],
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  js.configs.recommended,
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
  }
];

module.exports = config;
